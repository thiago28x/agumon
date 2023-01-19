const app = require('express')()
const PORT = 8080;

app.listen(
    PORT, () => console.log(`tá vivo o servidor em http://localhost:${PORT}`)
)


app.get('/teste', (req, res) => {
    res.status(200).send({
        produto: "camiseta",
        tamanho: "grande",
        "title": "Samsung",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones"
    })
})


app.get('/brands', (req, res) => {
    res.status(200).send({
        produto: ["tesla", "ford",'banana', 'apple', 'peach', 'mango' ])
})

//askjdnasjdhbhjasbdjhasbdlorem lorem   
