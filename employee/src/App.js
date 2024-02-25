import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <main className=" w-max h-max">
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}

export default App;
