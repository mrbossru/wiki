import React from "react";

import {Footer} from "./Views/Footer/Footer";
import {Main} from "./Views/Pages/Main/Main";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Articles} from "./Views/Pages/Articles/Articles/Articles";
import {AddArticle} from "./Views/Pages/Articles/Add/AddArticle";
import {Questions} from "./Views/Pages/Questions/Catalog/Questions";
import {Testing} from "./Views/Pages/Testing/Testing";
import {Statistic} from "./Views/Pages/Statistic/Statistic";
import {Article} from "./Views/Pages/Articles/Article/Article";
import {Header} from "./Views/Header/Header";
import {StateData} from "./StateData";
import {AddQuestion} from "./Views/Pages/Questions/Add/AddQuestion";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                    <div className="content">
                        <Header/>
                            <Routes>
                                <Route path='/articles' element={<Articles model={props.model} stateData={StateData}/>}/>
                                <Route path='/article/:id' element={<Article model={props.model} stateData={StateData}/>}/>
                                <Route path='/article/edit/:id' element={<AddArticle model={props.model} stateData={StateData}/>}/>
                                <Route path='/articles/add' element={<AddArticle model={props.model} stateData={StateData}/>}/>
                                <Route path='/articles/edit' element={<Articles model={props.model} stateData={StateData}/>}/>
                                <Route path='/questions' element={<Questions model={props.model} stateData={StateData}/>}/>
                                <Route path='/questions/add' element={<AddQuestion model={props.model} stateData={StateData}/>}/>
                                <Route path='/testing' element={<Testing model={props.model}/>} stateData={StateData}/>
                                <Route path='/statistic' element={<Statistic model={props.model} stateData={StateData}/>}/>
                                <Route path='*' element={<Main model={props.model} stateData={StateData}/>}/>
                            </Routes>
                        <Footer/>
                    </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
