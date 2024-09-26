import 'boxicons';
import { Floating } from "./components/floating";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 overflow-x-hidden"> 
      <Floating />
      <Home></Home>
    </div>
  )
}

export default App;