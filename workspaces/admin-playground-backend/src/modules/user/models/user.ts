import { Sequelize, INTEGER, STRING, DATE } from 'sequelize';
import bcrypt from 'bcrypt';
import { UserInstance, CustomModelType } from '../../shared/typescriptType/ModelType';

function getHashedPassword(password: string) {
  return bcrypt.hashSync(password, 8);
}

export default (sequelize: Sequelize) => {
  const User = sequelize.define<UserInstance>(
    'User',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: STRING,
      fullName: {
        type: STRING,
        field: 'full_name'
      },
      password: STRING,
      email: STRING,
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
      modelName: 'User',
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
    });
    // @ts-ignore
    User.associate = (models: CustomModelType) => {
      // @ts-ignore
      User.Role = User.belongsTo(models.Role, {
        foreignKey: 'role_id',
        as: 'role',
      })
    };

    return User;
  };