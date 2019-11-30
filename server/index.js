const express = require('express')
const consola = require('consola')
const MongoDbConfig = require(__dirname + '/MongoDbConfig.js')
const morgan = require('morgan')
const cors = require('cors');
const { routes , InitialDir } = require(__dirname + '/Api/index.js');
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

function loadRoutes(){
  routes.forEach( route =>{
    app.use(InitialDir,route)
  })
}

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  //Loading routes from Routes folder
  loadRoutes()

  //Connecting with mongoDb server
  MongoDbConfig()
   
  // Give nuxt middleware to express
  app.use(nuxt.render)
  app.use(morgan('tiny'))
  app.use(cors())
  app.use(express.json())

 
 
  //application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }))

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
