import { Canvas2DElementTagMap } from "..";
export declare function createCustomCanvas2D<T extends keyof Canvas2DElementTagMap>(tag: T): Canvas2DElementTagMap[T];
