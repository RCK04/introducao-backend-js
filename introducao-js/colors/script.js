window.onload = function() {
    const titulo = document.getElementById("titulo")
    document.getElementById("azul").addEventListener("mouseover", function(){
        titulo.style.color = "blue"
    })

    document.getElementById("amarelo").addEventListener("mouseout", function(){
        titulo.style.color = "yellow"
    })

    document.getElementById("vermelho").addEventListener("mouseup", function(){
        titulo.style.color = "red"
    })
}