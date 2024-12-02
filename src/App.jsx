import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import TaskDashboard from "./pages/TaskDashboard";
import TaskDetails from "./pages/TaskDetails";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="tasks" element={<TaskDashboard />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
