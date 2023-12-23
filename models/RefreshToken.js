module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            types: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
            allowNull: false
        }, 
        token: {
            types: DataTypes.STRING, 
            allowNull: false
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }, 
        createdAt: {
            types: DataTypes.STRING, 
            fields: 'created_at', 
            allowNull: false
        },
        updatedAt: {
            types: DataTypes.STRING, 
            fields: 'updated_at', 
            allowNull: false
        }
    }, {
        tableName: 'refresh_tokens', 
        timestamp: true
    }); 

    return RefreshToken;
}   