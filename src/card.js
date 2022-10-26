import React, { useState} from 'react';
import axios  from 'axios';
function Card(props) {
    const [numInfo,setnumInfo]=useState("");;
  
  
    function handleSubmit(e) {
      e.preventDefault();
    
      fetchData();
    }
    const fetchData = () => {
  
      return( axios.request(
        {
          method: 'GET',
          url: `https://numbersapi.p.rapidapi.com/random/${props.fact}`,
          params: {min: '10', max: '20', fragment: 'true', json: 'true'},
          headers: {
            'X-RapidAPI-Key': 'd2c52e84a2msh1011b5191abb835p1e5ee3jsn9fcd5819f4df',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
          }}
      ).then(function (response) {
        console.log(response.data);
        setnumInfo(response.data.number+" is " +response.data.text);
      }).catch(function (error) {
        console.error(error);
      }))
      

      
    }


    return(
      
       <div className='card col col-lg-3 col-md-4 col-sm-6 col-12 container h-100'>
      <div className="card-body">
        <h5 className="card-title">
        random / {props.fact}
        <form onSubmit={handleSubmit}>
        <div className='form input-group mb-3 '>
          <button className='btn btn-outline-info buton ' type='submit button'>Get fact for random {props.fact} number</button>
        </div>
        </form>
        
        
        </h5>
        <p className="card-text">{numInfo}</p>
      </div>
    </div>
       
      
    )
}

export default Card;