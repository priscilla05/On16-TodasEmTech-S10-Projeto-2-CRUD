const app = require('./src/app') // chamo o arquivo app

const PORT = 1313 // configuro a porta

app.listen(PORT, () => {
    console.log(`Seu servidor está na porta ${PORT}`)
}) // inicia o server


