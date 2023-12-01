const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Replace 'db.json' with your JSON file
const middlewares = jsonServer.defaults();
jsonServer.defaults({ noCors: true })

// Enable CORS for all routes
server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});