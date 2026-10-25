import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import ProfileCard from "./components/ProfileCard";
import SummaryPanel from "./components/SummaryPanel";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header
        title="Student Profile Dashboard"
        subtitle="Manage a student profile using props, state, controlled inputs, constants, and React Context."
      />

      <div className="layout">
        <StudentForm />

        <div className="right-panel">
          <ProfileCard />
          <SummaryPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
