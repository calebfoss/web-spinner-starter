import { Canvas2DCanvasElement } from "./elements/canvas2d/canvas";
import { Canvas2DRectangle, Canvas2DShapeRectangle } from "./elements/canvas2d/rectangle";
import { Color } from "./classes/color";
import { Vector2D } from "./classes/vector2d";
import { Angle } from "./classes/angle";
import { Canvas2DText } from "./elements/canvas2d/text";
import { Units } from "./classes/units";
import { State, createState } from "./classes/state";
import { Canvas2DLine, Canvas2DShapeLine } from "./elements/canvas2d/line";
import { Canvas2DShape } from "./elements/canvas2d/shape";
import { Canvas2DEllipse, Canvas2DShapeEllipse } from "./elements/canvas2d/ellipse";
import { Canvas2DBezier, Canvas2DShapeBezier } from "./elements/canvas2d/bezier";
import { Canvas2DImage } from "./elements/canvas2d/image";
import { Canvas2DVideo } from "./elements/canvas2d/video";
import { ConicalGradient, LinearGradient, RadialGradient } from "./classes/gradient";
import { Canvas2DElement } from "./elements/canvas2d/element";
import { Shadow } from "./classes/shadow";
export type CSSLengthUnit = (typeof Units.size)[keyof typeof Units.size];
export declare const NONE = "none";
declare function createMultiple<R extends Node>(count: number, generator: (index: number) => R): R[];
declare global {
    interface CustomElementRegistry {
        define<E extends typeof Canvas2DElement>(tag: E["tag"], ElementClass: E): void;
    }
}
export declare function createCustomElement<E extends typeof HTMLElement & {
    tag: string;
}>(ElementClass: E, options?: Options<InstanceType<E>>): InstanceType<E>;
declare function createCanvas(options?: Options<Canvas2DCanvasElement>): Canvas2DCanvasElement;
export type WebSpinnerElement = {
    Canvas2DCanvasElement: Canvas2DCanvasElement;
    Canvas2DBezier: Canvas2DBezier;
    Canvas2DEllipse: Canvas2DEllipse;
    Canvas2DImage: Canvas2DImage;
    Canvas2DLine: Canvas2DLine;
    Canvas2DRectangle: Canvas2DRectangle;
    Canvas2DShape: Canvas2DShape;
    Canvas2DShapeBezier: Canvas2DShapeBezier;
    Canvas2DShapeEllipse: Canvas2DShapeEllipse;
    Canvas2DShapeLine: Canvas2DShapeLine;
    Canvas2DShapeRectangle: Canvas2DShapeRectangle;
    Canvas2DText: Canvas2DText;
    Canvas2DVideo: Canvas2DVideo;
};
export { createCanvas, createMultiple, Color, Vector2D, Angle, State, ConicalGradient, LinearGradient, RadialGradient, Shadow, createState, };
