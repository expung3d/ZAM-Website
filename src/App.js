import NotFound from "./NotFound";
import DevWarning from "./DevWarning";
import WorkingOnIt from "./WorkingOnIt";
import Home from "./Home";
import About from "./About";
import EZM from "./EZM";
import EzmModules from "./EZM_Modules";
import EzmFactions from "./EZM_Factions";
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/*">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rolesSystem" element={<Navigate to="../workingOnIt" />} />
          <Route path="enhancedZeusModules/*">
            <Route index element={<EZM />} />
            <Route path="modules" element={<EzmModules />} />
            <Route path="factions/*">
              <Route index element={<EzmFactions />} />
              <Route path="mdf" element={<Navigate to="../../../workingOnIt" />} />
            </Route>
          </Route>
          <Route path="devWarning" element={<DevWarning />} />
          <Route path="workingOnIt" element={<WorkingOnIt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;