const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/:input', (req, res) => { 
    const x = req.params.input
    
    if ((typeof x) === "string"){
        const a = Math.pow(x.length,2)
        res.status(200).json({
        message: 'il quadrato della lunghezza è:'+a
        });
    } else {
        res.status(201).json({
            message: -1
            });
        }
}); 

app.listen(port);
module.exports = app;