import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles  from './styles';
import logo from '../../assests/commerce.png';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/cart" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="35px" className={classes.image} />
                        E-Commerce App
                    </Typography>
                    <div className={classes.grow} />
                        { location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <AddShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                        ) }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
