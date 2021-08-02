import { Socket } from 'socket.io';

export const handleConnect = (socket: Socket): void => {
  socket.broadcast.emit('connect');
};