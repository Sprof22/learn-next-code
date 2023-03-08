import styled from "styled-components";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const details = [
  {
    img: "./pic.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  },
  {
    img: "./pic.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  },
  {
    img: "./pic.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  }
];

const MainContainer = styled.div`
  display: flex;
  grid-gap: 19px;
  max-width: 1440px;
  margin: auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center; 

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  width: 420px; n 
  height: 525px;
  margin-bottom: 30px;
  border-radius: 15px;
  > p {
    font-size: 18px;
    padding: 29px;
  }

  > img {
    border-radius: 25px;
  }

  > div {
    padding: 30px;
    
  }

  > div {
     
      &:nth-of-type(2) {
        display: flex;
        grid-gap: 20px;
        align-items: center;
        justify-content: start;
        width: 80%
      }
    }

  >&: nth-of-type(1) img {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }
`;

export default function Home() {
  return (
    <MainContainer className={inter.className}>
   {details.map(detail => (
    <ItemCard className="item-card">
        <img src={detail.img} alt="" />
        <div>
          <h3>{detail.header}</h3>
          <p>{detail.text}</p>
        </div>
        <div>
        <img src="./arrow-circle.svg" />
        <Link href="/">Learn More</Link>
        </div>
        
      </ItemCard>
   ))}
    </MainContainer>
  );
}
