import React,{ useState, useEffect } from 'react';
import { Button, InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import CustomField from './CustomField';

import {commerce} from '../../lib/commerce';

const AddressForm = ({checkoutToken}) => {
    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState([]);
    const [divisions, setDivisions] = useState([]);
    const [division, setDivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState([]);

    const countries = Object.entries(shippingCountries).map(([code, name]) => (
        {id: code, lable:name}
    ));
    // console.log(countries);

    const fetchCountries = async (checkoutTokenId) =>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

            // console.log(countries);
            setShippingCountries(countries)
            setShippingCountry(Object.keys(countries)[0]);

    }
    useEffect(()=>{
        fetchCountries(checkoutToken.id)
    },[])
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <CustomField required name="First name" label="first name" />
                        <CustomField required name="Last name" label="Last name" />
                        <CustomField required name="Address" label="Address" />
                        <CustomField required name="Email" label="Email" />
                        <CustomField required name="City" label="City" />
                        <CustomField required name="Zip" label="Zip /Post code" />
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Country</InputLabel>
                                <Select value={shippingCountry} fullWidth onchange={(e)=> setShippingCountry(e.target.value)}>
                                    {countries.map((country)=>(
                                        <MenuItem key={country.id} value={country.id}>
                                            {country.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <InputLabel>Shipping Subdivisions</InputLabel> */}
                                {/* {counties.map((country)=>(

                                ))}
                                <Select value={} fullWidth onchange={}>
                                    <MenuItem key={}>
                                        Select Me
                                    </MenuItem>
                                </Select> */}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* <InputLabel>Shipping Country</InputLabel> */}
                                {/* <Select value={} fullWidth onchange={}>
                                    <MenuItem key={}>
                                        Select Me
                                    </MenuItem>
                                </Select> */}
                            </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
