export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USERNAME,
    db: process.env.DATABASE_DATABASE,
  },
});
