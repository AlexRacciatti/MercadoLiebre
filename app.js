const express = require('express');
const app = express();

const path = require('path');

app.listen(process.env.PORT || 3000, () => {
    console.log('Running in Local Port 3000');
});


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});
 
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));
 