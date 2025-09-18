import React, { useState,useEffect } from 'react'
import { Slider } from './slider'
// import RefComponent from './ref-component'
import { axiosWithoutAuth } from 'src/services'
import * as GS from 'src/components/style'
import { ListCard } from 'src/components/list-card'
import { getAllProduct } from 'src/services'
import { IIFE } from 'src/utils'



function Home() {

  /**
   * call api get list product khi người dùng vào trang home
   * 
   */

  // 1> call ở đây

  const [listProduct, setListProduct] = useState([]);
  
  useEffect(() => {   
    
    //IIFE : (() => {})()
   IIFE(async () => {
    const resp = await getAllProduct();
    setListProduct(resp);
   });

  },[]);

  return (
    <div>
        <Slider/>
        {/* <RefComponent/> */}
        <GS.Title>Product Feature</GS.Title>

        <div style={{
          margin: "3rem"
        }}>
           <ListCard/>
        </div>
    </div>
  )
}

export default Home