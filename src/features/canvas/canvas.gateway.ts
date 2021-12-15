import { Logger } from '@nestjs/common';
import {
  MessageBody,
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
  handleDraw(@MessageBody() { room, toolName, coordinates }): void {
    this.server.to(room).emit('draw', toolName, coordinates);
  }

  @SubscribeMessage('drawEnd')
  handleDrawEnd(@MessageBody() room: string): void {
    this.server.to(room).emit('drawEnded');
  }

  @SubscribeMessage('joinRoom')
  handleJoin(client: Socket, room: string): void {
    client.join(room);
    client.emit('joinedRoom', room);
  }
}
