import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "./context";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Nav from "./components/nav/Nav";
import Tools from "./components/tools/Tools";
import Poker from './components/poker/Poker';
import Schedule from './components/schedule/Schedule';

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
return (
    <Router>
	<div className = "MainApp" style = {{backgroundColor: darkMode ? "#222" : "white",  color: darkMode &&"white"}}>
    <Nav/>
    <Switch>
        <Route path = "/Portfolio" exact component = {MainPage} />
        <Route path = "/tools" component = {Tools} />
        <Route path = "/poker" component = {Poker} />
        <Route path = "/scheduler" component = {Schedule} />
	</Switch>
    </div>
    </Router>
    );
};

// Pages

const MainPage = () => {
    return (
        <div>
            <Toggle/>
            <Intro/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    )
}

export default App;