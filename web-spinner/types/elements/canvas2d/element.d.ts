import { Vector2D } from "../../classes/vector2d";
import { Canvas2DCanvasElement } from "./canvas";
type EventListenerAdder = {
    readonly [EventName in keyof HTMLElementEventMap]: (listener: TypedEventListener<EventName>) => void;
};
export declare class Canvas2DElement extends HTMLElement {
    #private;
    static observedAttributes: string[];
    /**
     * The element's custom HTML tag. This can be passed into document.createElement().
     */
    static tag: string;
    constructor(...args: any[]);
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * The <c2d-canvas> element that is rendering this element. The <c2d-canvas>
     * will be an ancestor of this element.
     */
    get canvas(): Canvas2DCanvasElement;
    /**
     * @private
     */
    createChild<E extends typeof Canvas2DElement>(ElementClass: E, options?: Options<InstanceType<E>>): InstanceType<E>;
    /**
     * Function called before rendering. The function has one parameter: the
     * current frame number.
     */
    get everyFrame(): Updater | null;
    set everyFrame(updater: Updater | null);
    /**
     * Interface for adding event listeners with alternative syntax. For example,
     * element.addEventListener("click", listener) becomes
     * element.listen.click(listener).
     */
    get listen(): EventListenerAdder;
    /**
     * Scales a vector by the device's pixel ratio.
     */
    scaleByPixelRatio(vector: Vector2D): Vector2D;
}
export {};
