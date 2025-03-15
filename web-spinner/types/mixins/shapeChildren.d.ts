import { Canvas2DShapeBezier } from "../elements/canvas2d/bezier";
import { Canvas2DElement } from "../elements/canvas2d/element";
import { Canvas2DShapeEllipse } from "../elements/canvas2d/ellipse";
import { Canvas2DShapeLine } from "../elements/canvas2d/line";
import { Canvas2DShapeRectangle } from "../elements/canvas2d/rectangle";
export declare function shapeChildren<B extends typeof Canvas2DElement>(Base: B): {
    new (...args: any[]): {
        bezier(options?: Options<Canvas2DShapeBezier>): Canvas2DShapeBezier;
        ellipse(options?: Options<Canvas2DShapeEllipse>): Canvas2DShapeEllipse;
        line(options?: Options<Canvas2DShapeLine>): Canvas2DShapeLine;
        rectangle(options?: Options<Canvas2DShapeRectangle>): Canvas2DShapeRectangle;
        "__#537337@#eventProxy": {
            fullscreenchange: (listener: TypedEventListener<"fullscreenchange">) => void;
            fullscreenerror: (listener: TypedEventListener<"fullscreenerror">) => void;
            abort: (listener: TypedEventListener<"abort">) => void;
            animationcancel: (listener: TypedEventListener<"animationcancel">) => void;
            animationend: (listener: TypedEventListener<"animationend">) => void;
            animationiteration: (listener: TypedEventListener<"animationiteration">) => void;
            animationstart: (listener: TypedEventListener<"animationstart">) => void;
            auxclick: (listener: TypedEventListener<"auxclick">) => void;
            beforeinput: (listener: TypedEventListener<"beforeinput">) => void;
            beforetoggle: (listener: TypedEventListener<"beforetoggle">) => void;
            blur: (listener: TypedEventListener<"blur">) => void;
            cancel: (listener: TypedEventListener<"cancel">) => void;
            canplay: (listener: TypedEventListener<"canplay">) => void;
            canplaythrough: (listener: TypedEventListener<"canplaythrough">) => void;
            change: (listener: TypedEventListener<"change">) => void;
            click: (listener: TypedEventListener<"click">) => void;
            close: (listener: TypedEventListener<"close">) => void;
            compositionend: (listener: TypedEventListener<"compositionend">) => void;
            compositionstart: (listener: TypedEventListener<"compositionstart">) => void;
            compositionupdate: (listener: TypedEventListener<"compositionupdate">) => void;
            contextlost: (listener: TypedEventListener<"contextlost">) => void;
            contextmenu: (listener: TypedEventListener<"contextmenu">) => void;
            contextrestored: (listener: TypedEventListener<"contextrestored">) => void;
            copy: (listener: TypedEventListener<"copy">) => void;
            cuechange: (listener: TypedEventListener<"cuechange">) => void;
            cut: (listener: TypedEventListener<"cut">) => void;
            dblclick: (listener: TypedEventListener<"dblclick">) => void;
            drag: (listener: TypedEventListener<"drag">) => void;
            dragend: (listener: TypedEventListener<"dragend">) => void;
            dragenter: (listener: TypedEventListener<"dragenter">) => void;
            dragleave: (listener: TypedEventListener<"dragleave">) => void;
            dragover: (listener: TypedEventListener<"dragover">) => void;
            dragstart: (listener: TypedEventListener<"dragstart">) => void;
            drop: (listener: TypedEventListener<"drop">) => void;
            durationchange: (listener: TypedEventListener<"durationchange">) => void;
            emptied: (listener: TypedEventListener<"emptied">) => void;
            ended: (listener: TypedEventListener<"ended">) => void;
            error: (listener: TypedEventListener<"error">) => void;
            focus: (listener: TypedEventListener<"focus">) => void;
            focusin: (listener: TypedEventListener<"focusin">) => void;
            focusout: (listener: TypedEventListener<"focusout">) => void;
            formdata: (listener: TypedEventListener<"formdata">) => void;
            gotpointercapture: (listener: TypedEventListener<"gotpointercapture">) => void;
            input: (listener: TypedEventListener<"input">) => void;
            invalid: (listener: TypedEventListener<"invalid">) => void;
            keydown: (listener: TypedEventListener<"keydown">) => void;
            keypress: (listener: TypedEventListener<"keypress">) => void;
            keyup: (listener: TypedEventListener<"keyup">) => void;
            load: (listener: TypedEventListener<"load">) => void;
            loadeddata: (listener: TypedEventListener<"loadeddata">) => void;
            loadedmetadata: (listener: TypedEventListener<"loadedmetadata">) => void;
            loadstart: (listener: TypedEventListener<"loadstart">) => void;
            lostpointercapture: (listener: TypedEventListener<"lostpointercapture">) => void;
            mousedown: (listener: TypedEventListener<"mousedown">) => void;
            mouseenter: (listener: TypedEventListener<"mouseenter">) => void;
            mouseleave: (listener: TypedEventListener<"mouseleave">) => void;
            mousemove: (listener: TypedEventListener<"mousemove">) => void;
            mouseout: (listener: TypedEventListener<"mouseout">) => void;
            mouseover: (listener: TypedEventListener<"mouseover">) => void;
            mouseup: (listener: TypedEventListener<"mouseup">) => void;
            paste: (listener: TypedEventListener<"paste">) => void;
            pause: (listener: TypedEventListener<"pause">) => void;
            play: (listener: TypedEventListener<"play">) => void;
            playing: (listener: TypedEventListener<"playing">) => void;
            pointercancel: (listener: TypedEventListener<"pointercancel">) => void;
            pointerdown: (listener: TypedEventListener<"pointerdown">) => void;
            pointerenter: (listener: TypedEventListener<"pointerenter">) => void;
            pointerleave: (listener: TypedEventListener<"pointerleave">) => void;
            pointermove: (listener: TypedEventListener<"pointermove">) => void;
            pointerout: (listener: TypedEventListener<"pointerout">) => void;
            pointerover: (listener: TypedEventListener<"pointerover">) => void;
            pointerup: (listener: TypedEventListener<"pointerup">) => void;
            progress: (listener: TypedEventListener<"progress">) => void;
            ratechange: (listener: TypedEventListener<"ratechange">) => void;
            reset: (listener: TypedEventListener<"reset">) => void;
            resize: (listener: TypedEventListener<"resize">) => void;
            scroll: (listener: TypedEventListener<"scroll">) => void;
            scrollend: (listener: TypedEventListener<"scrollend">) => void;
            securitypolicyviolation: (listener: TypedEventListener<"securitypolicyviolation">) => void;
            seeked: (listener: TypedEventListener<"seeked">) => void;
            seeking: (listener: TypedEventListener<"seeking">) => void;
            select: (listener: TypedEventListener<"select">) => void;
            selectionchange: (listener: TypedEventListener<"selectionchange">) => void;
            selectstart: (listener: TypedEventListener<"selectstart">) => void;
            slotchange: (listener: TypedEventListener<"slotchange">) => void;
            stalled: (listener: TypedEventListener<"stalled">) => void;
            submit: (listener: TypedEventListener<"submit">) => void;
            suspend: (listener: TypedEventListener<"suspend">) => void;
            timeupdate: (listener: TypedEventListener<"timeupdate">) => void;
            toggle: (listener: TypedEventListener<"toggle">) => void;
            touchcancel: (listener: TypedEventListener<"touchcancel">) => void;
            touchend: (listener: TypedEventListener<"touchend">) => void;
            touchmove: (listener: TypedEventListener<"touchmove">) => void;
            touchstart: (listener: TypedEventListener<"touchstart">) => void;
            transitioncancel: (listener: TypedEventListener<"transitioncancel">) => void;
            transitionend: (listener: TypedEventListener<"transitionend">) => void;
            transitionrun: (listener: TypedEventListener<"transitionrun">) => void;
            transitionstart: (listener: TypedEventListener<"transitionstart">) => void;
            volumechange: (listener: TypedEventListener<"volumechange">) => void;
            waiting: (listener: TypedEventListener<"waiting">) => void;
            webkitanimationend: (listener: TypedEventListener<"webkitanimationend">) => void;
            webkitanimationiteration: (listener: TypedEventListener<"webkitanimationiteration">) => void;
            webkitanimationstart: (listener: TypedEventListener<"webkitanimationstart">) => void;
            webkittransitionend: (listener: TypedEventListener<"webkittransitionend">) => void;
            wheel: (listener: TypedEventListener<"wheel">) => void;
        };
        "__#537337@#everyFrame": Updater | null;
        attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
        readonly canvas: import("../elements/canvas2d/canvas").Canvas2DCanvasBase;
        createChild<E extends typeof Canvas2DElement>(ElementClass: E, options?: Partial<Writeable<InstanceType<E>>> | undefined): InstanceType<E>;
        everyFrame: Updater | null;
        readonly listen: {
            fullscreenchange: (listener: TypedEventListener<"fullscreenchange">) => void;
            fullscreenerror: (listener: TypedEventListener<"fullscreenerror">) => void;
            abort: (listener: TypedEventListener<"abort">) => void;
            animationcancel: (listener: TypedEventListener<"animationcancel">) => void;
            animationend: (listener: TypedEventListener<"animationend">) => void;
            animationiteration: (listener: TypedEventListener<"animationiteration">) => void;
            animationstart: (listener: TypedEventListener<"animationstart">) => void;
            auxclick: (listener: TypedEventListener<"auxclick">) => void;
            beforeinput: (listener: TypedEventListener<"beforeinput">) => void;
            beforetoggle: (listener: TypedEventListener<"beforetoggle">) => void;
            blur: (listener: TypedEventListener<"blur">) => void;
            cancel: (listener: TypedEventListener<"cancel">) => void;
            canplay: (listener: TypedEventListener<"canplay">) => void;
            canplaythrough: (listener: TypedEventListener<"canplaythrough">) => void;
            change: (listener: TypedEventListener<"change">) => void;
            click: (listener: TypedEventListener<"click">) => void;
            close: (listener: TypedEventListener<"close">) => void;
            compositionend: (listener: TypedEventListener<"compositionend">) => void;
            compositionstart: (listener: TypedEventListener<"compositionstart">) => void;
            compositionupdate: (listener: TypedEventListener<"compositionupdate">) => void;
            contextlost: (listener: TypedEventListener<"contextlost">) => void;
            contextmenu: (listener: TypedEventListener<"contextmenu">) => void;
            contextrestored: (listener: TypedEventListener<"contextrestored">) => void;
            copy: (listener: TypedEventListener<"copy">) => void;
            cuechange: (listener: TypedEventListener<"cuechange">) => void;
            cut: (listener: TypedEventListener<"cut">) => void;
            dblclick: (listener: TypedEventListener<"dblclick">) => void;
            drag: (listener: TypedEventListener<"drag">) => void;
            dragend: (listener: TypedEventListener<"dragend">) => void;
            dragenter: (listener: TypedEventListener<"dragenter">) => void;
            dragleave: (listener: TypedEventListener<"dragleave">) => void;
            dragover: (listener: TypedEventListener<"dragover">) => void;
            dragstart: (listener: TypedEventListener<"dragstart">) => void;
            drop: (listener: TypedEventListener<"drop">) => void;
            durationchange: (listener: TypedEventListener<"durationchange">) => void;
            emptied: (listener: TypedEventListener<"emptied">) => void;
            ended: (listener: TypedEventListener<"ended">) => void;
            error: (listener: TypedEventListener<"error">) => void;
            focus: (listener: TypedEventListener<"focus">) => void;
            focusin: (listener: TypedEventListener<"focusin">) => void;
            focusout: (listener: TypedEventListener<"focusout">) => void;
            formdata: (listener: TypedEventListener<"formdata">) => void;
            gotpointercapture: (listener: TypedEventListener<"gotpointercapture">) => void;
            input: (listener: TypedEventListener<"input">) => void;
            invalid: (listener: TypedEventListener<"invalid">) => void;
            keydown: (listener: TypedEventListener<"keydown">) => void;
            keypress: (listener: TypedEventListener<"keypress">) => void;
            keyup: (listener: TypedEventListener<"keyup">) => void;
            load: (listener: TypedEventListener<"load">) => void;
            loadeddata: (listener: TypedEventListener<"loadeddata">) => void;
            loadedmetadata: (listener: TypedEventListener<"loadedmetadata">) => void;
            loadstart: (listener: TypedEventListener<"loadstart">) => void;
            lostpointercapture: (listener: TypedEventListener<"lostpointercapture">) => void;
            mousedown: (listener: TypedEventListener<"mousedown">) => void;
            mouseenter: (listener: TypedEventListener<"mouseenter">) => void;
            mouseleave: (listener: TypedEventListener<"mouseleave">) => void;
            mousemove: (listener: TypedEventListener<"mousemove">) => void;
            mouseout: (listener: TypedEventListener<"mouseout">) => void;
            mouseover: (listener: TypedEventListener<"mouseover">) => void;
            mouseup: (listener: TypedEventListener<"mouseup">) => void;
            paste: (listener: TypedEventListener<"paste">) => void;
            pause: (listener: TypedEventListener<"pause">) => void;
            play: (listener: TypedEventListener<"play">) => void;
            playing: (listener: TypedEventListener<"playing">) => void;
            pointercancel: (listener: TypedEventListener<"pointercancel">) => void;
            pointerdown: (listener: TypedEventListener<"pointerdown">) => void;
            pointerenter: (listener: TypedEventListener<"pointerenter">) => void;
            pointerleave: (listener: TypedEventListener<"pointerleave">) => void;
            pointermove: (listener: TypedEventListener<"pointermove">) => void;
            pointerout: (listener: TypedEventListener<"pointerout">) => void;
            pointerover: (listener: TypedEventListener<"pointerover">) => void;
            pointerup: (listener: TypedEventListener<"pointerup">) => void;
            progress: (listener: TypedEventListener<"progress">) => void;
            ratechange: (listener: TypedEventListener<"ratechange">) => void;
            reset: (listener: TypedEventListener<"reset">) => void;
            resize: (listener: TypedEventListener<"resize">) => void;
            scroll: (listener: TypedEventListener<"scroll">) => void;
            scrollend: (listener: TypedEventListener<"scrollend">) => void;
            securitypolicyviolation: (listener: TypedEventListener<"securitypolicyviolation">) => void;
            seeked: (listener: TypedEventListener<"seeked">) => void;
            seeking: (listener: TypedEventListener<"seeking">) => void;
            select: (listener: TypedEventListener<"select">) => void;
            selectionchange: (listener: TypedEventListener<"selectionchange">) => void;
            selectstart: (listener: TypedEventListener<"selectstart">) => void;
            slotchange: (listener: TypedEventListener<"slotchange">) => void;
            stalled: (listener: TypedEventListener<"stalled">) => void;
            submit: (listener: TypedEventListener<"submit">) => void;
            suspend: (listener: TypedEventListener<"suspend">) => void;
            timeupdate: (listener: TypedEventListener<"timeupdate">) => void;
            toggle: (listener: TypedEventListener<"toggle">) => void;
            touchcancel: (listener: TypedEventListener<"touchcancel">) => void;
            touchend: (listener: TypedEventListener<"touchend">) => void;
            touchmove: (listener: TypedEventListener<"touchmove">) => void;
            touchstart: (listener: TypedEventListener<"touchstart">) => void;
            transitioncancel: (listener: TypedEventListener<"transitioncancel">) => void;
            transitionend: (listener: TypedEventListener<"transitionend">) => void;
            transitionrun: (listener: TypedEventListener<"transitionrun">) => void;
            transitionstart: (listener: TypedEventListener<"transitionstart">) => void;
            volumechange: (listener: TypedEventListener<"volumechange">) => void;
            waiting: (listener: TypedEventListener<"waiting">) => void;
            webkitanimationend: (listener: TypedEventListener<"webkitanimationend">) => void;
            webkitanimationiteration: (listener: TypedEventListener<"webkitanimationiteration">) => void;
            webkitanimationstart: (listener: TypedEventListener<"webkitanimationstart">) => void;
            webkittransitionend: (listener: TypedEventListener<"webkittransitionend">) => void;
            wheel: (listener: TypedEventListener<"wheel">) => void;
        };
        scaleByPixelRatio(vector: import("..").Vector2D): import("..").Vector2D;
        accessKey: string;
        readonly accessKeyLabel: string;
        autocapitalize: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        inert: boolean;
        innerText: string;
        lang: string;
        readonly offsetHeight: number;
        readonly offsetLeft: number;
        readonly offsetParent: Element | null;
        readonly offsetTop: number;
        readonly offsetWidth: number;
        outerText: string;
        popover: string | null;
        spellcheck: boolean;
        title: string;
        translate: boolean;
        writingSuggestions: string;
        attachInternals(): ElementInternals;
        click(): void;
        hidePopover(): void;
        showPopover(): void;
        togglePopover(force?: boolean): boolean;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        readonly attributes: NamedNodeMap;
        readonly classList: DOMTokenList;
        className: string;
        readonly clientHeight: number;
        readonly clientLeft: number;
        readonly clientTop: number;
        readonly clientWidth: number;
        readonly currentCSSZoom: number;
        id: string;
        innerHTML: string;
        readonly localName: string;
        readonly namespaceURI: string | null;
        onfullscreenchange: ((this: Element, ev: Event) => any) | null;
        onfullscreenerror: ((this: Element, ev: Event) => any) | null;
        outerHTML: string;
        readonly ownerDocument: Document;
        readonly part: DOMTokenList;
        readonly prefix: string | null;
        readonly scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        readonly scrollWidth: number;
        readonly shadowRoot: ShadowRoot | null;
        slot: string;
        readonly tagName: string;
        attachShadow(init: ShadowRootInit): ShadowRoot;
        checkVisibility(options?: CheckVisibilityOptions): boolean;
        closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
        closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
        closest<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
        closest<E extends Element = Element>(selectors: string): E | null;
        computedStyleMap(): StylePropertyMapReadOnly;
        getAttribute(qualifiedName: string): string | null;
        getAttributeNS(namespace: string | null, localName: string): string | null;
        getAttributeNames(): string[];
        getAttributeNode(qualifiedName: string): Attr | null;
        getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
        getBoundingClientRect(): DOMRect;
        getClientRects(): DOMRectList;
        getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
        getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
        getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
        getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
        getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
        getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
        getHTML(options?: GetHTMLOptions): string;
        hasAttribute(qualifiedName: string): boolean;
        hasAttributeNS(namespace: string | null, localName: string): boolean;
        hasAttributes(): boolean;
        hasPointerCapture(pointerId: number): boolean;
        insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
        insertAdjacentHTML(position: InsertPosition, string: string): void;
        insertAdjacentText(where: InsertPosition, data: string): void;
        matches(selectors: string): boolean;
        releasePointerCapture(pointerId: number): void;
        removeAttribute(qualifiedName: string): void;
        removeAttributeNS(namespace: string | null, localName: string): void;
        removeAttributeNode(attr: Attr): Attr;
        requestFullscreen(options?: FullscreenOptions): Promise<void>;
        requestPointerLock(options?: PointerLockOptions): Promise<void>;
        scroll(options?: ScrollToOptions): void;
        scroll(x: number, y: number): void;
        scrollBy(options?: ScrollToOptions): void;
        scrollBy(x: number, y: number): void;
        scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
        scrollTo(options?: ScrollToOptions): void;
        scrollTo(x: number, y: number): void;
        setAttribute(qualifiedName: string, value: string): void;
        setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
        setAttributeNode(attr: Attr): Attr | null;
        setAttributeNodeNS(attr: Attr): Attr | null;
        setHTMLUnsafe(html: string): void;
        setPointerCapture(pointerId: number): void;
        toggleAttribute(qualifiedName: string, force?: boolean): boolean;
        webkitMatchesSelector(selectors: string): boolean;
        readonly baseURI: string;
        readonly childNodes: NodeListOf<ChildNode>;
        readonly firstChild: ChildNode | null;
        readonly isConnected: boolean;
        readonly lastChild: ChildNode | null;
        readonly nextSibling: ChildNode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly parentElement: HTMLElement | null;
        readonly parentNode: ParentNode | null;
        readonly previousSibling: ChildNode | null;
        textContent: string | null;
        appendChild<T extends Node>(node: T): T;
        cloneNode(deep?: boolean): Node;
        compareDocumentPosition(other: Node): number;
        contains(other: Node | null): boolean;
        getRootNode(options?: GetRootNodeOptions): Node;
        hasChildNodes(): boolean;
        insertBefore<T extends Node>(node: T, child: Node | null): T;
        isDefaultNamespace(namespace: string | null): boolean;
        isEqualNode(otherNode: Node | null): boolean;
        isSameNode(otherNode: Node | null): boolean;
        lookupNamespaceURI(prefix: string | null): string | null;
        lookupPrefix(namespace: string | null): string | null;
        normalize(): void;
        removeChild<T extends Node>(child: T): T;
        replaceChild<T extends Node>(node: Node, child: T): T;
        readonly ELEMENT_NODE: 1;
        readonly ATTRIBUTE_NODE: 2;
        readonly TEXT_NODE: 3;
        readonly CDATA_SECTION_NODE: 4;
        readonly ENTITY_REFERENCE_NODE: 5;
        readonly ENTITY_NODE: 6;
        readonly PROCESSING_INSTRUCTION_NODE: 7;
        readonly COMMENT_NODE: 8;
        readonly DOCUMENT_NODE: 9;
        readonly DOCUMENT_TYPE_NODE: 10;
        readonly DOCUMENT_FRAGMENT_NODE: 11;
        readonly NOTATION_NODE: 12;
        readonly DOCUMENT_POSITION_DISCONNECTED: 1;
        readonly DOCUMENT_POSITION_PRECEDING: 2;
        readonly DOCUMENT_POSITION_FOLLOWING: 4;
        readonly DOCUMENT_POSITION_CONTAINS: 8;
        readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
        dispatchEvent(event: Event): boolean;
        ariaAtomic: string | null;
        ariaAutoComplete: string | null;
        ariaBrailleLabel: string | null;
        ariaBrailleRoleDescription: string | null;
        ariaBusy: string | null;
        ariaChecked: string | null;
        ariaColCount: string | null;
        ariaColIndex: string | null;
        ariaColIndexText: string | null;
        ariaColSpan: string | null;
        ariaCurrent: string | null;
        ariaDescription: string | null;
        ariaDisabled: string | null;
        ariaExpanded: string | null;
        ariaHasPopup: string | null;
        ariaHidden: string | null;
        ariaInvalid: string | null;
        ariaKeyShortcuts: string | null;
        ariaLabel: string | null;
        ariaLevel: string | null;
        ariaLive: string | null;
        ariaModal: string | null;
        ariaMultiLine: string | null;
        ariaMultiSelectable: string | null;
        ariaOrientation: string | null;
        ariaPlaceholder: string | null;
        ariaPosInSet: string | null;
        ariaPressed: string | null;
        ariaReadOnly: string | null;
        ariaRequired: string | null;
        ariaRoleDescription: string | null;
        ariaRowCount: string | null;
        ariaRowIndex: string | null;
        ariaRowIndexText: string | null;
        ariaRowSpan: string | null;
        ariaSelected: string | null;
        ariaSetSize: string | null;
        ariaSort: string | null;
        ariaValueMax: string | null;
        ariaValueMin: string | null;
        ariaValueNow: string | null;
        ariaValueText: string | null;
        role: string | null;
        animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
        getAnimations(options?: GetAnimationsOptions): Animation[];
        after(...nodes: (Node | string)[]): void;
        before(...nodes: (Node | string)[]): void;
        remove(): void;
        replaceWith(...nodes: (Node | string)[]): void;
        readonly nextElementSibling: Element | null;
        readonly previousElementSibling: Element | null;
        readonly childElementCount: number;
        readonly children: HTMLCollection;
        readonly firstElementChild: Element | null;
        readonly lastElementChild: Element | null;
        append(...nodes: (Node | string)[]): void;
        prepend(...nodes: (Node | string)[]): void;
        querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
        querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
        querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
        querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
        querySelector<E extends Element = Element>(selectors: string): E | null;
        querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
        querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
        querySelectorAll<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
        querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
        querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
        replaceChildren(...nodes: (Node | string)[]): void;
        readonly assignedSlot: HTMLSlotElement | null;
        readonly attributeStyleMap: StylePropertyMap;
        readonly style: CSSStyleDeclaration;
        contentEditable: string;
        enterKeyHint: string;
        inputMode: string;
        readonly isContentEditable: boolean;
        onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
        onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
        onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
        oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
        oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
        ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onerror: OnErrorEventHandler;
        onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
        onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
        ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
        onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
        onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
        onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
        onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
        onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
        autofocus: boolean;
        readonly dataset: DOMStringMap;
        nonce?: string;
        tabIndex: number;
        blur(): void;
        focus(options?: FocusOptions): void;
    };
    observedAttributes: string[];
    tag: string;
} & B;
