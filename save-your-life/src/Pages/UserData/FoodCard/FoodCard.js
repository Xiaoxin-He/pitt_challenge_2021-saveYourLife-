import { Autocomplete, TextField, Card, CardContent, CardMedia, Typography, CardActionArea, 
     Grid, Alert, AlertTitle, Stack } from "@mui/material";
import React, {useRef, useState, useEffect} from "react";
import classes from "./FoodCard.module.css"

const FoodCard = (props) => {

    const currentData = useRef(props.data)
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [alertContent, setAlertContent] = useState("");
    const [severity, setSeverity] = useState("");

    useEffect(() => {
        console.log(currentData.current)
    }, [])

    const handleCardClick = (currentCard) => {
        window.localStorage.setItem("energy", currentCard.data.energy);
        console.log(currentCard.data)
        if(currentCard.data.energy > 50 && currentCard.data.energy < 60) {
            setAlertTitle("Success")
            setSeverity("success")
            setAlertContent("This is a healthy meal, +1 badge 🎉");
        }
        if(currentCard.data.energy > 60 && currentCard.data.energy < 70) {
            setAlertTitle("Warning")
            setSeverity("warning")
            setAlertContent("Be aware of your deit 😟");
        }
        if(currentCard.data.energy >= 70) {
            setAlertTitle("Error")
            setSeverity("error")
            setAlertContent("You are in danger 😡 -1 badge");
        }

        // console.log(alertTitle.toLowerCase)
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)
    }

    const onCloseAlert = () => {
        setTimeout(() => {
        }, 3000)
    }
    return (
        <div>
            {
            alert &&
            <div className={classes.alert}>
             <Alert severity="error">
            <AlertTitle>{ alertTitle }</AlertTitle>
            <strong>{ alertContent }</strong>
            </Alert>
            </div>
            }

        <div style={{display: 'flex', marginTop: "5%"}}>
        {currentData.current.map((data, key) => {  
            return(
                <Grid item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }} className={classes.eachFood} onClick={() => handleCardClick({ data})}>
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
                </Grid>
            )
        })}
        </div>
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