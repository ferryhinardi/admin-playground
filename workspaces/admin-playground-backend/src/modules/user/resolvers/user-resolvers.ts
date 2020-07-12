import resolver from '../../shared/libs/graphql-sequelize/resolver';

export default {
  User: {
    Role: resolver('Role')
  },
  Query: {
    users: resolver('User')
  },
};
