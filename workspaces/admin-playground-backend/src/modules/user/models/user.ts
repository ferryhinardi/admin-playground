import { Sequelize, INTEGER, STRING, DATE } from 'sequelize';
import bcrypt from 'bcrypt';

function getHashedPassword(password: string) {
  return bcrypt.hashSync(password, 8);
}

export default (sequelize: Sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: STRING,
      username: STRING,
      fullName: {
        type: STRING,
        field: 'full_name'
      },
      password: STRING,
      photoUrl: {
        type: STRING,
        field: 'photo_url'
      },
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
      tableName: 'users',
      deletedAt: 'deleted_at',
      paranoid: true,
      hooks: {
        beforeCreate: (user: any) => {
          if (user.password) {
            try {
              const hashedPassword = getHashedPassword(user.password);
              user.password = hashedPassword;
            } catch (e) {
              console.error(e);
            }
          }
          return user;
        },
        beforeUpdate: (user: any) => {
          if (user.password) {
            try {
              const hashedPassword = getHashedPassword(user.password);
              user.password = hashedPassword;
            } catch (e) {
              console.error(e);
            }
          }
          return user;
        },
      },
    })
    return User;
  };