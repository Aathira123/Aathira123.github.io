import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api/index';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
import { purple } from '@material-ui/core/colors';
function Chart({data:{confirmed,recovered,deaths},country}) {
    const[dailydata,setDailyData]=useState([])
    useEffect(()=>{
        const fetchApi=async()=>{
            setDailyData( await fetchDailyData());
        }
        console.log(recovered)
         fetchApi();
    },[]);

    const barChart=(
   confirmed? 
   <Bar 
   data={{
      labels:['Infected','Recoverd','Deaths'],
      datasets:[{
          label:'People',
      backgroundColor:['red','green','blue'],
      data:[confirmed.value,recovered.value,deaths.value]
    

      }]


   }}
   options={{
       legend:{display:false},
       title:{display:true,text:`Current state in ${country}`}
   }}
   
   
   />:null


    )
    const lineChart=(
        
        dailydata.length?<Line
        data={{

            labels:dailydata.map((x)=> x.date),
            datasets:[{
                data:dailydata.map(({confirmed})=>confirmed),
                label:'Infected Daily',
                borderColor:'#3333ff',
                fill:true,
                

            },{
                data:dailydata.map(({deaths})=>deaths),
                label:'Daily Deaths',
                borderColor:'red',
                fill:true
            }],
        }

        }
        
        />:null

    )
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}
        </div>
    )
}

export default Chart
