import React, { useState} from 'react';
import axios  from 'axios';
import MainData from "./maindata.js";

function Form(){
  
      const getInitialState = () => {
        const value = "math";
        return value;
      };
      const [value, setValue] = useState(getInitialState);
      const [user,setUser]=useState("");;
  
  
    function handleSubmit(e) {
      e.preventDefault();
      const {username} = e.target.elements
      fetchData(username.value,value);
    }
    // const fetchData = (num,tar) => {
  
    //   return axios.get(`http://numbersapi.com/${num}/${tar}`)
    //   .then((response) =>{ setUser(response.data);
    
    // });
      
    // }



    const fetchData = (num,tar) => {
  
      return (    axios.request(


        
        // options
        // const options = 
        {
          method: 'GET',
          url: `https://numbersapi.p.rapidapi.com/${num}/${tar}`,
          params: {min: '10', max: '20', fragment: 'true' },
          headers: {
            'X-RapidAPI-Key': 'd2c52e84a2msh1011b5191abb835p1e5ee3jsn9fcd5819f4df',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
          }
        }
        // ;
        
        
        
        
        
        ).then(function (response) {
        console.log(response);
        setUser(`${num}`+" is "+response.data);
  
      }).catch(function (error) {
        console.error(error);
      }))
    //   axios.get(options)
    //   .then((response) =>{ setUser(response);
    
    // });
      
    }
  

  
  
    const handleChange = (e) => {
      setValue(e.target.value);
      
    };
  
    
return(
  <div className='inputs '>
    <form onSubmit={handleSubmit}>

    <div  id="number" className='form input-group-lg mb-3'>
      <input className='form-control input centre' type="number" autoComplete='off' id="username" placeholder='enter the number'/>
     
      <select className='btn btn-light dropdown-toggle mt-4 dropdown'  value={value} onChange={handleChange}>
        <option className='dropdown-item input' value="trivia">trivia</option>
        <option className='dropdown-item input' value="math">math</option>
        <option className='dropdown-item input' value="year">year</option>
        <option className='dropdown-item input' value="date">date</option>
      </select>

    </div>
      
      <button className='btn btn-outline-info infobuton container ' type='submit button'>get fact</button>


    </form>
   <MainData  title={user}/>
  </div>
)
}

export default Form;