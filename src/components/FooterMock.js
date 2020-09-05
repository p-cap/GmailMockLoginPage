import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const countries = [
    'English (United States)',
    'Filipino',
    'German',
    'French'
]

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    rightFooter: {
      width: '200px'
    }
  }));

export default function FooterMock(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
    <div className={classes.root}>
     <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <List component="nav" aria-label="countries" >
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="English(United States)"
                onClick={handleClickListItem}
                style={{fontSize: "0.5rem"}}
              >
                <ListItemText primary={countries[selectedIndex]} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              
            >
              {countries.map((country, index) => (
                <MenuItem
                  key={country}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  style={{fontSize: "0.75rem"}}
                >
                  {country}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
           <Grid item>
              <Grid container className={classes.rightFooter} justify="space-between" alignItems="center"> 
                  <Grid item>
                    <Link href="#" underline="none" color="inherit">Help</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" underline="none" color="inherit">Privacy</Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" underline="none" color="inherit">Terms</Link>
                  </Grid>
              </Grid> 
            </Grid>
      </Grid>
    </div>
    );
}
