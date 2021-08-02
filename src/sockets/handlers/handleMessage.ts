import { Socket } from 'socket.io';
import { IParsedMessage } from '../../interfaces';

export const handleMessage = (socket: Socket): void => {
  socket.broadcast.emit('message', (argument: IParsedMessage) => {
    console.log(argument);
  });
};
