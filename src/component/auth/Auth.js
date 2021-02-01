import React, { useState } from 'react'
import { Avatar, Button, Typography, Paper, Grid, Container } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';
import Icon from './icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin,signup} from '../../actions/auth';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormdata] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });


    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignup){
            dispatch(signup(formData,history));
        }else{
            dispatch(signin(formData, history));
        }
       
    }
    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }
    const handleShowPassword = () => (setShowPassword(!showPassword));

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = () => {
        console.log("google sign in was unsuccesful. Try Again Later");
    };



    return (
        <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Typography>

                {/* form */}

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />

                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />

                        {
                            isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignup ? 'Sign Up' : 'Sign In'
                        }
                    </Button>

                    {/* google login button */}
                    <GoogleLogin
                        clientId='142125846385-jf46u04l08sl1kubm1mr91cv19dgg3n4.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'>
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"

                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}
export default Auth;