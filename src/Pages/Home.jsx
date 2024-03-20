import axios from "axios"
import React, { useEffect, useState } from "react"
const Home = () => {

    useEffect(() => {
        axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then((response) => {
            console.log(response.data)
        })
    }, [])


    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    )
}

export default Home
