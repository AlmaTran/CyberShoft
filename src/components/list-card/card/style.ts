import styled from "styled-components";

export const Wrapper = styled.div`
  width: 36rem;
  height: 36rem;
  box-shadow: 0rem 0.4rem 0.4rem 0 #00000040;

  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  overflow: hidden;

  .center {
    display: flex;
    justify-content: center;
  }
  .content {
    margin: 4rem;
  }
  .action {
    margin-top: auto;
  }
`;
export const Image = styled.img`
  width: 21rem;
  height: 17rem;
  object-fit: cover;
`;
export const Name = styled.p`
  font-family: Inter;
  font-size: 2.4rem;
  font-weight: 300;
`;
export const Desc = styled.p`
  font-family: Inter;
  font-size: 0.8rem;
  font-weight: 300;
  color: #cbc9c9;
`;

export const Button = styled.button<{ variant: "buy" | "dollar" }>`
  background-color: ${(props) => {
    switch (props.variant) {
      case "buy":
        return "#9de167";
      case "dollar":
        return "#DEDDDC";
        default: "";
    }
  }};

  height: 6.4rem;
  width: 50%;
  border: none;
  

`;
