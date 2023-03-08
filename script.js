async function buscarDigimons() {
    const resultado = await fetch('https://digimon-api.vercel.app/api/digimon')
    const listaJson = await resultado.json()
    document.getElementById('lista').innerHTML = ''
    for (let index = 0; index < listaJson.length; index++) {
        const element = listaJson[index];
        const div = `
        <div class="card">
            <h2>${element.name}</h2>
            <img src="${element.img}">
            <span>Level: ${element.level}</span>
        </div>
        `
        document.getElementById('lista').innerHTML += div
    }
}