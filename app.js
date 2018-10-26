const Hapi = require('hapi');
require('env2')('./.env')
const config = require('./config');

const routesHelloHapi = require('./routes/hello-hapi');
const routesOrders = require('./routes/orders');
const routesShops = require('./routes/shops');
const routesUser = require('./routes/users');

const pulginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server();

server.connection({
    port: config.port,
    host: config.host
});

const init = async () => {
    await server.register([
        ...pulginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2
    ]);
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUser
    ])
    pluginHapiAuthJWT2(server)
    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
}

init()
