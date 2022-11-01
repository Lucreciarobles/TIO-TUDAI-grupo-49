document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    
    cargarHome();

    document.getElementById("home").addEventListener("click", cargarHome);
    document.getElementById("crash").addEventListener("click", cargarCrash);
    document.getElementById("crashbash").addEventListener("click", cargarCrashBash);
    document.getElementById("pepsi-man").addEventListener("click", cargarPepsiman);

    function cargarHome(){
        fetch("../home.html")
            .then(response => {response.text()
                .then(text => {if (response.ok){
                    document.querySelector(".container").innerHTML = text
                } else {
                    document.querySelector(".container").innerHTML = "se ha producido un error"
                }
            })
            .catch(document.querySelector(".container").innerHTML = "se ha producido un error");
        })
    }
    function cargarCrash(){
        fetch("../crash.html")
            .then(response => {response.text()
                .then(text => {if (response.ok){
                    document.querySelector(".container").innerHTML = text
                } else {
                    document.querySelector(".container").innerHTML = "se ha producido un error"
                }
            })
            .catch(document.querySelector(".container").innerHTML = "se ha producido un error");
        })
    }
    function cargarCrashBash(){
        fetch("../crashbash.html")
            .then(response => {response.text()
                .then(text => {if (response.ok){
                    document.querySelector(".container").innerHTML = text
                } else {
                    document.querySelector(".container").innerHTML = "se ha producido un error"
                }
            })
            .catch(document.querySelector(".container").innerHTML = "se ha producido un error");
        })
    }
    function cargarPepsiman(){
        fetch("../pepsiman.html")
            .then(response => {response.text()
                .then(text => {if (response.ok){
                    document.querySelector(".container").innerHTML = text
                } else {
                    document.querySelector(".container").innerHTML = "se ha producido un error"
                }
            })
            .catch(document.querySelector(".container").innerHTML = "se ha producido un error");
        })
    }
}