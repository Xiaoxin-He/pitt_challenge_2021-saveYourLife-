import { Autocomplete, TextField, Card, CardContent, CardMedia, Typography, Grid,
    CardActionArea, Box } from "@mui/material";
import React, {useRef, useState, useEffect} from "react";
import classes from "./index.module.css";
import defaultData from "./data.json";
import FoodCard from "./FoodCard/FoodCard";
import axios from 'axios';

import InputUnstyled from '@mui/core/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')(`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #E5E8EC;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262D;
  transition: width 300ms ease;

  &:hover {
    background: #EAEEF3;
    border-color: #E5E8EC;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});


const UserData = () => {

    const [data, setData] = useState([]);
    const defaultData = useRef([]);

    useEffect(() => {
        // console.log(dataRef.current[0].result)
        // console.log(defaultData.current)
        async function fetchData() {
            const res = await axios.request({
                method: "get",
                url: "/getAllFood/1/"
            })
            setData(res.data);
        }
        fetchData();
    }, [data])

    defaultData.current = data;

    const onInputWeight = (params) => {}

return(

    <div>
        <CustomInput aria-label="Demo input" placeholder="Find your diet..." />
        {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        className= {classes.food_input}
        disableClearable
        options={defaultData.current[0].map((option) => option.food_name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Food 🍔"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      /> */}
        {/* {dataRef.current.map((data, key) => { */}
        {data.map((data, key) => {
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
