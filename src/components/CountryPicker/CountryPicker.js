import React,{useState,useEffect} from 'react'
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/index';
import {NativeSelect,FormControl} from '@material-ui/core';


const CountryPicker=({handleCountryChange})=>{
    const [fetchedCountries,setFetch]=useState([]);
    useEffect(()=>{
        const fetchfun=async()=>{
            setFetch(await fetchCountries());
        }
        
        fetchfun();
    });

    return (
       <FormControl classNamee={styles.form}>
           <NativeSelect  onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="">Global</option>
        {fetchedCountries.map((cntry)=><option value={cntry}>{cntry}</option>)}
               
           </NativeSelect>
       </FormControl>
    )
}

export default CountryPicker
