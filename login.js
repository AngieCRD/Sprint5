let registros =[];
exports.registros = registros;

let x = document.getElementById("boton");
let user = document.getElementById("login_username");
let pass = document.getElementById("login_password");
let captcha = document.getElementById("login_captcha");

function validar_captcha(rcaptcha){
    if(rcaptcha==5){
        return true;
    }
    else{
         return false;
        }
}

function iniciar_sesion(usuario,contrasena,rcaptcha){
    for(i=0;i<registros.length;i++){
        const vcaptcha = validar_captcha(rcaptcha);
        if (usuario == registros[i].usuario){
            if(contrasena == registros[i].contrasena && vcaptcha == true){
                //alert("Biemvenido " + registros[i].usuario  );
               return true;
               
                }else{
                    //alert("error");
                    return false;
                }
            }
            
           
     
    }
    //alert("no existe el eusuario");
    return false;
    
}




exports.agregarRegistro = () => {
  const $inputs = document.querySelectorAll("input");

  const { value: usuario } = $inputs[0];
  const { value: contrasena } = $inputs[1];
  const { value: confirmar_contrasena } = $inputs[2];

  registros.push({
    usuario,
    contrasena,
    confirmar_contrasena,
  });
};

/*  x.addEventListener("click",function(event){
    event.preventDefault();
    iniciar_sesion(user.value,pass.value,captcha.value);
}); 
 */

module.exports.validar_captcha=validar_captcha;
module.exports.iniciar_sesion=iniciar_sesion;
