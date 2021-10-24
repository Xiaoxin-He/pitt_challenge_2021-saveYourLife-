import logging
import os
import psycopg2
import xlrd

def foodform(conn):
    sheet=xlrd.open_workbook("Supplementary_material.xlsx")
    table=sheet.sheets()[0]
    nrow=table.nrows
    imgList=["https://domf5oio6qrcr.cloudfront.net/medialibrary/5113/h0518g16207257080528.jpg",
            "https://ychef.files.bbci.co.uk/1600x900/p07v2wjn.webp",
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/4F91/production/_108296302_cauliflowergetty.jpg",
            "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cucumber-slice-royalty-free-image-153556336-1562870568.jpg",
            "https://m.media-amazon.com/images/I/61awtjWicTL._SL1024_.jpg",
            "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
            "https://femina.wwmindia.com/thumb/content/2021/feb/applestn111613997840.jpg?width=1200&height=900",
            "https://solidstarts.com/wp-content/uploads/when-can-babies-eat-cherries.jpg",
            "http://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_336818993meyer_1024x1024.jpg?v=1614965965"
            ]
    with conn.cursor() as cur:
        cur.execute("CREATE TABLE food(food_id int, food_img string, food_name string, food_energy float)")
        for i in range(nrow):
            # print(i)
            if i==0:
                continue
            if (i<10):
                img=imgList[i]
            else:
                img=""
            insert_query=""" INSERT INTO food VALUES(%s,%s,%s,%s)"""
            record=(i, img, table.row_values(i)[1],table.row_values(i)[2])
            cur.execute(insert_query,record)
        logging.debug("foodform(): status message: %s", cur.statusmessage)
        conn.commit()

def fitnessform(conn):
    sheet=xlrd.open_workbook("fitness.xlsx")
    table=sheet.sheets()[0]
    nrow=table.nrows
    with conn.cursor() as cur:
        cur.execute("CREATE TABLE fitness(f_id int, f_name string, f_energy float)")
        for i in range(nrow):
            insert_query=""" INSERT INTO fitness VALUES(%s,%s,%s)"""
            record=(i, table.row_values(i)[0],table.row_values(i)[1])
            cur.execute(insert_query,record)
        logging.debug("fitnessform(): status message: %s", cur.statusmessage)
        conn.commit()

def food_record(conn):
    with conn.cusor() as cur:
        cur.execute("CREATE TABLE food_record(uid int, food_id int, amount float, date date)")
        logging.debug("fitnessform(): status message: %s", cur.statusmessage)
        conn.commit()

def fitness_record(conn):
    with conn.cusor() as cur:
        cur.execute("CREATE TABLE fintness_record(uid int, f_id int, amount float, date date)")
        logging.debug("fitnessform(): status message: %s", cur.statusmessage)
        conn.commit()

def main():
  conn_string = input('Enter a connection string:\n')

  conn = psycopg2.connect(os.path.expandvars(conn_string))
  foodform(conn)
  fitnessform(conn)
  food_record(conn)

  # Close communication with the database.
  conn.close()

if __name__ == "__main__":
    main()