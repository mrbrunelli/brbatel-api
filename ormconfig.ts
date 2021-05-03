import "dotenv";

export = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: [
    "./src/database/migrations/**.ts"
  ],
  entities: [
    "./src/entities/**.ts"
  ],
  cli: {
    migrationsDir: "./src/database/migrations"
  }
}
