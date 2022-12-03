import React from "react";

export const TypeIcon = (props) => {
    if (props.droppable) {
        if(props.isOpen){
            return <i className="fa fa-folder-open" aria-hidden="true"></i>
        }
        return <i className="fa fa-folder" aria-hidden="true"></i>;
    }
    return <i className="fa fa-file" aria-hidden="true"></i>;
};