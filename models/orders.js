module.exports = (sequelize, DataType) => {
    const orders = sequelize.define(
        'orders',
        {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataType.INTEGER,
                allowNull: false
            },
            payment_status: {
                type: DataType.ENUM('0', '1'),
                defaultValue: '0'
            }
        },
        {
            tabaleName: 'orders'
        }
    );
    return orders;
}