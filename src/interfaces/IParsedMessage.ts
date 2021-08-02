import { TFigure, TMethod } from '../types';

export interface IParsedMessage {
  method: TMethod;
  id: string;
  figure: {
    type: TFigure;
    x: number;
    y: number;
    currentX: number;
    currentY: number;
    width: number;
    height: number;
    radius: number;
    lineWidth: number;
    color: string;
  };
}
