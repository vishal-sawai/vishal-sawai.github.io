import Main from "./Pages/Main"
import { Routes, Route } from "react-router-dom";
import ProjectInfo from "./Components/Projects/ProjectInfo"
import { createContext, useState, useEffect } from "react";
import { Api } from "./Api/";


const data = createContext();
function App() {

  // User Data
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    try {
      setUserData(Api[0].user);
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
      <data.Provider value={userData}>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path="/projectInfo/:id" element={<ProjectInfo />} />
        </Routes>
      </data.Provider>

    </>
  )
}

export default App
export { data };
