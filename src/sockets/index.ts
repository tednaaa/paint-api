import { Socket } from 'socket.io';
import { IParsedMessage } from '../interfaces';
import { handleConnect, handleMessage } from './handlers';

export const handleConnection = (socket: Socket): void => {
  socket.on('hello', (roomId: string) => {
    handleConnect(socket, roomId);
  });

  socket.on('message', (message: IParsedMessage) => {
    handleMessage(socket, message);
  });
};
