import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom';

function HomeTemplate(props:PropsWithChildren) {
  return (
    <div>
        <header 
            style={{
                height: 50,
                backgroundColor: "green",
            }}
        >Header</header>
        
        <Outlet/>

        <footer 
            style={{
                height: 50,
                backgroundColor: "black",
                color: "white",
            }}
        >Footer</footer>
    </div>
  )
}

export default HomeTemplate