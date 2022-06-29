//<!-- mensaje debajo de change -->
document.body.onload = addElement;

const loginButton=document.querySelector("#loginButton");
console.log(loginButton)
loginButton.addEventListener("click",(event) => {
//    debugger
    event.preventDefault()
    var done=0; 
    var usuario=document.change.usuario.value; 
    var password=document.change.password.value; 
    validateCredential(usuario, password);
})

async function validateCredential(usuario, password){
    var userdata="";
    let usuarios=await getUsuarios();
    //console.log(usuarios)
    //console.log(usuarios[1].nombre)
    
    //usuarios[0].USUARIO1
    if (usuario==usuarios[0].nombre && password==usuarios[0].contra) { 
    userdata=await getPerfil(); 
    //console.log(userdata)
    //console.log(userdata[0])
    }
    if (usuario==usuarios[1].nombre && password==usuarios[1].contra) { 
        userdata=await getPerfil(); 
        //console.log(userdata[1]) 
    } 
    if (usuario==usuarios[2].nombre && password==usuarios[2].contra) { 
        userdata=await getPerfil(); 
        //console.log(userdata[2])
    } 
    if (usuario=="" || password=="") { 
    swal("Oops!", "Debes llenar todos los campos", "error"); 
    } 
    if (userdata){
        createView(userdata)
    }
}

//function createView(){
    //para html
//}


async function getUsuarios(){
    const response = await fetch('../json/login.json');
    const responseJson =  await response.json();
    const usuarios = responseJson.usuarios;
    return usuarios
}

async function getPerfil(){
    const response = await fetch('../json/perfiles.json');
    const responseJson =  await response.json();
    const perfil = responseJson.array;
    return perfil
}


    function addElement () {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode("*para agregar más cuentas llame a soporte técnico");
        newDiv.appendChild(newContent);
        
        var currentDiv = document.getElementById("div");
        document.body.insertBefore(newDiv, currentDiv);
    }