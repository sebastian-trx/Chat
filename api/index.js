const { conn, Message } = require("./src/db.js");
require("dotenv").config();
const { seeds } = require("./src/utils/seeds");

const app = require("./src/app.js");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});


io.on("connection", (socket) => {
  // el evento chat escucha cuando envian un mensaje
  socket.on("chat", (msg, userdata) => {
    // guarda los mensajes que envia el usuario
    (async function newMessageDb() {
      let newMessage = {
        content: msg,
        userId: userdata.id,
      };
      try {
        await Message.create(newMessage);
      } catch (error) {
        console.log(error);
      }
    })();
    //emite los mensajes que enviaron los usuarios
    io.emit("messageHistory", { msg, userdata });
  });
});


// sincroniza los modelos
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    //precarga de datos para la db
    seeds();
    console.log("%s listening at 3001");
  });
});
