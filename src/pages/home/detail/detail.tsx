import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { getProductById } from 'src/services';

function Detail() {
  const params = useParams<{idDetail: string}>;
  // console.log(params)

  /**
   * call api khi vào trang detail với id gì gì đó
   */

  useEffect(() => {
      getProductById(params.idDetail)
  },[])
  return (
    <div>
      Detail
      <Outlet/>
    </div>
  )
}

export default Detail