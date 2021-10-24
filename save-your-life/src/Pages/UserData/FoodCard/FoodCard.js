import { Autocomplete, TextField, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import React, {useRef, useState, useEffect} from "react";
import classes from "./FoodCard.module.css"

const FoodCard = (props) => {

    const currentData = useRef(props.data)

    useEffect(() => {
        console.log(currentData.current)
    }, [])

    return (
        <div>
        {currentData.current.map((data, key) => {  
            return(
                <div>
                    <Card sx={{ maxWidth: 345 }} className={classes.eachFood}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.image}
                                alt="green iguana"
                                />
                                <CardContent className={classes.foodContent}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.food_name}
                                </Typography>
                                <Typography variant="body2" >
                                    Energy: {data.energy}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                </div>
            )
        })}
        </div>
        
        
        // <div>
        //     <h1>hello</h1>

        //     <Card sx={{ maxWidth: 345 }}>
        //         <CardActionArea>
        //             <CardMedia
        //             component="img"
        //             height="140"
        //             image={currentData.current.image}
        //             alt="green iguana"
        //             />
        //             <CardContent>
        //             {/* <Typography gutterBottom variant="h5" component="div">
        //                 Lizard
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 Lizards are a widespread group of squamate reptiles, with over 6,000
        //                 species, ranging across all continents except Antarctica
        //             </Typography> */}
        //             </CardContent>
        //         </CardActionArea>
        //     </Card>
        // </div>
        
    )
}

export default FoodCard