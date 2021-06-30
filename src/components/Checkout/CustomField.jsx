import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const CustomField = ({name, label, required}) => {
    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                
                        as={TextField}
                        required={required}
                        label={label}
                        fullWidth
                        
                                   control={control}
                name={name}
            />
        </Grid>
    )
}

export default CustomField
