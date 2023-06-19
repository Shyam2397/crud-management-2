import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard';
import StudentsList from './pages/StudentsList';
import TeachersList from './pages/TeachersList';
import InterviewNotes from './pages/InterviewNotes';
import Profile from './pages/Profile';
import Nopage from './pages/Nopage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DashBoard/>}/>
        <Route  path='/students/all' element={<StudentsList/>}/>
        <Route  path='/teachers/all' element={<TeachersList/>}/>
        <Route  path='/interview/notes' element={<InterviewNotes/>}/>
        <Route  path='/profile' element={<Profile/>}/>
        <Route  path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
