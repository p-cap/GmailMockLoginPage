import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import gmailIcon from '../images/google-perfect.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FooterMock from './FooterMock';

const useStyles = makeStyles(() => ({
    login: {
        fontFamily: 'Roboto',
    },
    square: {
        width: '400px',
        height: '440px',
        padding: '40px'
    },
    bluish: {
        color: '#1a73e8',
        fontWeight: 500
    },
    nextButton: {
        backgroundColor: '#1a73e8',
        color: 'white',
        fontWeight: '500',
        fontSize: '.874rem',
        width: '88px',
        height: '36px',
        textTransform: 'none',
        "&:hover": {
            backgroundColor: '#1a73e8'
        }
    },
    footer: {
        width: '496px'
    }

}))

export default function GmailMock() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    
    return (
        <div>        
                <Grid container 
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: '100vh'}}
                    className={classes.login}
                    spacing = {2}
                    >
                    <Grid item>
                            <Paper 
                             className={classes.square}
                             elevation={3}
                            >
                                <Box style={{textAlign: "center"}}>
                                    <img src={gmailIcon}
                                    ></img>
                                    <Typography variant="h5">
                                        Sign in
                                    </Typography>
                                    <br></br>
                                    to continue to Gmail
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </Box>
                                <Box>
                                    <TextField id="outlined-basic" label="Email or phone" variant="outlined" fullWidth/>
                                    <br></br>
                                    <br></br>
                                    <Link href="#"
                                    underline="none" color="inherit" 
                                    onClick={preventDefault}
                                    className={classes.bluish}
                                    >
                                    Forgot email?
                                    </Link>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    
                                </Box>
                                <Box>
                                    Not your computer? Use Guest mode to sign in privately.
                                    <br></br>
                                    <Link href="#" onClick={preventDefault} 
                                    className={classes.bluish}
                                    underline="none" color="inherit"
                                    >
                                    Learn more
                                    </Link>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </Box>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Link href="#" onClick={preventDefault}
                                    className={classes.bluish}
                                    underline="none" color="inherit"
                                    >
                                        Create account
                                    </Link>
                                    <Button variant="contained" 
                                    className={classes.nextButton}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    <Grid item className={classes.footer}>
                        <FooterMock></FooterMock>
                    </Grid>       
                </Grid>
        </div> 
    )
}