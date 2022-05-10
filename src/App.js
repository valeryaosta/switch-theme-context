import "./App.css";
import Form from "./components/Form";
import {createContext, useState} from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null)

const App = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="App" id={theme}>
                <Form/>
                <div className="theme-mode">
                    <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
