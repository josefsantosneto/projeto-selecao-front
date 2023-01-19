import {Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation.component';
import Cadastro from './components/cadastro.component';
import Edit from './components/edit.component';
import useEmployees from './hooks/useEmployees';
import EditEmployee from './components/editemployee.component';
import CreatePost from './components/createPost/createPost.component';



const App = () => {
  const {employees} = useEmployees();
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Cadastro/>}/>
        <Route path='/edit' element={<Edit employees={employees}/>}/>
        <Route path='/employeeedit' element={<EditEmployee/>}/>
        <Route path='/cadastsrocargo' element={<CreatePost/>}/>

      </Route>
      
    </Routes>
)

}

export default App;
