const express = require('express')
const Server = express();
const PORT = '8080';



//Express makes the server creation process very straightforward
Server.get('/', (req, res) => {
    res.send('Hello World!')
})
Server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})