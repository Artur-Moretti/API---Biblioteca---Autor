const express = require("express")
const { route } = require("express/lib/application")

const autorController = require("./controllers/Autor-controller")

const router = express.Router()

router.get("/autor", autorController.all)

router.get("/autor/:id", autorController.pegaUmAutor)

router.post("/autor", autorController.criarAutor)

router.put("/autor/:id", autorController.atualizaAutor)

router.delete("/autor/:id", autorController.apagaAutor)

module.exports = router