import { Socket } from 'socket.io';

export const handleConnect = (socket: Socket, roomId: string): void => {
  socket.broadcast.emit('hello', roomId);
};
