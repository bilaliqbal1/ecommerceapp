import React from 'react';
import { Button, InputLabel, Select, MenuItem,Grid,Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

const AddressForm = () => {
    const methods = useForm();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={}>
                    <Grid container spacing={3}>
                        
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
