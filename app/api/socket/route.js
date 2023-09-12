import { Server } from "socket.io";

export async function GET(req, res) {
  const io = new Server(res.socket);
  res.socket.server.io = io;
  io.on("connection", (socket) => {
    socket.on("send-message", (message) => {
      io.emit("receive-message", message);
    });
  });
  console.log("setting socket");
  res.end();
}
