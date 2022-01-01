import { Logger } from '@nestjs/common';
import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: '/canvas' })
export class CanvasGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit() {
    Logger.log('initialized');
  }

  @SubscribeMessage('draw')
  handleDraw(client: Socket, payload): void {
    client.broadcast.in(payload.room).emit('draw', payload);
  }

  @SubscribeMessage('drawEnd')
  handleDrawEnd(client: Socket, room: string): void {
    client.broadcast.in(room).emit('drawEnd');
  }

  @SubscribeMessage('joinRoom')
  handleJoin(client: Socket, room: string): void {
    client.join(room);
    client.emit('joinedRoom', room);
  }
}
