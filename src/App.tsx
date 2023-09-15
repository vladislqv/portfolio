import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import About from "./components/About.tsx";

function App() {

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header/>
                    <Hero/>
            </div>
            <About/>
        </>
    )
}

export default App
