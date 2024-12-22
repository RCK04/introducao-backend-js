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

function meu_callback(content){
    if(!("erro" in content)){
        document.getElementById("rua").value=(content.logradouro);
        document.getElementById("bairro").value=(content.bairro);
        document.getElementById("cidade").value=(content.localidade);
        document.getElementById("estado").value=(content.uf);
    } else{
        clearForm();
        alert("CEP não encontrado.")
    }
}

function cepSearch(value){
    let cep = value.replace(/\D/g, '');

    if(cep != ""){
        let cepValidate = /^[0-9]{8}$/;
        if(cepValidate.test(cep)){
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("estado").value="...";

            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            
            document.body.appendChild(script);
            console.log(script)

        } else{
            clearForm();
            alert("Formato do CEP inválido.");
        }

    } else{
        clearForm();
    }
    

}
