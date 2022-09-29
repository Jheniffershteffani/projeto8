const http = require("http");
const host = 'localhost';
const port = 8001;
// esta requerindo a pasta que vai ser citada na frente
const fs = require('fs').promises;

// adicionei a função para chamar o http
// mostra e recebe o que é feito no navegador
const requestListener = function (req, res) {
    console.log("\nrota -> ", req.url);
    if (req.url == "/") {
        fs.readFile(__dirname + "/projeto8.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    //serve para mostrar na pagina, todos os outros projetos anteriores
    if (req.url == "/projeto1") {
        fs.readFile(__dirname + "/projeto1/projeto1.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    if (req.url == "/projeto2") {
        fs.readFile(__dirname + "/projeto2/index.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    /**entra na pasta e o arquivo mostra uma rota para seguir
     * onde há mais informações para complementar o arquivo
     */
    if (req.url == "/projeto3") {
        console.log("entro")

        fs.readFile(__dirname + "/projeto3/projeto3.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    /**entra na pasta, verifica a mensão sobre outro arquivo
    * e busca esse arquivo para somar com o arquivo anterior 
    */
    if (req.url == "/projeto3.css") {
        console.log("css")

        fs.readFile(__dirname + "/projeto3/projeto3.css").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }

    if (req.url == "/projeto4") {
        fs.readFile(__dirname + "/projeto4/projeto4.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }

    if (req.url == "/projeto4.js") {

        fs.readFile(__dirname + "/projeto4/projeto4.js").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    //mostra o projeto html da pasta 
    if (req.url == "/projeto5") {
        fs.readFile(__dirname + "/projeto5/projeto5.html").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }
    /**entra na pasta, verifica a mensão sobre outro arquivo
     * e busca esse arquivo para somar com o arquivo anterior
     */
    if (req.url == "/projeto5.css") {

        fs.readFile(__dirname + "/projeto5/projeto5.css").then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.end(contents);
        })
    }

    //criar um servidor http
}
const server = http.createServer(requestListener);
// inicia o servidor
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});