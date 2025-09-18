import React, { useRef } from "react";
import { Carousel, type CarouselRef } from "antd";
import * as S from "./style";

export function Slider() {
  const refCarousel = useRef<CarouselRef | null>(null);

  const onChange = (currentSlide: number) => {
    console.log("slide:", currentSlide);
  };

  return (
    <>
      {/* <button
        onClick={() => {
          console.log(refCarousel.current);
          refCarousel.current?.prev();
        }}
      >
        Prev
      </button>

      <button
        onClick={() => {
          refCarousel.current?.next();
        }}
      >
        Next
      </button> */}

      <S.MyCarousel
        ref={refCarousel}
        afterChange={onChange}
        dots={{ className: "hihi-haha" }}
      >
        <div>
          <S.CarouselItem>
            <div>Trần Đức Thuận</div>
          </S.CarouselItem>
        </div>

        <div>
          <S.CarouselItem>
            <div>Trần Đức</div>
          </S.CarouselItem>
        </div>

        <div>
          <S.CarouselItem>Hiệp</S.CarouselItem>
        </div>

        <div>
          <S.CarouselItem>4</S.CarouselItem>
        </div>
      </S.MyCarousel>
      
    </>
  );
}
