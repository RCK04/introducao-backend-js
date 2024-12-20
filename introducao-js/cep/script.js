window.onload = () => {
    document.getElementById("cep").addEventListener("focusout", (e) => {
        cepSearch(e.target.value)
    })

}

function clearForm(){
    document.getElementById("rua").value=("");
    document.getElementById("numero").value=("");
    document.getElementById("bairro").value=("");
    document.getElementById("cidade").value=("");
    document.getElementById("estado").value=("");
}

function cepSearch(value){
    alert(value);

}
