const Autor = require("../models/Autor-model");


const {request, response} = require("express");


module.exports= {
    async all(request, response) {
        try {
            const autor = await Autor.findAll();
            response.status(200).json(autor)
        } catch (error) {
            response.status(400).json("deu ruim bb")
        }
    },
  
    async pegaUmAutor(request, response) {
        const  { id } = request.params
        try {

            const umAutor = await Autor.findOne( { where: { id: Number(id) }} )

            response.status(200).json(umAutor)

        } catch(error) {

            response.status(400).json("deu ruim bb")

        }
    },

    async criarAutor(request, response) {
        const  { id, nome, sobrenome, dataDeNascimento, genero} = request.body
        try {

            const novoAutor = await Autor.create({id, nome, sobrenome, dataDeNascimento, genero})
            response.status(200).json(novoAutor)

        } catch(error) {

            response.status(400).json("deu ruim bb")

        }
    },

    async atualizaAutor(request, response) {
        const  { id } = request.params
        const  novaInfo = request.body

        try {

            await Autor.update(novaInfo, { where: { id: Number(id) }})
            const autorAtualizado = await Autor.findOne( { where: { id: Number(id)}})
            response.status(200).json(autorAtualizado)

            
        } catch (error) {
            
            response.status(400).json("deu ruim bb")
        }
    }, 

    async apagaAutor(request, response) {
        const  { id } = request.params
        try {
            await Autor.destroy({where: {id: Number(id)}} )
        
            response.status(200).json({mensagem: `id ${id} deletado`})

        } catch(error) {

            response.status(400).json("deu ruim bb")

        }
    }
}