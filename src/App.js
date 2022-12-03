import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Contents/Main/Main";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {Articles} from "./components/Contents/Articles/Articles/Articles";
import {AddArticle} from "./components/Contents/Articles/Add/AddArticle";
import {Questions} from "./components/Contents/Question/Catalog/Questions";
import {Testing} from "./components/Contents/Testing/Testing";
import {Statistic} from "./components/Contents/Statistic/Statistic";
import {Article} from "./components/Contents/Articles/Article/Article";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                    <div className="content">
                        <Header/>
                            <Routes>
                                <Route path='/articles' element={<Articles state={props.state}/>}/>
                                <Route path='/article/:id' element={<Article state={props.state}/>}/>
                                <Route path='/article/edit/:id' element={<AddArticle state={props.state}/>}/>
                                <Route path='/articles/add' element={<AddArticle state={props.state}/>}/>
                                <Route path='/articles/edit' element={<Articles state={props.state}/>}/>
                                <Route path='/questions' element={<Questions state={props.state}/>}/>
                                <Route path='/questions/add' element={<AddArticle state={props.state}/>}/>
                                <Route path='/testing' element={<Testing state={props.state}/>}/>
                                <Route path='/statistic' element={<Statistic state={props.state}/>}/>
                                <Route path='*' element={<Main state={props.state}/>}/>
                            </Routes>
                        <Footer/>
                    </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
