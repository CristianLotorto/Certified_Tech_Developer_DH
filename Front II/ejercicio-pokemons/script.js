async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.
  const contenedorPokeImagen=document.querySelectorAll(`.card-img-top`);
  contenedorPokeImagen[order-1].setAttribute("src",`${pokemonData.imagen}`);
    
  
  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css
  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:
  function rellenarBarras(){
    const tiempoCarga=2000;
    
    const barraHP=document.getElementById(`barra-hp-${order}`);
    const cantHP=document.getElementById(`cantidad-hp-${order}`)
    const barraATK=document.getElementById(`barra-ataque-${order}`);
    const cantATK=document.getElementById(`cantidad-ataque-${order}`)
    const barraDEF=document.getElementById(`barra-defensa-${order}`);
    const cantDEF=document.getElementById(`cantidad-defensa-${order}`)
    const barraVEL=document.getElementById(`barra-velocidad-${order}`);
    const cantVEL=document.getElementById(`cantidad-velocidad-${order}`)
    


    

    let stats=pokemonData.stats;
    let width=0;
    const progresoSobreTiempoTotal=tiempoCarga/100;
    
    stats.forEach(stat=>{
      const amount=stat.amount;
      const name=stat.name;

      
      let id=setInterval(()=>{
        if(width>=amount){
          
          clearInterval(id);
        }else{
          width++;
          switch(name){
            case "hp":
              barras(barraHP,cantHP);
              break;
            case "ataque":
              barras(barraATK,cantATK);
              break;
            case "defensa":
              barras(barraDEF,cantDEF);
              break;
            case "velocidad":
              barras(barraVEL,cantVEL);
              break;
        }
        }  

      }, progresoSobreTiempoTotal);
    });
  
    

    function barras(barra,span){

        barra.style.width=`${width}%`;
          if(width<35){
            barra.classList.add("rojo");
          }else if(width>=35 && width<70){
            barra.classList.remove("rojo");
            barra.classList.add("amarillo");
          }else if(width>=70 && width<=100){
            barra.classList.remove("amarillo");
            barra.classList.add("verde");
          }
      
    
        span.innerHTML=`${width}`;
        if(width<35){
          span.classList.add("rojo");
        }else if(width>=35 && width<70){
          span.classList.remove("rojo");
          span.classList.add("amarillo");
        }else if(width>=70 && width<=100){
          span.classList.remove("amarillo");
          span.classList.add("verde");
        }
        
    }
  }
  rellenarBarras();
  


}



//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["golduck", "kadabra", "charmeleon", "wartortle"];
function cargarConEstilo(){
  const boton=document.querySelector("button");
  const botonSpan=document.querySelector("button span");
  const botonImg=document.querySelector("button img");
  boton.addEventListener("click", ()=>{

    spinner();

    boton.setAttribute("disabled","");
    
    setTimeout(()=>{
      spinner();
      boton.classList.add("ocultar");
    },2000)

    //INICIALIZADOR - NO TOCAR
    pokemons.forEach((pokemon, index) => {
      const pokemonNumber = index + 1;
      createPokemonCard(pokemon, pokemonNumber);
      fillPokemonData(pokemon, pokemonNumber);
    });
    
  });
  function spinner(){
    botonSpan.classList.toggle("ocultar");
    botonImg.classList.toggle("ocultar");
  }
  
}
cargarConEstilo();
