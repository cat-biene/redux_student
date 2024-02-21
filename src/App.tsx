import { useDispatch } from "react-redux";
import StudentsList from "./components/StudentsList/StudentsList";
import { loadStudents } from "./store/slices/studentsSlice";
import { RootDispatch } from "./store/store";

function App() {

  const dispatch = useDispatch<RootDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(loadStudents())}>download!</button>
      <StudentsList/>
    </div>
  );
}

export default App;
