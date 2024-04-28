import { Server } from "socket.io";
import {createServer} from "http";
import express from "express";


const app = express();
const server = createServer(app);

const io = new Server(server,{cors: {
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST"],
},});

export const getReceiverSocketId = (receiverId)=>{

	return userSocketMap[receiverId];

}


const userSocketMap = {};

io.on('connection',(Socket) =>{

console.log("a user is connected" ,Socket.id);

const userId = Socket.handshake.query.userId;

if (userId) {
	userSocketMap[userId] = Socket.id;
}

io.emit("getOnlineUsers", Object.keys(userSocketMap));

Socket.on('disconnect' , ()=>{
	console.log("user is disconnected", Socket.id);
	delete userSocketMap[userId];
	io.emit("getOnlineUsers", Object.keys(userSocketMap));
});

} );




export {app ,io ,server}
