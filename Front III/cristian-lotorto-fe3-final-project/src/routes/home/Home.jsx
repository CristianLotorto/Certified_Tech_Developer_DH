import React, { useContext, useEffect } from 'react';
import Card from '../../components/card/Card';
import { ContextGlobal } from '../../components/utils/Provider';
import axios from 'axios';
import { types } from '../../components/utils/Reducer';
import './home.css';


const baseURL = "https://jsonplaceholder.typicode.com/";

const Home = () => {

  const {state, dispatch} = useContext(ContextGlobal);

  const getData = async () => {
      
      const response = await axios.get(`${baseURL}users`)
      
       dispatch({type: types.fetchAll , payload: response?.data})
  
    };

  useEffect(() => {

    getData();

    
  },[]);



  return (
    <main className="home-main" >
      <h1>Home</h1>
      <div className='card-grid'>
        
        {state.data.map(dentist =>{
          return(

            <Card key={dentist.id} data={dentist} />

          );
          })
        }
      
        
      </div>
    </main>
  )
}

export default Home