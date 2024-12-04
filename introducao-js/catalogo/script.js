window.onload = function(){
    const total = document.getElementById("total");
    const imgs = document.querySelectorAll(".produtos")
    const sMais = document.querySelectorAll(".sMais");

    imgs.forEach(img => {
        img.addEventListener("click", function(){
            document.getElementById("img-ampliada").src = img.src;
            total.style.display = "block";
        })
    })

    document.getElementById("img-ampliada").addEventListener("click", function(e){
        e.stopPropagation();
    })

    total.addEventListener("click", function(){
        total.style.display = "none";
    })

    sMais.forEach(e => {
        e.addEventListener("mouseover", function(){
            e.style.fontSize = "120%";
        })

        e.addEventListener("mouseout", function(){
            e.style.fontSize = "initial";
        })
    })

}
