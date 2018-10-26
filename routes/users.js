const JWT = require('jsonwebtoken');
const config = require('../config');

const GROUP_NAME = 'users';

module.exports = [{
    method: 'POST',
    path: `/${GROUP_NAME}/createJWT`,
    handler: async (request, reply) => {
        const generateJWT = (jwtInfo) => {
            const payload = {
                userId: jwtInfo.userId,
                exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
            };
            return JWT.sign(payload, config.jwtSecret)
        };
        reply(generateJWT({
            userId: 1
        }))
    },
    config: {
        tags: ['api', GROUP_NAME],
        description: '测试用户的JWT签发',
        auth: false
    }
}]