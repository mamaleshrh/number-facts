import React, { useState} from 'react';
import axios  from 'axios';
import MainData from "./maindata.js";

function Form(){
  
      const getInitialState = () => {
        const value = "math";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const [numInfo,setnumInfo]=useState("");;
  
  
    function handleSubmit(e) {
      e.preventDefault();
      
      fetchData(e.target.elements[0].value,value);
    }

    const fetchData = (num,target) => {
  
      return (    axios.request(
        {
          method: 'GET',
          url: `https://numbersapi.p.rapidapi.com/${num}/${target}`,
          params: {min: '10', max: '20', fragment: 'true' },
          headers: {
            'X-RapidAPI-Key': 'd2c52e84a2msh1011b5191abb835p1e5ee3jsn9fcd5819f4df',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
          }
        }
        // ;
        
        
        
        
        
        ).then(function (response) {
        console.log(response);
        setnumInfo(`${num}`+" is "+response.data);
  
      }).catch(function (error) {
        console.error(error);
      }))
    }
  

  
  
    const handleChange = (e) => {
      setValue(e.target.value);
      
    };
  
    
return(
  <div className='inputs top1  '>
  <h2 className='centre'>🪙Specific fact searcher</h2>
    <form onSubmit={handleSubmit}>

    <div  id="number" className='form input-group-lg mb-3'>
      <input className='form-control input centre' type="number" autoComplete='off' id="numberEntered" placeholder='enter the number'/>
     
      <select className='btn btn-light dropdown-toggle mt-4 dropdown'  value={value} onChange={handleChange}>
        <option className='dropdown-item input' value="trivia">trivia</option>
        <option className='dropdown-item input' value="math">math</option>
        <option className='dropdown-item input' value="year">year</option>
      </select>

    </div>
      
      <button className='btn btn-outline-danger infobuton container ' type='submit button'>get fact</button>


    </form>
   <MainData  title={numInfo}/>
  </div>
)
}

export default Form;