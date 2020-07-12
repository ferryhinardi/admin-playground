require('dotenv').config();
module.exports = {
    development: {
        username: 'root',
        password: 'password',
        database: 'administration',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: console.log,
        operatorsAliases: false,
        quoteIdentifiers: false,
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false,
        operatorsAliases: false,
        quoteIdentifiers: false,
    },
    staging: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'db_name',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql',
        logging: console.log,
        operatorsAliases: false,
        quoteIdentifiers: false,
    },
    production: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'db_name',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql',
        logging: console.log,
        operatorsAliases: false,
        quoteIdentifiers: false,
    },
};
//# sourceMappingURL=database.js.map