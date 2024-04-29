const express = require('express')
const data = require('../data/data.json')
const db = require('../models')
const alquilable = require('../models/alquilable.js')
const _ = require('lodash');
const app = express();
app.use(express.json())

app.get('/alquilable', async (req, res)=>{
  const alquilables = await db.Alquilable.findAll({});
  res.status(200).json(alquilable) //ver que funcion hace el res.status(codigo)
})

app.get('/alquilable/:id', async (req, res)=>{
  const id = req.params.id;
  const alquilable = await db.Alquilable.findOne(
    {where: (id= idAlquilable), 
       attributes:('id','descripcion','disponible','precio') // traigo solo los atributos que quiero ver, si quiero ver todo no hace falta esto
      })
  res.status(200).json(alquilable)
})

app.delete('/alquilable/:id', (req, res)=>{
   const id = req.params.id;
   const idx = data.findIndex(e => e.id == id)
   if (idx >= 0) {
    const removed = data.splice(idx, 1)
    res.status(200).json({
      mensaje: `El alquilable con id ${id} fue eliminado`,
      alquilable: removed
    })
   } else 
    res.status(404).json({error: `El id ${id} no existe.`})
})

app.post('/alquilable',(req, res)=>{
    const alquilabe = req.body
    let id = 0
    if (data.length)
      id = _.max(data.map(e=>e.id)) 
    const aGrabar = {id: id + 1, ...alquilabe}
    data.push(aGrabar)
    res.status(201).json(aGrabar)
})

app.put('/alquilable/:id', (req, res)=>{
  const id = req.params.id;
  const idx = data.findIndex( e => e.id == id)
  if (idx >=0) {
    data[idx] = {id: Number(id), ...req.body}
    res.status(200).json(data[idx])
  } else
    res.status(404).json({error: `El id ${id} no existe.`})
})


app.listen(3000, async ()=>{
  console.log(`La aplicacion arranco correctamente en el puerto 3000`);
  try {
    await db.sequelize.sync({force:true});
    await db.Alquilable.create({ //creo un objeto
      descripcion: "Castillo Inflable",
      disponible: true,
      precio: 1200
    })
    await db.Alquilable.create({ //creo un objeto
      descripcion: "Toro Mecanico",
      disponible: true,
      precio: 1200
    })

  } catch(err){
    console.log(err)
  }
})