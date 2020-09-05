import React, { Component } from 'react'
import styles from './App.module.css';
import {fetchData} from './api/index';
//import  Cards from './components/Cards/Cards';
//import  Chart from './components/Chart/Chart';
//import  CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards,Chart,CountryPicker} from './components'
class App extends Component {
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetcheddata=await fetchData();
        
        this.setState({data:fetcheddata})
    }
    handleCountryChange=async(country)=>{
        const fetcheddata=await fetchData(country);

        this.setState({data:fetcheddata,country:country})
        console.log(this.state.data)
        //fetch the data

        //set the state
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
                
                
                
            </div>
        )
    }
}

export default App
