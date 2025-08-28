import React from 'react'
import "./App.css"
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const App = () => {

  const activeMenu = true;

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            Sidebar
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            Sidebar w-0
          </div>
        )}
        <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            Navbar
          </div>
        </div>
        <div>
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<div>ecommerce</div>} />
            <Route path='/ecommerce' element={<div>ecommerce</div>} />

            {/* Pages */}
            <Route path='/orders' element={<div>orders</div>} />
            <Route path='/employees' element={<div>employees</div>} />
            <Route path='/customers' element={<div>customers</div>} />

            {/* Apps */}
            <Route path='/kanban' element={<div>kanban</div>} />
            <Route path='/editor' element={<div>editor</div>} />
            <Route path='/calendar' element={<div>calendar</div>} />
            <Route path='/color-picker' element={<div>color-picker</div>} />

            {/* Charts */}
            <Route path='/line' element={<div>line</div>} />
            <Route path='/area' element={<div>area</div>} />
            <Route path='/bar' element={<div>bar</div>} />
            <Route path='/pie' element={<div>pie</div>} />
            <Route path='/financial' element={<div>financial</div>} />
            <Route path='/color-mapping' element={<div>color-mapping</div>} />
            <Route path='/pyramid' element={<div>pyramid</div>} />
            <Route path='/stacked' element={<div>stacked</div>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App