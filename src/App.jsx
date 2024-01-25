import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tasks from "./Tasks/Tasks";
import Footer from "./components/Footer/Footer";
import HeroContent from "./components/HeroContent/HeroContent";
import Navbar from "./components/Navbar/Navbar";
import TasksProvider from "./context/Context";

export default function App() {
  return (
    <>
      <TasksProvider>
        <Navbar />
        <div className="flex justify-center items-center">
          <HeroContent />
        </div>
        <div className="container mx-auto">
          <Tasks />
        </div>
        <Footer />
        <ToastContainer />
      </TasksProvider>
    </>
  );
}
