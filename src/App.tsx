import { useDispatch } from "react-redux";
import StudentsList from "./components/StudentsList/StudentsList";
import { loadStudents } from "./store/slices/studentsSlice";
import { RootDispatch } from "./store/store";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch<RootDispatch>();
  useEffect(() => {
    dispatch(loadStudents())
  }, [dispatch]);

  return (
    <div>
      <StudentsList />
    </div>
  );
}

export default App;
