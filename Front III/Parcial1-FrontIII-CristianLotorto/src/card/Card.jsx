import styleCard from "../card/Card.module.css";

function Card({userName, userLastName, render}) {
    
    return(

        <div className={render} >

            <h2 className={styleCard.title} >Hola {userName}!</h2>

            <p className={styleCard}>Tu nombre completo es: <span className={styleCard.fullName}>{userName} {userLastName}</span></p>

        </div>

    );

}

export default Card;