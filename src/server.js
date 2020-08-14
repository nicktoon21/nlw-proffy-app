const {pageLanding, pageStudy, pageGiveClasses,saveClass} = require(`./pages`);
const express = require(`express`);
const server = express();
const nunjucks = require(`nunjucks`)

nunjucks.configure(`src/views`, {
    express:server,
    noCache: true,   
});

server
//Configurar arquivos estáticos
.use(express.static("public"))
.use(express.urlencoded({extended:true}))
//Rotas
.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClass)

.listen(5500);

//1:46