import styleApp from "../src/App.module.css";
import styleCard from "../src/card/Card.module.css";
import { useState } from "react";
import Card from "./card/Card";

function App() {

  const [ userName, setUserName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ error, setError] = useState("");
  const [ render, setRender] = useState(styleCard.render)

  const handlerOnChangeUserName = (e) => {
    
    setUserName(e.target.value);

  }

  const handlerOnChangeLastName = (e) => {
    
    setLastName(e.target.value);

  }

  const validateUserName = (userName) => {

    const withoutSpaces= userName.trim();

    if(withoutSpaces.length > 3) {

      return true;

    }else {

      return false;

    }

  };

  
  const validateLastName = (lastName) => {

    const withoutSpaces= lastName.trim();

    if(withoutSpaces.length > 6) {

      return true;

    }else {

      return false;

    }

  };

  const handlerOnSubmit = (e) => {

    e.preventDefault();

    const userNameValid = validateUserName(userName);

    const lastNameValid = validateLastName(lastName);

    if(!userNameValid || !lastNameValid) {

      setError("Por favor chequea que la información sea correcta")

    }else {

      setError("");

      setRender(styleCard.container);

    }

  }


  return (
    
    <div className={styleApp.container}>

      <div className={styleApp.formContainer}>


        <h1 className={styleApp.formTitle}>Examen Front III - Cristian Lotorto</h1>

        <form className={styleApp.form} onSubmit = {handlerOnSubmit} >

          <input 

          type = "text"
          placeholder = " Enter Name"
          value = { userName }
          onChange = { handlerOnChangeUserName } 

          />

          <input 

          type = "text"
          placeholder = " Enter Last Name"
          value = { lastName }
          onChange = { handlerOnChangeLastName }

          />

          <p className={styleApp.error}> {error} </p>

          <button className={styleApp.button} type="submit">
            Send
          </button>
        </form>



      </div>

      <Card 

      render={render}
      userName= { userName } 
      userLastName = { lastName }

      />

    </div>
    
    
  );
}

export default App;