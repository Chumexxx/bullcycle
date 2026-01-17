import React from 'react'
import styled from 'styled-components'

const Hero3 = () => {
  return (
    <Wrapper>
        <PageContent>
            <Paragraph1>
                <p>The Solution</p>

                <h1>
                    WE ARE THE SOLUTION. <br /> BUT, WHO ARE "WE" REALLY?
                </h1>

            </Paragraph1>

            <Paragraph2>
                <p>
                    Bullcycle was founded on a simple yet radical belief, that technology is not just a tool for profit, but a divine instrument for progress.In an age where innovation races ahead of wisdom, Bullcycle stands at the intersection of AI, blockchain, and moral intelligence, building systems that serve humanity with fairness, transparency, and compassion. <br />
                    We see the world not as markets or data points, but as a living network of human potential. Every person, every community, every act of kindness is a node in the greater system of creation — and our goal is to reconnect those nodes with trust.
                </p>
            </Paragraph2>

            <Paragraph3>
                <Mission>
                    <h1>
                        OUR MISSION
                    </h1>

                    <p>
                        To merge ethical purpose with digital power, creating technologies that empower rather than exploit.  We are designing a new operating system for humanity, one where value flows toward justice, sustainability, and shared prosperity.
                    </p>

                </Mission>

                <Line>
                    <hr />
                </Line>

                <Vision>
                    <h1>
                        OUR VISION
                    </h1>

                    <p>
                        A civilization where AI learns wisdom, not just data; blockchain builds trust, not control; wealth is measured not by accumulation, but by alignment between people, planet, and purpose. 
                        We call this movement The Bullcycle.
                    </p>
                </Vision>

            </Paragraph3>
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

    @media (max-width: 2560px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 425px) {
        height: auto;
    }
`

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 100px;

    @media (max-width: 1440px) {
        padding: 90px;
    }

    @media (max-width: 1024px) {
        padding: 70px;
    }

    @media (max-width: 768px) {
        padding: 50px;
    }

    @media (max-width: 480px) {
        padding: 40px;
    }

    @media (max-width: 425px) {
        padding: 30px;
        align-items: center;
    }

    @media (max-width: 320px) {
        padding: 20px;
    }
`

const Paragraph1 = styled.div`
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: white;
    }

    h1{
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: white;
        margin-top: 0%;
    }

    @media (max-width: 1440px) {
        p {
            font-size: 18px;
        }
        h1 {
            font-size: 56px;
        }
    }

    @media (max-width: 1024px) {
        p {
            font-size: 16px;
        }
        h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 13px;
        }
        h1 {
            font-size: 36px;
        }
    }

    @media (max-width: 425px) {
        text-align: center;
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 20px;
            br {
                display: none;
            }
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
        h1 {
            font-size: 28px;
        }
    }
`

const Paragraph2 = styled.div`
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: white;
    }

    @media (max-width: 1440px) {
        p {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) {
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        text-align: center;
        p {
            text-align: left;
            font-size: 14px;
            line-height: 140%;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
    }
`

const Paragraph3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 150px;
    margin-top: 100px;

    @media (max-width: 1440px) {
        gap: 120px;
        margin-top: 90px;
    }

    @media (max-width: 1024px) {
        gap: 100px;
        margin-top: 70px;
    }

    @media (max-width: 768px) {
        gap: 80px;
        margin-top: 60px;
    }

    @media (max-width: 480px) {
        gap: 60px;
        margin-top: 50px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        position: relative;
        height: 450px;
        width: 100%;
    }

    @media (max-width: 320px) {
        height: 450px;
    }
`

const Mission = styled.div`
    h1{
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 32px;
        line-height: 100%;
        color: white;
    }
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: white;
        margin-top: 0%;
        text-align: left;
    }
    @media (max-width: 1440px) {
        h1 {
            font-size: 28px;
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 1024px) {
        h1 {
            font-size: 26px;
        }
        p {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 480px) {
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 425px) {
        position: absolute;
        bottom: 80px;
        left: 7%;
        background-color: rgba(255, 255, 255, 0.11);
        border: 2px solid #2400FF;
        border-radius: 12px;
        padding: 5px;
        width: 40%;
        max-width: 180px;
        transform: rotate(-10deg);
        transform-origin: bottom right;
        z-index: 1;
        h1 {
            color: #2400FF;
            font-size: 24px;
        }
        p {
            color: white;
            text-align: left;
            line-height: 140%;
            font-size: 12px;
        }
    }
    @media (max-width: 320px) {
        width: 45%;
        max-width: 160px;
        left: 2%;
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 11px;
        }
    }
`

const Vision = styled.div`
    h1{
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 32px;
        line-height: 100%;
        color: white;
    }
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%;
        color: white;
        margin-top: 0%;
        text-align: left;
    }
    @media (max-width: 1440px) {
        h1 {
            font-size: 28px;
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 1024px) {
        h1 {
            font-size: 26px;
        }
        p {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 480px) {
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 14px;
        }
    }
    @media (max-width: 425px) {
        position: absolute;
        bottom: 80px;
        right:7%;
        background-color: rgba(255, 255, 255, 0.11);
        border: 2px solid #2400FF;
        border-radius: 12px;
        padding: 5px;
        width: 40%;
        max-width: 180px;
        transform: rotate(10deg);
        transform-origin: bottom left;
        z-index: 2;
        h1 {
            color: #2400FF;
            font-size: 24px;
        }
        p {
            color: white;
            text-align: left;
            line-height: 140%;
            font-size: 12px;
        }
    }
    @media (max-width: 320px) {
        width: 45%;
        max-width: 160px;
        right: 2%;
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 11px;
        }
    }
`

const Line = styled.div`
    hr{
        width: 2px;
        height: 200px;
        background-color: #2400FF;
        border: none;
    }

    @media (max-width: 1440px) {
        hr {
            height: 180px;
        }
    }

    @media (max-width: 1024px) {
        hr {
            height: 180px;
        }
    }

    @media (max-width: 768px) {
        hr {
            height: 200px;
        }
    }

    @media (max-width: 480px) {
        hr {
            height: 120px;
        }
    }

    @media (max-width: 425px) {
        display: none;
    }
`

export default Hero3