import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../../components/utils/Provider';
import { types } from '../../components/utils/Reducer';
import axios from 'axios';
import './detail.css';


const baseURL = "https://jsonplaceholder.typicode.com/";

const Detail = () => {

  const params = useParams();

  const {state, dispatch} = useContext(ContextGlobal);  
  const dentistData = state.dataById;

  const getData = async (id) => {
      
      const response = await axios.get(`${baseURL}users/${id}`)
      
       dispatch({type: types.fetchById , payload: response?.data})
  
    };

  useEffect(() => {

    getData(params.id);

  }, []);

  return (
    <div className='detail-container'>
      <h1>Detail Dentist id </h1>

        <table>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>

          <tr>
            <td>{dentistData.name}</td>

            <td>{dentistData.email}</td>

            <td>{dentistData.phone}</td>
          
            <td><a href={dentistData.website}>{dentistData.website}</a></td>
          </tr>

        </table>

    </div>
  )
}

export default Detail