const JWT = require('jsonwebtoken');
const Joi = require('joi');
const config = require('../config');
const axios = require('axios');
const models = require('../models');
const decryptData = require('../utils/decrypted-data');
const GROUP_NAME = 'users';

module.exports = [{
    method: 'POST',
    path: `/${GROUP_NAME}/wxLogin`,
    handler: async (req, reply) => {
        const appid = config.wxAppid;
        const secret = config.wxSecret;
        const { code, encryptedData, iv } = req.payload;

        const response = await axios({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method: 'GET',
            params: {
                appid,
                secret,
                js_code: code,
                grant_type: 'authorization_code'
            }
        });
        
        const { openid, session_key: sessionKey } = response.data;

        const user = await models.users.findOrCreate({
            where: { open_id: openid }
        });
        
        const userInfo = decryptData(encryptedData, iv, sessionKey, appid)

        await models.users.update({
            nick_name: userInfo.nickName,
            gender: userInfo.gender,
            avatar_url: userInfo.avatarUrl,
            open_id: openid,
            session_key: sessionKey
        }, {
            where: { open_id: openid }
        });

        const generrateJWT = (jwtInfo) => {
            const payload = {
                userId: jwtInfo.userId,
                exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
            };
            return JWT.sign(payload, config.jwtSecret);
        }

        reply(generrateJWT({
            userId: user[0].id
        }));
    },
    config: {
        auth: false,
        tags: ['api', GROUP_NAME],
        description: '微信登录',
        validate: {
            payload: {
                code: Joi.string().required().description('微信用户登录的临时code'),
                encryptedData: Joi.string().required().description('微信用户信息encrypyeData'),
                iv: Joi.string().required().description('微信用户信息iv')
            }
        }
    }
}]

