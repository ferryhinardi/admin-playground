import { QueryInterface, INTEGER, STRING, DATE } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER
      },
      username: {
        allowNull: false,
        type: STRING
      },
      password: {
        allowNull: false,
        type: STRING
      },
      full_name: {
        allowNull: true,
        type: STRING
      },
      email: {
        allowNull: true,
        type: STRING
      },
      photo_url: {
        allowNull: true,
        type: STRING
      },
      role_id: {
        type: INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id',
        }
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
  down: (queryInterface: QueryInterface) => queryInterface.dropTable('users')
};
