import { Sequelize } from "sequelize";

let connection = null;
// connecting to db
const getConnection = async () => {
  if (!connection) {
    connection = new Sequelize({
      database: "event",
      host: "localhost",
      username: "eventuser",
      password: "574198",
      port: "5432",
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: false,


    });
    connection.authenticate().then(()=>{
        console.log("database connnected");
    }).catch(((error)=>{
        console.log("database coonection failed",error.message);
    }))
  }
  return connection;
};
export default getConnection;