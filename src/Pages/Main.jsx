import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const Main = () => {

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

    // User Data
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_APP_API_URL);
            console.log(response.data.user);
            setUserData(response.data.user);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#49d1e0" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(275.845 50 50)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Cursor */}
            <div className="cursor" style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}>
                <div className="cursor__circle"></div>
            </div>

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

            {/* Services */}
            <Services services={userData && userData.services} />

            {/* Projects */}
            <Projects projects={userData && userData.projects} />

            {/* Resume */}
            <Resume resume={userData && userData.timeline} />

            {/* Testimonials */}
            <Testimonials testimonials={userData && userData.testimonials} />

            {/* Contact */}
            <Contact profileData={userData && userData} />

        </>
    )
}

export default Main;