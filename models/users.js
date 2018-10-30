module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'users', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nick_name: DataTypes.STRING,
            avatar_url: DataTypes.STRING,
            gender: DataTypes.INTEGER,
            open_id: DataTypes.STRING,
            session_key: DataTypes.STRING
        }, 
        {
            tableName: 'users'
        }
    )
    return users;
}