module.exports = (sequlize, DataType) => {
    const good = sequlize.define(
    'goods',
    {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shop_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        thumb_url: DataType.STRING
    },
    {
        tableName: 'goods'
    }
    )
    return good;
}