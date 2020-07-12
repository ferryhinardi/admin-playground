import { Sequelize, Model, ModelType, Optional } from 'sequelize';

export interface CustomModelType extends ModelType {
  associate?: (db: DB) => void;
}

export type DB = { [key: string]: CustomModelType } & { sequelize?: Sequelize, Sequelize?: typeof Sequelize }

/** User Type */
interface UserAttributes {
  id: number;
  username?: string;
  fullName?: string;
  password?: string;
  email?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  [key: string]: any;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}
