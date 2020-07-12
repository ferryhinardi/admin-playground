import { QueryInterface, INTEGER, STRING, DATE } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      name: {
        allowNull: false,
        type: STRING
      },
      created_at: {
        allowNull: false,
        type: DATE
      },
      updated_at: {
        allowNull: false,
        type: DATE
      },
      deleted_at: {
        allowNull: true,
        type: DATE
      }
    }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('menus')
};
