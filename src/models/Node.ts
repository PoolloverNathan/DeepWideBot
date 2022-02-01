import { Model, DataTypes } from "sequelize";
import sequelize from "./manager";
import User from "./User";

class Node extends Model {
  declare id: number
  declare content: string
  declare getParent: () => Promise<Node>
  declare getUser: () => Promise<User>
}
Node.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING
  }
}, { sequelize })

User.hasMany(Node);
Node.belongsTo(User);
Node.belongsTo(Node, {as: "parent"})
Node.sync();
export default Node;