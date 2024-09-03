import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import "./index.css"


function App() {
  return (
    <div className="App">
    <Header/>
    <h1>Lesson Reminder</h1>
    <LessonCard/>
     
    </div>
  );
}

export default App;
