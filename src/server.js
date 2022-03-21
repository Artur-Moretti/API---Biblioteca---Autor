const express = require("express");
const sequelize = require("./database/index");
const autorRouter = require("./routes")


const port = 3000;
const app = express();

sequelize.sync().then(() => {
    console.log("database está rodando")
})

app.use(express.json());
app.use(autorRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})