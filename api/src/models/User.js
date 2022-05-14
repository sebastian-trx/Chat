const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    moderator: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
    },
    password:{
      type:DataTypes.STRING
    }
  },
  { timestamps: false});
};
