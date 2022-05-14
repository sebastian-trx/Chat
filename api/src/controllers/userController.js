const { User, Message } = require("../db.js");

async function postUser(req, res) {
  const { moderator, nickName, name, password } = req.body;

  const check = await User.findOne({
    where: {
      nickName: nickName,
    },
  });

  if (check) {
    res.json({
      type: "failure",
      data: "Usuario ya existente en la base de datos, prueba con uno diferente"
    });
  }
  else {
    const user = {
      moderator,
      nickName,
      name,
      password,
    };

    try {
      const newUser = await User.create(user);
      if (newUser) res.json({ type: "success", data: user });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}


const userInfo = async (req, res) => {
  const { id } = req.query;
  if (id) {
    try {
      const dbUser = await User.findByPk(id,{
        // modelos asociados al usuario que quiero mostrar
        include:[{
          model: Message,
          attributes: ["id", "content"]
        }],
        // attributos que quero mostrar del usuario
        attributes: ["nickName", "name"]
      });
      dbUser
        ? res.send({
            user: dbUser,
          })
        : res.send(`No se ha encontrado el usuario con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allUsers = await User.findAll({
      include:[{
        model: Message
      }],
      attributes: ["id", "nickName", "name"],
    });
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postUser,
  userInfo,
};
