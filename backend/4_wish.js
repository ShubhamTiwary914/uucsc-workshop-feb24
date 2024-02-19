const express = require('express')
const Server = express();
const PORT = '8080';


//Take Values from Query and Greet the User
Server.get('/', (req, res) => {
    res.json({
        wish: `Hello ${req.query.name}` 
    })
})


Server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})