import React from 'react'
import axios from 'axios';
const url="https://covid19.mathdro.id/api"

export const fetchData =async(country)=> {
    let changeableUrl=url;
    if(country){
        changeableUrl=url+'/countries/'+country
    }
try{
    const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeableUrl)
    const modifieddata={confirmed,recovered,deaths,lastUpdate}
    return modifieddata;
}
    catch(error){

    }
}
export const fetchDailyData=async()=>{
    try{
        const {data}=await axios.get(url+'/daily')
        const modifieddata= data.map((dailydata)=>(
        {
         
            confirmed: dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate
        }
        )
        )
   return modifieddata;
    }
    catch(err){
console.log(err)
    }
}

export const fetchCountries=async()=>{
try{
    const {data:{countries}}=await axios.get( `${url}/countries`);
return countries.map((country)=>country.name)

}
catch(err){
    console.log(err)

}

}


