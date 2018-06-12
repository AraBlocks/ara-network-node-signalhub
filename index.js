const { info, warn } = require('ara-console')
const signalhub = require('ara-network/signalhub')
const extend = require('extend')
const debug = require('debug')('ara:network:node:signalhub')

const conf = {
  maxBroadcasts: Infinity,
  port: 8881,
}

let server = null

async function getInstance() {
  return server
}

async function configure(opts, program) {
  if (program) {
    const { argv } = program
      .option('port', {
        alias: 'p',
        describe: 'Port for server to listen on'
      })
    if (argv.port) { opts.port = argv.port }
  }
  return extend(true, conf, opts)
}

async function start() {
  if (server) { return false }

  server = signalhub.createServer(conf)
  server.listen(conf.port)
  server.on('error', onerror)
  server.on('close', onclose)
  server.on('publish', onpublish)
  server.on('listening', onlistening)
  server.on('subscribe', onsubscribe)

  return true

  function onerror(err) {
    warn('signalhub: error:', err.message)
    debug('error:', err)
  }

  function onclose() {
    warn('signalhub: Closed')
  }

  function onpublish(channel) {
    info("signalhub: Publishing channel '%s'", channel)
  }

  function onlistening() {
    const { port } = server.address()
    info('signalhub: Listening on port %s', port)
  }

  function onsubscribe(channel) {
    info("signalhub: Subscribeing to channel '%s'", channel)
  }
}

async function stop() {
  if (server == null) { return false }
  warn('signalhub: Stopping server')
  server.close(onclose)
  return true
  function onclose() {
    server = null
  }
}

module.exports = {
  getInstance,
  configure,
  start,
  stop,
}
