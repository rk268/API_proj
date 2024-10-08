const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(

    PORT,
    () => console.log(`its live on http://localhost:${PORT}`)
)

app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt : 'hello',
        size: 'large'
    });

});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const {logo} = req.body;

    if(!logo) {
        res.status(418).send({message: 'We need a logo'})

    }
    res.send({
        tshirt: `Hello with your ${logo} and ID is ${id}`
    });
} );