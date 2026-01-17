import Header from "./Header"
import styled from "styled-components"
import power from '../assets/power.svg'
import download from '../assets/download.svg'

const LandingPage1 = () => {
  return (
    <Wrapper>
      <Header />
      <PageContent>
        <PageContentItems>
            <h1>
                A NEW CYCLE BEGINS FOR HUMANITY
            </h1>
            <p>
                Technology was meant to serve humanity, not to enslave it <br /> 
                Bullcycle unites AI, blockchain and ethics to rebuild global trust, dignity and progress
            </p>
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
        </PageContentItems>
      </PageContent>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #030013;
`

const PageContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 20px;

    h1{
        font-family: 'Bebas Neue', regular;
        font-weight: 400;
        font-size: 90px;
        line-height: 100%;
        color: white;
        text-align: center;
        max-width: 900px;
        margin-bottom: 30px;
    }

    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%; 
        text-align: center;
        color: white;
        margin-bottom: 40px;
        max-width: 700px;
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 70px;
            max-width: 700px;
        }

        p {
            font-size: 18px;
            max-width: 600px;
        }
    }

    @media (max-width: 768px) {
        padding: 30px 20px;

        h1 {
            font-size: 50px;
            max-width: 500px;
            margin-bottom: 25px;
        }

        p {
            font-size: 16px;
            max-width: 450px;
            margin-bottom: 35px;
            
            br {
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 20px 15px;

        h1 {
            font-size: 36px;
            max-width: 90%;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            max-width: 90%;
            margin-bottom: 30px;
        }
    }
`

const PageContentItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PageButtons = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 450px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        max-width: 280px;
    }
`

const Page1Button1 = styled.button`
    width: 200px;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    }

    img{
        width: 12px;
        height: 12px;
    }

    p{
        color: black;
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 38px;

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
    }
`

const Page1Button2 = styled.button`
    width: 200px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    padding: 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid white;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    img{
        width: 12px;
        height: 12px;
    }

    p{
        color: white;
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 38px;

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
    }
`

export default LandingPage1