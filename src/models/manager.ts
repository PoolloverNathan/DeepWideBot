import {Sequelize} from "sequelize";

console.log("Connecting to database")
const sequelize = new Sequelize(process.env.DATABASE || "sqlite:.devdb")

try {
  await sequelize.authenticate();
  console.log("Connection successfull")
} catch (e) {
  console.error("Authentication failed!")
  console.error(e.stack)
}
export default sequelize;