import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import { useEffect, useState, useContext } from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { data } from "../App";
const Main = () => {

    const userData = useContext(data);

    // Mouse Cursor
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

    const moveCursor = (e) => {
        const { pageX: x, pageY: y } = e;
        setCursorXY({ x, y });
    };

    useEffect(() => {
        document.addEventListener("mousemove", moveCursor);
        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);


    return (
        <>
            {/* Cursor */}
            {/* <div className="cursor hidden xl:block" style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}>
                <div className="cursor__circle"></div>
            </div> */}

            {/* Navbar  */}
            <Navbar
                name={userData && userData.about.name ? userData.about.name : ''}
            />

            {/* Home Content */}
            <Home profileData={userData && userData} />

            {/* About Me */}
            <About profileData={userData && userData} />

            {/* Skills */}
            <Skills skill={userData && userData.skills} />

            {/* Projects */}
            <Projects projects={userData && userData.projects} />

            {/* Contact */}
            <Contact profileData={userData && userData.contact} />

        </>
    )
}

export default Main;