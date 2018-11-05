'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.createTable(
      'order_goods',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        goods_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        single_price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        count: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        created_at: Sequelize.INTEGER,
        updated_at: Sequelize.INTEGER
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.droptable('order_goods')
  }
};
