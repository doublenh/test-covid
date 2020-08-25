import React from "react";

export default  [
    {
        name: 'Country',
        selector : 'Country', 
        sortable : true ,
    }, {
        name: 'Total Confirmed',
        selector : 'TotalConfirmed', 
        sortable : true,
        cell : row => row.TotalConfirmed === 0 ? <div>unreported</div> : row.TotalConfirmed
    }, {
        name: 'Total Deaths',
        selector : 'TotalDeaths', 
        sortable : true ,
        cell : row => row.TotalDeaths === 0 ? <div>unreported</div> : row.TotalDeaths
    }, {
        name: 'Total Recovered',
        selector : 'TotalRecovered', 
        sortable : true,
        cell : row => row.TotalRecovered === 0 ? <div>unreported</div> : row.TotalRecovered 
    }, {
        name: 'Date',
        selector : 'Date', 
        sortable : true  
    }]