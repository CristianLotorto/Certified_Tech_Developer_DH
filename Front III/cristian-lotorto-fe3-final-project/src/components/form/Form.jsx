import React, { useState } from "react";
import './form.css';

const Form = () => {
  
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errorMsj, setErrorMsj] = useState("");
  const [successMsj, setSuccessMsj] = useState("");
  const [styleMsj, setStyleMsj] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeUserEmail = (e) => setUserEmail(e.target.value);

  const validateUserName = (userName) => {

    const withoutSpaces = userName.trim();

    if (withoutSpaces.length > 2) {
      return true;
    }else {
      return false;
    }

  };

  const validateUserEmail = (userEmail) => {

    const withoutSpaces = userEmail.trim();

    if (withoutSpaces.length > 0) {
      return true;
    }else {
      return false;
    }

  };


  const onSubmitForm = (e) => {
    e.preventDefault();
    
    const userNameValid = validateUserName(userName);
    const userEmailValid = validateUserEmail(userEmail);

    if (!userNameValid || !userEmailValid) {
      setStyleMsj('error');
      setErrorMsj("Por favor chequea que la información sea correcta");
    }else {
      
      setErrorMsj("");
      setStyleMsj('success');
      setSuccessMsj(`Gracias ${userName}, te contactaremos cuando antes vía Email!`);
    }

  }

  

  return (
    <div className="form-container">
      <form onSubmit={onSubmitForm}>

        <input 
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={onChangeUserName}
        />

        <input 
        type="email"
        placeholder="User Email"
        value={userEmail}
        onChange={onChangeUserEmail}
        />

        <input type="submit"  value="Send"/>


      </form>

    <p className={styleMsj}>
      {errorMsj}
      {successMsj}
    </p>

    </div>
  );
};

export default Form;