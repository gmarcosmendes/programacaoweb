function getLogin(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if(login == "admin" && senha == "123"){
        var url = "./servico.html";
        window.open(url);
    } else{
        alert("Login ou senha incorreto(s)")
    } 
}