import { Model } from "sequelize";
import sequelize from "./manager";
class User extends Model {
}
User.init({}, { sequelize });
User.sync();
export default User;
//# sourceMappingURL=User.js.map