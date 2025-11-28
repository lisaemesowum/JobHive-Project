import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navigation/Navbar.jsx";
import Home from "./component/pages/Home.jsx";
import Contact from "./component/pages/Contact.jsx";
import Feedback from "./component/pages/Feedback.jsx";
import SavedJob from "./component/pages/SavedJob.jsx";
import Footer from "./component/pages/Footer.jsx";
function App() {
  //  so that the home and the save job will connect
  const [savedJobs, setSavedJobs] = useState(() => {
    //  load from localStorage
    const saved = localStorage.getItem("savedJobs");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <>
      <Navbar />
      <Home savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
      <Contact />
      <Feedback />
      <SavedJob savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
        <Footer />
    </>
  );
}

export default App;
