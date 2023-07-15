import './App.css';
import Form from './component/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './component/Update';
import Navbar from './component/Navbar';
import Table from './component/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      {/* <Form/><br/><br/>
      <Table/>
      <Update/> */}
      <BrowserRouter>
      <Navbar/><br/>
        <Routes>
          <Route path='/' element={<h1>This is my Home Page</h1>}/>
          <Route path='/addproduct' element={<Form/>} />
          <Route path={'/update/:_id'} element={<Update/>} />
          <Route path='/table' element={<Table/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
