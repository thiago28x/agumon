const app = require('express')()
const PORT = 8080;

app.listen(
    PORT, () => console.log(`tá vivo o servidor em http://localhost:${PORT}`)
)


app.get('/teste', (req, res) => {
    res.status(200).send({
        produto: "camiseta",
        tamanho: "grande"
    })
})

//askjdnasjdhbhjasbdjhasbdlorem lorem   