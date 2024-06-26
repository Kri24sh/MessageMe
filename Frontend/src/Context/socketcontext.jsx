import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContex";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authuser } = useAuthContext();

	useEffect(() => {
		if (authuser) {
			const socket = io("https://messageme-lo9d.onrender.com/", {
				query: {
					userId: authuser._id,
				},
			});

			setSocket(socket);

            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })
			
			

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authuser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
