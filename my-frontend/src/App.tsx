import Header from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import DeviceList from './components/fetch/DeviceList/DeviceList';
import DeviceDescription from './components/fetch/DeviceDescription/DeviceDescription';


export default function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          
          <Route path='/' element={<DeviceList />} />
          <Route path='/device/:id' element={<DeviceDescription />} />

        </Routes>
      </div>
    </>

  )
};

