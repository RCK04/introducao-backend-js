window.onload = function(){
    document.querySelectorAll("#num1, #num2").forEach(e => {
        e.addEventListener("focusout", function(){
            num1 = document.getElementById("num1").value;
            num2 = document.getElementById("num2").value;

            document.getElementById("result1").value = parseInt(num1) + parseInt(num2);
        })
    })

    // document.getElementById("num4").addEventListener("focusout", function(event){
    //     event.preventDefault()
    //     num1 = document.getElementById("num3").value;
    //     num2 = document.getElementById("num4").value;

    //     document.getElementById("result2").value = parseInt(num1) - parseInt(num2);
    // })

    document.querySelectorAll("#num3, #num4").forEach(e => {
        e.addEventListener("focusout", function(){
            num1 = document.getElementById("num3").value;
            num2 = document.getElementById("num4").value;

            document.getElementById("result2").value = parseInt(num1) - parseInt(num2);
        })
    })

    document.querySelectorAll("#num5, #num6").forEach(e => {
        e.addEventListener("focusout", function(){
            num1 = document.getElementById("num5").value;
            num2 = document.getElementById("num6").value;

            document.getElementById("result3").value = parseInt(num1) * parseInt(num2);
        })
    })

    document.querySelectorAll("#num7, #num8").forEach(e => {
        e.addEventListener("focusout", function(){
            num1 = document.getElementById("num7").value;
            num2 = document.getElementById("num8").value;

            document.getElementById("result4").value = parseInt(num1) / parseInt(num2);
        })
    })

    // document.getElementById("num1").addEventListener("click", function(e){
    //     e.value = ""
    // })

}