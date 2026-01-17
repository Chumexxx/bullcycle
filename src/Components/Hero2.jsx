import React from 'react'
import styled from 'styled-components'
import chain from '../assets/chain.svg'
import gridbg from '../assets/gridbg.svg'

const Hero2 = () => {
  return (
    <Wrapper>
        <PageContent>
            <Paragraphs>
                <ProblemParagraph>
                    <p>The problem</p>
                    <h4>
                        OUR TOOLS ARE EVOLVING FASTER THAN OUR VALUES
                    </h4>
                </ProblemParagraph>

                <ExplanationParagraph>
                    <p>
                        We live in an age of paradox where we are <span style={{ color: "#2400FF" }}>hyper-connected, yet divided</span>.  Digitally rich but morally bankrupt. Money moves faster than ever, yet poverty deepens. Artificial Intelligence is learning rapidly, but wisdom hasn't kept pace. 
                        <br /> <br />
                        The world doesn't just need better technology. It needs a new moral architecture, a new operating system for humanity. <span style={{ color: "#2400FF" }}>That's where we come in</span>
                    </p>

                </ExplanationParagraph>
            </Paragraphs>

            <img src={chain} alt="" />

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
    overflow: hidden;
    background-color: white;
    background-image: url(${gridbg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 425px) {
        height: auto;
    }
`

const PageContent = styled.div`
    margin-top: 150px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    img{
        width: 800px;
    }

    @media (max-width: 1440px) {
        margin-top: 120px;
        gap: 45px;
        img {
            width: 700px;
        }
    }

    @media (max-width: 1024px) {
        margin-top: 100px;
        gap: 40px;
        img {
            width: 600px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 80px;
        gap: 35px;
        img {
            width: 500px;
        }
    }

    @media (max-width: 480px) {
        margin-top: 60px;
        gap: 30px;
        img {
            width: 400px;
        }
    }

    @media (max-width: 425px) {
        margin-top: 50px;
        width: 90%;
        gap: 25px;
        img {
            width: 100%;
            max-width: 350px;
        }
    }

    @media (max-width: 320px) {
        margin-top: 40px;
        gap: 20px;
        img {
            max-width: 280px;
        }
    }
`

const Paragraphs = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 20px;
    }
`

const ProblemParagraph = styled.div`
    width: 550px;
    height: 154px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: black;
    }

    h4{
        margin-top: 0%;
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: #2400FF;
    }

    @media (max-width: 1440px) {
        width: 480px;
        height: auto;
        p {
            font-size: 18px;
        }
        h4 {
            font-size: 56px;
        }
    }

    @media (max-width: 1024px) {
        width: 400px;
        p {
            font-size: 16px;
        }
        h4 {
            font-size: 48px;
        }
    }

    @media (max-width: 768px) {
        width: 320px;
        p {
            font-size: 14px;
        }
        h4 {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        width: 280px;
        p {
            font-size: 13px;
        }
        h4 {
            font-size: 36px;
        }
    }

    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
        p {
            font-size: 14px;
        }
        h4 {
            font-size: 24px;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
        h4 {
            font-size: 28px;
        }
    }
`

const ExplanationParagraph = styled.div`
    width: 805px;
    height: 205px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
    }

    @media (max-width: 1440px) {
        width: 700px;
        height: auto;
        p {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) {
        width: 550px;
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        width: 450px;
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        width: 380px;
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
        p {
            font-size: 12px;
            line-height: 140%;
            text-align: justify
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
    }
`

export default Hero2