import './App.css';
import Nav from "./components/nav/Nav";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";



function App() {

    return (
        <>
            <div className="nav-wrapper">
            <Nav/></div>

            <Work/>


            <Contact/>

        </>
);
}

export default App;
