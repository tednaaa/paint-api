import { Socket } from 'socket.io';

export const handleConnect = (socket: Socket) => {
  socket.broadcast.emit('connect');
};
