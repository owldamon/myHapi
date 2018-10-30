const { jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('hapi');
        },
        config: {
            auth: false,
            tags: ['api', 'tests'],
            description: '测试hello-hapi'
        }
    }
]