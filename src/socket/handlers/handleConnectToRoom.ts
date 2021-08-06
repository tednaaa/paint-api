import { Socket } from 'socket.io';

export const handleConnectToRoom = (socket: Socket, roomId: string): void => {
  socket.join(roomId);
};
