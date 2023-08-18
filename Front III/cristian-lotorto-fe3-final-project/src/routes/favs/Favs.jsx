import React, { useContext } from "react";
import { ContextGlobal } from "../../components/utils/Provider";
import Card from "../../components/card/Card";
import './favs.css';

const Favs = () => {

  const {state} = useContext(ContextGlobal);

  return (
    <div className="favs-container">
      <h1>Dentists Favs</h1>

      <div className='card-grid'>
        
        {state.favDentists.map(dentist =>{
          return(

            <Card key={dentist.id} data={dentist} />

          );
          })
        }
      
      </div>
    </div>
  );
};

export default Favs;