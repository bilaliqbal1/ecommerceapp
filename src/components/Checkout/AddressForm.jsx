import React,{ useState, useEffect } from 'react';
import { Button, InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import CustomField from './CustomField';

import {commerce} from '../../lib/commerce';

const AddressForm = ({checkoutToken}) => {
    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [subDivisions, setSubDivisions] = useState([]);
    const [subDivision, setSubDivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const countries = Object.entries(shippingCountries).map(([code, name]) => (
        {id: code, label:name}
    ));
    const division = Object.entries(subDivisions).map(([code, name]) => (
        {id: code, label:name}
    ));
    const options = shippingOptions.map((s0) => ({id:s0.id,lebel:`${s0.description} - (${s0.price.fomatted_with_symbol})`}))
    // console.log(countries);

    const fetchCountries = async (checkoutTokenId) =>{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

            // console.log(countries);
            setShippingCountries(countries)
            setShippingCountry(Object.keys(countries)[0]);

    }
    const fetchSubdivsion = async (countryCode) =>{
        const {division} = await commerce.services.localeListShippingSubdivisions(countryCode);

        setSubDivisions(division);
        setSubDivision(Object.keys(division)[0]);

    }
    const fetchOptions = async (checkoutTokenId, country, region=null) =>{
        const options  = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});

        setShippingOptions(options);
        setShippingOption(options[0].id);

    }
    useEffect(()=>{
        fetchCountries(checkoutToken.id)
    },[])

    useEffect(()=>{
        if(shippingCountry) fetchSubdivsion(shippingCountry);
    },[shippingCountry])
    
    useEffect(()=>{
        if(setSubDivision) fetchOptions(checkoutToken.id, shippingCountry, subDivision);
    },[subDivision])
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
                                <InputLabel>Shipping Subdivisions</InputLabel> 
                                <Select value={subDivision} fullWidth onchange={(e)=> setSubDivision(e.target.value)}>
                                {division.map((subdivision)=>(
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))} 
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Options</InputLabel>
                                <Select value={shippingOption} fullWidth onchange={(e)=> setShippingOption(e.target.value)}>
                                {options.map((option)=>(
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))} 
                                </Select>
                            </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
