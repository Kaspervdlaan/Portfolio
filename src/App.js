import './App.css';
import Nav from "./components/nav/Nav";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";



function App() {

    return (
        <>
            <div className="nav-wrapper">
            <Nav/></div>
            <Home/>

            <Work/>


            <Contact/>

        </>
);
}

export default App;
