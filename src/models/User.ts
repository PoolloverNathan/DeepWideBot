import { Model, DataTypes } from "sequelize";
import sequelize from "./manager";

class User extends Model {
  declare
}
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
}, { sequelize });

User.sync();
export default User;