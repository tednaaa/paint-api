import { Socket } from 'socket.io';
import { IParsedMessage } from '../../interfaces';

export const handleMessage = (
  socket: Socket,
  message: IParsedMessage
): void => {
  socket.broadcast.emit('message', message);
};
