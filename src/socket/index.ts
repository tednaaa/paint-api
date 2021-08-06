import { Socket } from 'socket.io';
import { IMessage } from '../interfaces';
import { emitBroadcastMessage } from './emits';
import { handleConnectToRoom } from './handlers';

export const handleConnection = (socket: Socket): void => {
  socket.on('connectToRoom', (roomId: string) => {
    handleConnectToRoom(socket, roomId);
  });

  socket.on('message', (message: IMessage) => {
    emitBroadcastMessage(socket, message);
  });
};
