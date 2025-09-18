import { styled } from "styled-components";
import { Carousel } from "antd";

const MyCarousel = styled(Carousel)`

`;


const CarouselItem = styled.h3`
  margin: 0;
  height: 260px;
  color: #fff;
  line-height: 260px;
  text-align: center;
  background: #0995e6ff;
  text-align: center;
`;

export { CarouselItem, MyCarousel, };
