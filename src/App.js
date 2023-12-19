import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import { data } from "./helper/data";

function App() {
  return (
    <div>
      <Navbar />
      <Main data={data} />
    </div>
  );
}

export default App;
