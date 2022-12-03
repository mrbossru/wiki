import React from "react";
import {NavLink} from "react-router-dom";

export const  Header = () => {
    return(
        <header className="header">
            <div className="sub-menu">
                <div className="sub-menu-nav">
                    <NavLink className="nav-btn" to="/" >Главная</NavLink>
                </div>
                <div className="sub-menu-nav">
                    <button className="nav-btn">Статьи</button>
                    <div className="sub-menu-alt">
                        <NavLink to="/articles">Каталог</NavLink>
                        <NavLink to="/articles/add">Добавить</NavLink>
                    </div>
                </div>
                <div className="sub-menu-nav">
                    <button className="nav-btn">Вопросы</button>
                    <div className="sub-menu-alt">
                        <NavLink to="/questions">Каталог</NavLink>
                        <NavLink to="/questions/add">Добавить</NavLink>
                    </div>
                </div>
                <div className="sub-menu-nav">
                    <NavLink className="nav-btn" to="/testing">Тестирование</NavLink>
                </div>
                <div className="sub-menu-nav">
                    <NavLink className="nav-btn" to="/statistic">Статистика</NavLink>
                </div>
            </div>
        </header>
    )
}