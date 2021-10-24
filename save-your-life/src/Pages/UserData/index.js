import { Autocomplete, TextField, Card, CardContent, CardMedia, Typography, Grid,
    CardActionArea, Box } from "@mui/material";
import React, {useRef, useState, useEffect} from "react";
import classes from "./index.module.css";
import defaultData from "./data.json";
import FoodCard from "./FoodCard/FoodCard";


const UserData = () => {

    const dataRef = useRef(defaultData);

    useEffect(() => {
        // console.log(data)
    }, [])

    const onInputWeight = (params) => {}

return(

    <div>
        {dataRef.current.map((data, key) => {
            // console.log("data",data.result)
            // console.log(key)
            return (
                <div>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <FoodCard
                    data = {data.result}
                    key = {data.id}
                    ></FoodCard>
                </Grid>
              </Box>
              </div>
            )
        })
        }



        {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={weight}
        sx={{width: 300}}
        renderInput={(params) => <TextField {...params} label="weight" />}
        /> */}

        {/* <div className={classes.board}>
        </div> */}
    </div>
 
)
}

export default UserData;


const weight = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]