import { Socket } from 'socket.io';
import { IMessage } from '../../interfaces';

export const emitBroadcastMessage = (
  socket: Socket,
  message: IMessage
): void => {
  socket.broadcast.emit('message', message);
};
