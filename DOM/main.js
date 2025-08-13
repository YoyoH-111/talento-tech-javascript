const v1="tio ben";
const v2= "recuerda lo siguiente";
const v3="un gran poder requiere una gran responsabilidad";
const v4="ten cuidado con el duende verde";

const spiderman=(peligro)=>{
    if(peligro == true){
        return `como decia el ${v1$} ${v2} ${v3}`;
    
    }else{
        return `como decia el ${v1} ${v4}`;
        }
};
//etiqueta de titulos
// const es la variable y "button" es la etiqueta.

const titulo = document.createElement("h1");
titulo.textContent = "hola me llamo spiderman";
document.body.appendChild(titulo);

const boton = document.createElement("button");
const boton2 = document.createElement("button");

boton.innerText = "Peligro";
boton2.innerText = "no peligro";
document.body.appendChild(boton);
document.body.appendChild(boton2);

// aprendiendo a hacer eventos en javascript con botones
// en la funcion con flechas, puedo crear funciones dentro de las funciones
boton.addEventListener("click",()=>{
    peligro=false;
    recordando=spiderman(peligro);
    window.location.href="index.html";  //vamos a inyectar un html,dentro de este html para que pasen cosas dentro de la pagina sin abrir otra ventana
    document.body.innerHTML=`
    <h1>${recordando} </h1>
    <button id ='boton2' ><a href='index.html'>volver</a></button>
    `;

});
