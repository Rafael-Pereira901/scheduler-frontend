import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import NewTask from "./pages/newTask";
import UpdateTask from "./pages/updateTask";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/new" element={<NewTask />} />
        <Route path="/update" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}
