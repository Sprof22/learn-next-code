import styled from "styled-components";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
  display: flex;
  grid-gap: 50px;
  max-width: 1440px;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  height: 525px;
  margin-bottom: 30px;
  border-radius: 15px;
  > p {
    font-size: 18px;
    padding: 29px;
  }

  >&: nth-of-type(1) img {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }
`;

export default function Home() {
  return (
    <MainContainer className={inter.className}>
      <ItemCard className="item-card">
        <img src="./pic.svg" alt="" />
        <h3>The Virtual Event Production Kit</h3>
        <p>
          Want templates built by event leaders for event leaders? In this kit,
          you’ll get seven templates and a glossary of terms ...
        </p>
        <img src="./arrow-circle.svg" />
      </ItemCard>
      <ItemCard className="item-card">
        <img src="./pic.svg" alt="" />
        <h3>The Virtual Event Production Kit</h3>
        <p>
          Want templates built by event leaders for event leaders? In this kit,
          you’ll get seven templates and a glossary of terms ...
        </p>
        <img src="./arrow-circle.svg" />
      </ItemCard>
      <ItemCard className="item-card">
        <img src="./pic.svg" alt="" />
        <h3>The Virtual Event Production Kit</h3>
        <p>
          Want templates built by event leaders for event leaders? In this kit,
          you’ll get seven templates and a glossary of terms ...
        </p>
        <Link href="/learnMore">
          <img src="./arrow-circle.svg" />
        </Link>
      </ItemCard>
    </MainContainer>
  );
}
