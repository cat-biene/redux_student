import { useDispatch } from "react-redux";
import StudentsList from "./components/StudentsList/StudentsList";
import { loadStudents } from "./store/slices/studentsSlice";
import { RootDispatch } from "./store/store";
import Test from "./components/Test";

function App() {

  const dispatch = useDispatch<RootDispatch>();

  return (
    <div>
      <Test/>
      <button onClick={() => dispatch(loadStudents())}>download!</button>
      <StudentsList/>
    </div>
  );
}

export default App;
