import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
const Main = () => {

    // User Data
    const [userData, setUserData] = useState()

    const fetchData = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_APP_API_URL)
            console.log(response.data.user);
            setUserData(response.data.user)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
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

        </>
    )
}

export default Main
