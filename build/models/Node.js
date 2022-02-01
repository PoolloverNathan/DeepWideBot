import { Model, DataTypes } from "sequelize";
import sequelize from "./manager";
import User from "./User";
class Node extends Model {
}
Node.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {}
}, { sequelize });
User.hasMany(Node);
Node.belongsTo(User);
Node.belongsTo(Node, { as: "parent" });
Node.sync();
export default Node;
//# sourceMappingURL=Node.js.map