import { QueryInterface, INTEGER, BOOLEAN, DATE } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('role_menu', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      role_id: {
        type: INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      menu_id: {
        type: INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'menus',
          key: 'id'
        }
      },
      view: {
        allowNull: true,
        type: BOOLEAN
      },
      create: {
        allowNull: true,
        type: BOOLEAN
      },
      update: {
        allowNull: true,
        type: BOOLEAN
      },
      delete: {
        allowNull: true,
        type: BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: DATE
      },
      updated_at: {
        allowNull: false,
        type: DATE
      }
    }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('role_menu')
};
