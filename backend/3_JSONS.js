//using express to send a "json" response 
const express = require('express')
const Server = express();
const PORT = '8080';


//Send complex data across networks via json formats
Server.get('/', (req, res) => {
    res.json({
        data: "Hello World"
    })
})


Server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})



