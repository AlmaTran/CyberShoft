import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getProductById } from "src/services";
import { IIFE } from "src/utils";
import { IDetailAPI } from "./type";
import { convert } from "../convert";
import { ListCard } from "src/components/list-card";

function Detail() {
  const { idDetail } = useParams<{ idDetail: string }>();
  const params = useParams<{ idDetail: string }>();

  const [detail, setDetail] = useState<IDetailAPI>();
  console.log(detail);
  // console.log(params)

  /**
   * call api khi vào trang detail với id gì gì đó
   */

  useEffect(() => {
    if (params.idDetail) {
      IIFE(async () => {
        const resp = await getProductById(params.idDetail);
        setDetail(resp);
      });
    }
  }, [params.idDetail]);

  return (
    <div>
      <img style={{
        width: 500,
        height: 400,
        padding: "2rem"
      }} src={detail?.image} alt="" />
      {/* Cart */}
      {/* Releproduct */}
      {detail?.relatedProducts?.length   && (
        <ListCard data={convert(detail.relatedProducts)} />
      )}
    </div>
  );
}

export default Detail;
