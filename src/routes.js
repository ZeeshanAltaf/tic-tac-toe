import React, { Component } from 'react';


// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";


// Pages
import GameSettings from './pages/GameSettings/index';
import Game from './pages/Game/index';


class Routes1 extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" Component={GameSettings} />
                    <Route path="/ticTacToe" Component={Game} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Routes1;