import styled from "styled-components";
import Link from "next/link";

const details = [
  {
    img: "./pic.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  },
  {
    img: "./pic1.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  },
  {
    img: "./pic2.svg",
    header: "The Virtual Event Production Kit",
    text: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms ...",
  },
];

const Body = styled.div`
  h1 {
    text-align: center;
    font-size: 42px;
    line-height: 50px;
    letter: -2%;
  }
  @media (max-width: 450px) {
    font-size: 35px;
    line-height: 40px;
    margin-top: 18px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  grid-gap: 19px;
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1570px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 900px;
  }
  @media (max-width: 1350px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 900px;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  margin-bottom: 30px;
  border-radius: 15px;

  border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    overflow: hidden;
  > p {
    font-size: 18px;
    padding: 29px;
  }

 > img {
  width: 100%;
 }
  > div {
    padding: 30px;
  }

  > div > h3 {
    font-size: 26px;
    line-height: 35px;
  }
  > div > p {
    font-size: 18px;
    line-height: 30px;
  }
  > div {
    &:nth-of-type(2) {
      display: flex;
      grid-gap: 20px;
      align-items: center;
      justify-content: start;
      width: 80%;
      > img {
        transition: transform 0.2s;
        &: hover {
          transform: scale(1.2);
        }
      }
      > a {
        transition: transform 0.2s;
        &: hover {
          transform: translateX(10px);
        }
      }
    }
  }

  >&: nth-of-type(1) img {
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }

  ${
    "" /* @media (max-width: 450px) {
    > div{
      background-color: red,
    }
  } */
  }
  @media (max-width: 992px) {
    display: flex;
    max-width: 350px;
    height: auto;
    margin: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    margin-bottom: 18px;
    border-radius: 15px;

    > img {
      width: 100%;
    }
    > div {
      padding: 20px;
    }

    > div > h3 {
      font-size: 22px;
      line-height: 30px;
    }
    > div > p {
      font-size: 16px;
      line-height: 26px;
    }
    > div {
      &:nth-of-type(2) {
        display: flex;
        grid-gap: 20px;
        align-items: center;
        justify-content: start;
        width: 80%;
        > img {
          transition: transform 0.2s;
          &: hover {
            transform: scale(1.2);
          }
        }
        > a {
          transition: transform 0.2s;
          font-size: 16px;
          &: hover {
            transform: translateX(7px);
          }
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <Body>
      <h1>The resources you need</h1>
      <MainContainer>
        {details.map((detail) => (
          <ItemCard className="item-card">
            <img src={detail.img} alt="" />

            <div>
              <h3>{detail.header}</h3>
              <p>{detail.text}</p>
            </div>
            <div>
              <img src="./arrow-circle.svg" />
              <Link href="/learnMore">Learn More</Link>
            </div>
          </ItemCard>
        ))}
      </MainContainer>
    </Body>
  );
}
