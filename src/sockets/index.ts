import { Socket } from 'socket.io';
import { handleConnect, handleMessage } from './handlers';

export const handleConnection = (socket: Socket): void => {
  socket.on('connect', handleConnect);
  socket.on('message', handleMessage);
};
