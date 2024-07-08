module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'million',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  