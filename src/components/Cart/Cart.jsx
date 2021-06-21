import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles'

const Cart = ({cart}) => {
    const classes = useStyles();
    const isEmpty = !cart.line_items.length;
    
    const EmptyCard = () =>(
        <Typography variant="subtitle1">You dont have any shopping cart</Typography>
    );

    const FilledCard = () =>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Card</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    ); 
    
    if(!cart.line_items){
        return 'Loading...'
    };

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCard /> : <FilledCard />}
        </Container>
    )
}

export default Cart
