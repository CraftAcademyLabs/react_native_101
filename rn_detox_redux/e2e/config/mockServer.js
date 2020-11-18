import http from 'http'
import mockserver from 'mockserver'

let sockets = {}, nextSocketId = 0;


const MockServer = {
  open(port) {
    let server = http.createServer(mockserver('./e2e/mocks')).listen(port);
    server.on('connection', (socket) => {
      let socketId = nextSocketId++;
      sockets[socketId] = socket;
      socket.on('close', () => {
        delete sockets[socketId];
      });
      socket.setTimeout(4000);
    });
    return server
  },

  close(server) {
    server.close();
    for (let socketId in sockets) {
      sockets[socketId].destroy();
    };
    return null
  }
}

export default MockServer