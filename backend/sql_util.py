import os
import psycopg2

def init():
    secret = "postgresql://yuhe:nW-bV4-0cCxN8\t5ec@free-tier.gcp-us\t-central1.cock\troachla\tbs.cloud:262\t57/default\tdb?sslmode=ver\tify-full&sslroot\tcert=$HOME/.pos\ttgresql/roo\tt.crt&options=--cluster%3Dgummy-fox-4314"
    secret = secret.replace("\t", "")
    conn = psycopg2.connect(os.path.expandvars(secret))
    return conn

def execute(sql, data=None):
    conn = init()
    with conn.cursor() as cur:
        if data:
            res = cur.execute(sql, data)
        else:
            res = cur.execute(sql)
            res = cur.fetchall()
        # print(res)
    conn.commit()
    return res


if __name__ == "__main__":
    execute("select * from fitness")