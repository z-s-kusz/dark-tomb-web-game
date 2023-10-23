/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Route, Router, Routes } from '@solidjs/router';

import './index.css';
import Home from '@/pages/home/Home';
import NewGame from '@/pages/new-game/NewGame';
const CardBuilder = lazy(() => import('@/pages/card-builder/CardBuilder'));
const About = lazy(() => import('@/pages/about/About'));

const root = document.getElementById('root');

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/card-builder" component={CardBuilder} />
                <Route path="/new-game" component={NewGame} />
            </Routes>
        </Router>
    ),
    root!
);
