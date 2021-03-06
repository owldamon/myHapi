const { jwtHeaderDefine } = require('../utils/router-helper');

const Joi = require('joi');

const GROUP_NAME = 'orders';

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
            validate: {
                payload: {
                    goodsList: Joi.array().items(
                        Joi.object().keys({
                          goods_id: Joi.number().integer(),
                          count: Joi.number().integer(),
                        })
                    ),
                },
                ...jwtHeaderDefine,
            }
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (request, reply) => {
            reply()
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '支付某订单',
            validate: {
                params: {
                    orderId: Joi.number().max(10).required().error((errors)=> {
                        console.log(errors)
                        return errors;
                    })
                },
                ...jwtHeaderDefine,
            }
        }
    }
]