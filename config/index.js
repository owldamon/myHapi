const { env } = process;

module.exports = {
    host: env.host,
    port: env.port,
    jwtSecret: env.JWT_SECRET,
    wxAppid: env.wxAppid,
    wxSecret: env.wxSecret
}