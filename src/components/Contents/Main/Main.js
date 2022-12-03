import React from "react";
import  style from "./Main.module.css";

export const Main = (props) => {
    return(
        <div className={style.formSearch}>
            <input type="search" name="search" placeholder="search your book here for.."/>
            <button type="submit">Search</button>
        </div>
    )
}

