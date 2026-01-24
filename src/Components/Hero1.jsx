import Header from "./Header"
import styled from "styled-components"
import power from '../assets/power.svg'
import download from '../assets/download.svg'
import herobg from '../assets/herobg.svg'

const Hero1 = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
  return (
    <Wrapper id="hero1">
      <Header />

      <PageContent>
            <Texts>
                <h1>
                    A NEW CYCLE BEGINS FOR HUMANITY
                </h1>
                <p>
                    Technology was meant to serve humanity, not to enslave it <br /> Bullcycle unites AI, blockchain and ethics to rebuild global trust, dignity and progress
                </p>
            </Texts>
            <PageButtons>
                <Page1Button1 onClick={() => scrollToSection('hero5')}>
                    <img src={power} alt="Power Icon" />
                    <p>Explore Ecosystem</p>
                </Page1Button1>

                <Page1Button2>
                    <img style={{color: "black"}} src={download} alt="Download Icon" />
                    <p>Download Whitepaper</p>
                </Page1Button2>
            </PageButtons>
      </PageContent>
      
    </Wrapper>
  )
}

export default Hero1

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    overflow: hidden;
    /* background-image: url(${herobg});
    background-size: 70%;
    background-position: center calc(100% + 350px);
    background-repeat: no-repeat; */

    @media (max-width: 1440px) {
        background-size: 80%;
        background-position: center calc(100% + 250px);
    }

    @media (max-width: 1024px) {
        background-size: 90%;
        background-position: center calc(100% + 200px);
    }

    @media (max-width: 768px) {
        background-size: 150%;
        background-position: center calc(100% + 250px);
    }

    @media (max-width: 480px) {
        height: auto;
        background-size: 220%;
        background-position: center calc(100% + 250px);   
    }

    @media (max-width: 425px) {
        height: auto;
        background-size: 220%;
        background-position: center calc(100% + 250px);         // center content vertically
    }

    @media (max-width: 320px) {
        background-size: 200%;
        background-position: center calc(100% + 150px);
    }
`

const PageContent = styled.div`
    width: 90%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* margin-bottom: 500px; */

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
        /* margin-bottom: 180px; */
    }

    @media (max-width: 425px) {
        /* margin-bottom: 180px; */
    }

    @media (max-width: 320px) {
        /* margin-bottom: 180px; */
    }
`
const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 90px;
        line-height: 100%;
        color: #2400FF;
    }

    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%; 
        text-align: center;
        color: black;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 60px;
            text-align: center;
        }
        p {
            text-align: center;
            line-height: 140%;
        }
    }

    @media (max-width: 480px) {
        width: 350px;
        h1 {
            font-size: 30px;
            text-align: center;
        }
        p {
            font-size: 12px;
            text-align: center;
            line-height: 140%;
        }
    }


    @media (max-width: 425px) {
        width: 350px;
        h1 {
            font-size: 30px;
            text-align: center;
        }
        p {
            font-size: 12px;
            text-align: center;
            line-height: 140%;
        }
    }

    @media (max-width: 320px) {
        width: 300px;
        h1 {
            font-size: 24px;
            text-align: center;
        }
        p {
            font-size: 12px;
            text-align: center;
            line-height: 100%;
        }
    }
`

const PageButtons = styled.div`
    width: 650px;
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
        width: 320px;
    }
`

const Page1Button1 = styled.div`
    width: 200px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid black;
    

     &:hover {
        transform: scale(1.05);
    }

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
        height: 20px;
        p {
            font-size: 10px;
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
    border: 1px solid #2400FF;
    cursor: pointer;
    transition: all 0.2s;

     &:hover {
        transform: scale(1.05);
    }

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
        height: 20px;
        p {
            font-size: 9px;
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