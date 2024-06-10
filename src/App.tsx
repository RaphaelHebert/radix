import { Routes, Route } from "react-router-dom";
import { useSignals } from "@preact/signals-react/runtime";
import { Home } from "@/pages";

function App() {
  useSignals();

  return (
    <Routes>
      {/* TODO: add a loader to the Route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
export default App;
