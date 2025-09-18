import * as S from "./style";

type Props = {
  src: string;
  alt?: string;
  name: string;
  desc: string;
  price: string | number
}


export function Card(props:Props) {
  return (
    <S.Wrapper>
      <div className="center">
        <S.Image src={props.src} alt="" />
      </div>
      <div className="content">
        <S.Name>{props.name}</S.Name>
        <S.Desc>{props.desc}</S.Desc>
      </div>
      <div className="action">
          <S.Button variant={"buy"}>Buy</S.Button>
          <S.Button variant={"dollar"}>${props.price}</S.Button>
      </div>
    </S.Wrapper>
  );
}
