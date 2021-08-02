import { Socket } from 'socket.io';
import { IParsedMessage } from '../../interfaces';

export const handleMessage = (socket: Socket) => {
  socket.broadcast.emit('message', (argument: IParsedMessage) => {});
};
