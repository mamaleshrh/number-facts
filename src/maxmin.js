import React, { useState} from 'react';
import axios  from 'axios';
import MainData from "./maindata.js";
var val="math";
function Form2(){
  
      const getInitialState = () => {
        const value = "math";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const [numberInfo,setnumberInfo]=useState("");

  
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.elements);

      fetchData(e.target[0].value,e.target[1].value);
    }

    const fetchData = (min,max) => {
  
      return (    axios.request(


        
        // options
        // const options = 
        {
          method: 'GET',
          url: `https://numbersapi.p.rapidapi.com/random/${value}`,
          params: {min: `${min}`, max: `${max}`, fragment: 'true',json:'true' },
          headers: {
            'X-RapidAPI-Key': 'd2c52e84a2msh1011b5191abb835p1e5ee3jsn9fcd5819f4df',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
          }
        }
        // ;
        
        
        
        
        
        ).then(function (response) {
        console.log(response);
        setnumberInfo(response.data.number+" is "+response.data.text);
  
      }).catch(function (error) {
        console.error(error);
      }))
    //   axios.get(options)
    //   .then((response) =>{ setUser(response);
    
    // });
      
    }
  

  
  
    const handleChange = (e) => {
      setValue(e.target.value);
      val=value;
      
    };
  
    
return(
  <div   >
  <h2 className='centre'>🪙Range fact searcher</h2>
    <form onSubmit={handleSubmit}>
        <div className=' input-group-lg'>

    <div className='row'>
            <div className='col col-lg-4 col-md-4 maxmin container'>
                <input className='form-control input centre  ' type="number" autoComplete='off' id="minimum" placeholder='enter the minimum'/>
            </div>
            <div className='col col-lg-4 col-md-4 maxmin container'>
                <input className='form-control input centre' type="number" autoComplete='off' id="maximum" placeholder='enter the maximum'/>
            </div>
            <div className='col col-lg-4 col-md-4  maxmin container '>
                <select className='btn btn-light dropdown-toggle mt-4 dropdown maxmin'  value={value} onChange={handleChange}>
                    <option className='dropdown-item' value="trivia">trivia</option>
                    <option className='dropdown-item' value="math">math</option>
                    <option className='dropdown-item' value="year">year</option>
                <option className='dropdown-item' value="date">date</option>
                </select>
            </div>
        </div>
    </div>
    
      
      
     
      

    
      
      <button className='btn btn-outline-danger infobuton container ' type='submit button'>get fact</button>


    </form>
   <MainData  title={numberInfo}/>
  </div>
)
}

export default Form2;