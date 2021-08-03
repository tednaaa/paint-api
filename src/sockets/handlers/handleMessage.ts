import { Socket } from 'socket.io';
import { IParsedMessage } from '../../interfaces';

export const handleMessage = (socket: Socket): void => {
  socket.on('message', (roomId: string, message: IParsedMessage) => {
    socket.to(roomId).emit('message', message);
  });
};
