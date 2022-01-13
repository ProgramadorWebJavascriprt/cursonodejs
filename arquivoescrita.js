const fs = require('fs')
const produto = {
    nome: "Notebook_s145_lenovo",
    preco: 4500.56,
    desconto: 0.15
}
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})