function cad() {
    var email = document.getElementById('cemail').value
    var senha = document.getElementById('csenha').value
    event.preventDefault();

    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)
    window.location.href = "login.html"



}

function log(event) {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    event.preventDefault();

    var emailSalvo = localStorage.getItem("email")
    var senhaSalva = localStorage.getItem("senha")

    if (email === emailSalvo && senha === senhaSalva) {
        alert("Login realizado com sucesso!")
        console.log('login')
        event.preventDefault();
        window.location.href = "home.html"
    } else {
        alert("Email ou senha incorretos")
    }
}

