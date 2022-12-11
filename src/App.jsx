import './App.css';
import Navigation from './components/Navigation';
import AuthorSrc from './assets/symbol.png';
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import MainOverview from './components/main/MainOverview';

function App() {
  const [mainNavigation, setMainNavigation] = useState(null);
  const [sideNavigation, setSideNavigation] = useState(null);

  return (
    <div className="w-screen h-screen bg-gray-200 ">
      <Navigation setter={setMainNavigation} />
      <SideMenu navValue={mainNavigation} setter={setSideNavigation} />
      <MainOverview control={{ main: mainNavigation, sub: sideNavigation }} />
      <img
        src={AuthorSrc}
        alt=""
        className=" fixed -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] "
      />
    </div>
  );
}

export default App;
