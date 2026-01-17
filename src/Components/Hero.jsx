import Header from "./Header"
import styled from "styled-components"
import power from '../assets/power.svg'
import download from '../assets/download.svg'
import herobg from '../assets/herobg.svg'

const Hero = () => {
  return (
    <Wrapper>
      <Header />

      <PageContent>
        <PageContentItems>
            <Texts>
                <h1>
                    A NEW CYCLE BEGINS FOR HUMANITY
                </h1>
                <p>
                    Technology was meant to serve humanity, not to enslave it <br /> Bullcycle unites AI, blockchain and ethics to rebuild global trust, dignity and progress
                </p>
            </Texts>
            <PageButtons>
                <Page1Button1>
                    <img src={power} alt="Power Icon" />
                    <p>Explore Ecosystem</p>
                </Page1Button1>

                <Page1Button2>
                    <img src={download} alt="Download Icon" />
                    <p>Download Whitepaper</p>
                </Page1Button2>
            </PageButtons>

            <HeroImage>
                <img src={herobg} alt="" />
            </HeroImage>
        </PageContentItems>
      </PageContent>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #030013;
    overflow: hidden;

    /* @media (max-width: 320px) {
        height: 70vh;
    } */
`

const PageContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    h1{
        font-family: 'Bebas Neue', regular;
        font-weight: 400;
        font-size: 90px;
        line-height: 100%;
        color: white;
    }

    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%; 
        text-align: center;
        color: white;
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 75px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 60px;
        }
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 50px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 12px;
        }
    }
`

const PageContentItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 1440px) {
        gap: 35px;
    }

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        gap: 25px;
    }

    @media (max-width: 480px) {
        gap: 20px;
    }
`

const Texts = styled.div`

    @media (max-width: 425px) {
        width: 350px;
        h1 {
            font-size: 30px;
            text-align: center;
        }
        p {
            text-align: center;
        }
    }

    @media (max-width: 320px) {
        width: 300px;
        h1 {
            font-size: 25px;
            text-align: center;
        }
        p {
            font-size: 10px;
            text-align: center;
        }
    }
`

const PageButtons = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1440px) {
        width: 480px;
    }

    @media (max-width: 1024px) {
        width: 480px;
    }

    @media (max-width: 768px) {
        width: 420px;
    }

    @media (max-width: 480px) {
        width: 320px;
    }

    @media (max-width: 320px) {
        width: 250px;
    }
`

const Page1Button1 = styled.div`
    width: 200px;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 12px;
    }

    p{
        color: black;
        font-family: 'Geist', SemiBold;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
    }

    @media (max-width: 1440px) {
        width: 200px;
        height: 38px;
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 1024px) {
        width: 200px;
        height: 36px;
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 34px;
        p {
            font-size: 13px;
        }
        img {
            width: 10px;
        }
    }

    @media (max-width: 480px) {
        width: 130px;
        height: 32px;
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 425px) {
        width: 130px;
        height: 20px;
        p {
            font-size: 10px;
        }
    }

    @media (max-width: 320px) {
        width: 100px;
        height: 15px;
        p {
            font-size: 8px;
        }
    }
`

const Page1Button2 = styled.div`
    width: 200px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid white;

    img{
        width: 12px;
    }

    p{
        color: white;
        font-family: 'Geist', SemiBold;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
    }

    @media (max-width: 1440px) {
        width: 200px;
        height: 38px;
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 1024px) {
        width: 200px;
        height: 36px;
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 34px;
        p {
            font-size: 13px;
        }
        img {
            width: 10px;
        }
    }

    @media (max-width: 480px) {
        width: 130px;
        height: 32px;
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 425px) {
        width: 130px;
        height: 20px;
        p {
            font-size: 10px;
        }
    }

    @media (max-width: 320px) {
        width: 100px;
        height: 15px;
        p {
            font-size: 8px;
        }
    }
`

const HeroImage = styled.div`
    img{
        height: 500px;
        max-height:60vh;
        object-fit: contain;
    }

    @media (max-width: 1440px) {
        img {
            height: 550px;
        }
    }

    @media (max-width: 1024px) {
        img {
            height: 550px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 550px;
            max-height:100vh;
        }
    }

    @media (max-width: 480px) {
        img {
            height: 260px;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 90vw;
            max-width: 400px;
            height: auto;
            max-height: 45vh;
        }
    }
`

export default Hero