//importar o pacote express
const express = require('express');
// instanciar o express na variavel app
const app = express();
//definir porta do servidor
const PORT = 3004;

app.get('/api/teste', (request, response) => {
    response.send('Bora devs');
})

//testar o servidor
app.listen(PORT, () => console.log(`running at port ${PORT}`));