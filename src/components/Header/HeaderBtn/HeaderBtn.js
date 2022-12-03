import React from "react";
import style from "./HeaderBtn.module.css";

import {NavLink} from "react-router-dom";

export const HeaderBtn = (props) => {
    if (props.save && props.delete()) {
        return (
            <div>
                <NavLink className={style.button + " " + style.touch + " " + style.save} onClick={props.save}></NavLink>
                <NavLink className={style.button + " " + style.touch + " " + style.delete} onClick={props.delete}></NavLink>
            </div>
        );
    }
    if(props.editlnk) {

        return (
            <div>
                <NavLink className={style.button + " " + style.touch + " " + style.edit} to={props.editlnk}></NavLink>
            </div>
        );
    }
    return (<div></div>);
}