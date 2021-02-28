/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BoardState } from "./models/board-state/board-state";
export namespace Components {
    interface BhumbaBoard {
        /**
          * The board state to render
         */
        "boardState": BoardState;
    }
}
declare global {
    interface HTMLBhumbaBoardElement extends Components.BhumbaBoard, HTMLStencilElement {
    }
    var HTMLBhumbaBoardElement: {
        prototype: HTMLBhumbaBoardElement;
        new (): HTMLBhumbaBoardElement;
    };
    interface HTMLElementTagNameMap {
        "bhumba-board": HTMLBhumbaBoardElement;
    }
}
declare namespace LocalJSX {
    interface BhumbaBoard {
        /**
          * The board state to render
         */
        "boardState"?: BoardState;
    }
    interface IntrinsicElements {
        "bhumba-board": BhumbaBoard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bhumba-board": LocalJSX.BhumbaBoard & JSXBase.HTMLAttributes<HTMLBhumbaBoardElement>;
        }
    }
}
