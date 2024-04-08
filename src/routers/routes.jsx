import {
  Route,
  Routes,
} from "react-router-dom";
import JobDetails from "../components/JobDetails";
import JobLists from "../components/JobLists";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<JobLists />} />
      <Route path="/jobs" element={<JobLists />} />
      <Route path="/jobs/:position" element={<JobDetails />} />
    </Routes>
  );
}
