const { User, Message } = require("../db.js");

const messageInfo = async (req, res) => {
  const { id } = req.query;
  if (id) {
    try {
      const dbMessage = await Message.findByPk(id);
      dbMessage
        ? res.send({
            Message: dbMessage,
          })
        : res.send(`No se ha encontrado el mensaje con el id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const allMessages = await Message.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "moderator", "nickName"],
        },
      ],
    });
    res.send(allMessages);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  messageInfo,
};
