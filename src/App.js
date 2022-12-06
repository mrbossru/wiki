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

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                    <div className="content">
                        <Header/>
                            <Routes>
                                <Route path='/articles' element={<Articles state={props.state} stateData={StateData}/>}/>
                                <Route path='/article/:id' element={<Article state={props.state} stateData={StateData}/>}/>
                                <Route path='/article/edit/:id' element={<AddArticle state={props.state} stateData={StateData}/>}/>
                                <Route path='/articles/add' element={<AddArticle state={props.state} stateData={StateData}/>}/>
                                <Route path='/articles/edit' element={<Articles state={props.state} stateData={StateData}/>}/>
                                <Route path='/questions' element={<Questions state={props.state}/>} stateData={StateData}/>
                                <Route path='/questions/add' element={<AddArticle state={props.state} stateData={StateData}/>}/>
                                <Route path='/testing' element={<Testing state={props.state}/>} stateData={StateData}/>
                                <Route path='/statistic' element={<Statistic state={props.state} stateData={StateData}/>}/>
                                <Route path='*' element={<Main state={props.state} stateData={StateData}/>}/>
                            </Routes>
                        <Footer/>
                    </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
