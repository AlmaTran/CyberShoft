import * as S from "./style";
import { useNavigate } from "react-router-dom";

export type TCard = {
  id: string | number;
  src: string;
  alt?: string;
  name: string;
  desc: string;
  price: string | number;
};

type Props = TCard;

export function Card(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate(`/detail/${props.id}`)
  }

  return (
    <S.Wrapper>
      <div className="center">
        <S.Image
          onClick={handleNavigate}
          src={props.src}
          alt={props.alt ?? props.name}
        />
      </div>

      <div className="content">
        <S.Name>{props.name}</S.Name>
        <S.Desc>{props.desc}</S.Desc>
      </div>

      <div className="action">
        <S.Button onClick={handleNavigate} variant="buy">Buy</S.Button>
        <S.Button onClick={handleNavigate} variant="dollar">
          ${Number(props.price).toLocaleString()}
        </S.Button>
      </div>
    </S.Wrapper>
  );
}
