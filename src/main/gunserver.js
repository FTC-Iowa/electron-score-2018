// const Gun = require('gun/gun');
// const server = require('http').createServer().listen(9998)
// const gunServer = Gun({web: server})
// export default gunServer

import http from 'http'
import Gun from 'gun'

export default function createGunServer (app) {
    const server = http.createServer().listen(5000)
    process.env.GUN_ENV = 'debug'
    const gunServer = Gun({web: server, radisk: true, file: 'gundata', localStorage: false})
    app.gunServer = gunServer;
    console.log("gun server created: ", gunServer)
}
