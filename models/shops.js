module.exports = (sequelize, DataType) => {
    const shop = sequelize.define(
        'shops',
        {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.INTEGER,
                allowNull: false,
            },
            thumb_url: DataType.STRING
        },
        {
            tableName: 'shops'
        }
    )
    return shop;
}