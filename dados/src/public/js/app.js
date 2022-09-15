const ancora = document.querySelectorAll('a')
const app = document.getElementById('app')
ancora.forEach(a => {
    a.addEventListener('click', (evt) => {
        evt.preventDefault()
        const pagina = evt.target.getAttribute('data-target')
        fetch(pagina)
            .then(resp => resp.text())
            .then(resp => app.innerHTML = resp)
    })

})
function email(texto) {
    const pegarEmail = document.getElementById('floatingInput')
    app.innerHTML += `${texto}`
}