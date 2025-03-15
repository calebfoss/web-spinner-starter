import { Angle } from "../classes/angle";
import { Color } from "../classes/color";
import { DrawStyle } from "../classes/gradient";
import { Vector2D } from "../classes/vector2d";
type AttributeTypeMap = {
    number: number;
    Color: Color;
    FillStrokeStyle: DrawStyle;
    Vector2D: Vector2D;
    Angle: Angle;
};
type AttributeTypeParser = {
    [Type in keyof AttributeTypeMap]: (stringValue: string) => AttributeTypeMap[Type];
};
export declare const attributeParser: AttributeTypeParser;
export {};
