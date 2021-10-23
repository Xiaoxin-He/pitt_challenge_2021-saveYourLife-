import React, { useRef } from "react";
import classes from './Login.module.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Header from "../../Layout/header";
import { useHistory } from "react-router-dom";
import { Checkbox, TextField, FormGroup, FormControlLabel, Button } from "@mui/material";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        try {
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
            history.push("/");
        } catch(e){
            history.push("/login");
            alert("email or password in invalid!");
        }
        // console.log("submitted")
    }

    return (
        <div className={classes.form}>
            <Header/>
            <Grid>
                <Paper className={classes.paperStyle} elevation={10}>
                    <Grid align="center">
                        <Avatar>H</Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <div className={classes.textField}>
                    <TextField label="Email" placeholder="Enter email" inputRef={emailRef}
                    fullWidth required
                    ></TextField>
                    </div>
                    <TextField label="Password" placeholder="Enter password" inputRef={passwordRef}
                     fullWidth required></TextField>
                     <FormGroup>
                         <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                     </FormGroup>
                     <Button variant="contained" type="submit" onClick={handleSubmit} className={classes.login_btn}>Sign in</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default Login;