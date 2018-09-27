const Hapi = require('hapi');
require('env2')('./.env')
const config = require('./config');

const routesHelloHapi = require('./routes/hello-hapi');
const routesOrders = require('./routes/orders');
const routesShops = require('./routes/shops');

const pulginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server();

server.connection({
    port: config.port,
    host: config.host
});

const init = async () => {
    await server.register([
        ...pulginHapiSwagger
    ]);
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders
    ])
    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
}

init()
