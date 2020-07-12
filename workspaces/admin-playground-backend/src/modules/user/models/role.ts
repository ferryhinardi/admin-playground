import { Sequelize, INTEGER, STRING, DATE } from 'sequelize';

export default (sequelize: Sequelize) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: STRING,
      createdAt: {
        field: 'created_at',
        type: DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: DATE
      }
    },
    {
      modelName: 'Role',
      tableName: 'roles',
      deletedAt: 'deleted_at',
      paranoid: true,
    }
  );

  return Role;
}