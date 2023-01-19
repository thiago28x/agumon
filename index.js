const app = require('express')()
const PORT = 8080;

app.listen(
    PORT, () => console.log(`tá vivo o servidor em http://localhost:${PORT}`)
)


app.get('/teste', (req, res) => {
    res.status(200).send({
        produto: "camiseta",
        tamanho: "grande",
        "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones"
    })
})

//askjdnasjdhbhjasbdjhasbdlorem lorem   