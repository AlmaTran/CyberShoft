import React, { PropsWithChildren, Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';

function HomeTemplate(props:PropsWithChildren) {
  return (
    <div>

        <Header/>

        {/* ---------PAGES------ */}
        <Suspense fallback={<p>"Loading...?"</p>}>
            <Outlet/>
        </Suspense>
          {/*---------PAGES------- */}
        {/* // Dùng outlet để render components */}
        {/* {props.children} */}

        <Footer/>
    </div>
  )
}

export default HomeTemplate