const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

const puerto = 3050;

app.use(express.static(path.join(__dirname,'public')));

app.get('/section/:name',(req,res) => {
    const sectionName = req.params.name;
    const filePath = path.join(__dirname,'public', 'sections',`${sectionName}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('<p>Sección no encontrada.</p>');
        }
    });
})

// puerto
app.listen(puerto,()=>{
    console.log("App listen port "+puerto);
})
