/*function Ocultar(){
   document.getElementById('derecha').style.display = 'none';
}*/

/*function Ocultar() {
    var x = document.getElementById("derecha");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

/*document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById('derecha').style.display = 'none';
});*/

function myFunction() {
    var x = document.getElementById("eliminar-derecha");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*function myFunction1() {
    var x = document.getElementById("eliminar-izquierda");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

/*function ocultar-izquierda() {
    var x = document.getElementById("eliminar-izquierda");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

function ir_arriba() {
    const btn_scrolltop = document.getElementById("btn_scrolltop");
                btn_scrolltop.addEventListener('click', () =>{
                    window.scrollTo(0,0);
                })


   /* window.onscroll = () => {
        if(window.scrollY < 0){
            btn_scrolltop.classList.remove("btn-scrolltop-on")
        } else{
            btn_scrolltop.classList.add("btn-scrolltop-on")
        }
    }*/
}
       
    
