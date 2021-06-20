import React from 'react';
import {Grid} from '@material-ui/core';
import SingleProduct from './Product/SingleProduct';

import useStyles from './styles'

const products  = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running shoes',
        price: '$5',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg?crop=1xw:1xh;center,top&resize=480:*'
    },
    {
        id: 2,
        name: 'watch',
        description: 'Running watch',
        price: '$15',
        image: 'https://fdn.gsmarena.com/imgroot/news/21/04/oneplus-watch-update/-1200/gsmarena_002.jpg',
    },
    {
        id: 3,
        name: 'glasses',
        description: 'Running glasses',
        price: '$25',
        image: 'https://specials-images.forbesimg.com/imageserve/5fce94930dfcaf95291dc2a3/960x0.jpg?cropX1=273&cropX2=1801&cropY1=0&cropY2=1018'
    }
];

const Products = () =>{
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product)=>{
                    return(
                    <Grid item={product.id} xs={12} sm={6} lg={3}>
                        <SingleProduct product={product} />
                    </Grid>
                    )    
                })
            }
        </Grid>
    </main>
    );
}

export default Products;