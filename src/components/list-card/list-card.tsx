// import { Flex } from "antd";
import { Card } from "./card";
import type { TCard } from "./card";

type Props = {
  data: TCard[];
};

export function ListCard(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4rem",
        flexWrap: "wrap",
      }}
    >
      {props.data.map((item) => {
        return (
          <Card key={item.id} desc={item.desc} name={item.name} price={10} src={item.src} id={item.id} />
        );
      })}
    </div>
  );
}
