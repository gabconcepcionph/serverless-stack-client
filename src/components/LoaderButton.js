import React from "react";
import {Button, Glyphicon} from "react-bootstrap";
import "./LoaderButton.css";

export default function LoaderButton({
    isLoading,
    classname = "",
    disabled = false,
    ...props
}){
    return (
        <Button
            className={`LoaderButton ${classname}`}
            disabled={disabled||isLoading}
            {...props}>
            {isLoading && <Glyphicon glyph="refresh" className="spinning"/>}
            {props.children}
        </Button>
    );
};