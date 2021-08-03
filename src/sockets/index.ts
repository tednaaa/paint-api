import { Socket } from 'socket.io';
import { handleConnect, handleMessage } from './handlers';

export const handleConnection = (socket: Socket): void => {
  socket.on('hello', (roomId: string) => {
    socket.broadcast
      .to(roomId)
      .emit('connect', `User with id ${roomId} was connected`);
  });
  // socket.on('message', handleMessage);
};
