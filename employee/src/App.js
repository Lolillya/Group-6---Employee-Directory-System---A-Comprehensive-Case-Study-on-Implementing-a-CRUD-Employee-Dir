import "./App.css";
import AddEmployeeModal from "./components/AddEmployeeModal/AddEmployeeModal";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <MainContent />
      {/* <AddEmployeeModal /> */}
    </>
  );
}

export default App;
