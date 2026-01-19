import React from 'react'
import styled from 'styled-components'
import gridbg from '../assets/gridbg.svg'
import crypto from '../assets/crypto.svg'
import document from '../assets/document.svg'
import intelligent from '../assets/intelligent.svg'
import virtue from '../assets/virtue.svg'

const Hero4 = () => {
    const cards = [
    {
      icon: <img src={crypto} alt="" />,
      title: 'Unity through Crypto',
      text: 'A borderless network that connects people beyond race, religion, or nationality. One people, one humanity'
    },
    {
      icon: <img src={document} alt="" />,
      title: 'Blockchain Transparency',
      text: 'Smart contracts and public ledgers that make justice programmable and corruption obsolete'
    },
    {
      icon: <img src={intelligent} alt="" />,
      title: 'Intelligent Systems',
      text: 'AI models that ensure fair distribution, accountability, and productivity-based growth'
    },
    {
      icon: <img src={virtue} alt="" />,
      title: 'Virtue-Based Stablecoins',
      text: 'Digital currencies tied to moral values like love & peace, not just on speculation'
    }
  ]

  return (
    <Wrapper>

        <PageContent>

            <Paragraph>
                <Paragraph1>
                    <p>
                        Our Approach
                    </p>

                    <h1>
                        HOW BULLCYCLE REBUILDS CIVILIZATION
                    </h1>

                </Paragraph1>


                <Paragraph2>
                    <p>
                        Bullcycle is more than a brand. It's a technology-driven ethical renaissance. A movement that redefines how innovation serves people, not power. <br />
                        We merge AI, blockchain, and crypto into a transparent and compassionate framework that restores fairness, unity, and trust in the systems that shape our world.
                    </p>

                </Paragraph2>

            </Paragraph>

            <Cards>
                {cards.map((card, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <Icon>{card.icon}</Icon>
                                <Title>{card.title}</Title>
                            </CardHeader>
                            <CardText>
                                {card.text}
                            </CardText>
                        </Card>
                    ))
                }
            </Cards>

        </PageContent>
      
    </Wrapper>
  )
}

export default Hero4

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: white;
    background-image: url(${gridbg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 425px) {
        height: auto;
        padding: 40px 0;
    }
`

const PageContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;

    @media (max-width: 1440px) {
        gap: 350px;
        padding: 0 40px;
    }

    @media (max-width: 1024px) {
        gap: 80px;
        padding: 0 30px;
    }

    @media (max-width: 768px) {
        gap: 60px;
        padding: 0 25px;
    }

    @media (max-width: 480px) {
        gap: 50px;
        padding: 0 20px;
    }

    @media (max-width: 425px) {
        gap: 40px;
        padding: 0 20px;
    }

    @media (max-width: 320px) {
        gap: 30px;
        padding: 0 15px;
    }
`

const Paragraph = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 1440px) {
        gap: 25px;
    }

    @media (max-width: 1024px) {
        gap: 20px;
    }

    @media (max-width: 768px) {
        gap: 18px;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    @media (max-width: 320px) {
        gap: 15px;
    }
`

const Paragraph1 = styled.div`
    width: 550px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: black;
    }

    h1{
        margin-top: 0%;
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: #2400FF;
    }

    @media (max-width: 1440px) {
        width: 480px;
        p {
            font-size: 18px;
        }
        h1 {
            font-size: 56px;
        }
    }

    @media (max-width: 1024px) {
        width: 400px;
        p {
            font-size: 16px;
        }
        h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 768px) {
        width: 320px;
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        width: 280px;
        p {
            font-size: 13px;
        }
        h1 {
            font-size: 36px;
        }
    }

    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 24px;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
        h1 {
            font-size: 24px;
        }
    }
`

const Paragraph2 = styled.div`
    width: 805px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
    }

    @media (max-width: 1440px) {
        width: 700px;
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
            font-size: 13px;
            line-height: 140%;
            text-align: center;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
    }
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;

    @media (max-width: 1440px) {
        gap: 18px;
    }

    @media (max-width: 1024px) {
        gap: 15px;
    }

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        background-color: #030013;
        border-radius: 16px;
        padding: 20px;
        gap: 15px;
        width: 90%;
    }

    @media (max-width: 320px) {
        padding: 15px;
        gap: 12px;
    }
`

const Card = styled.div`
    flex: 1;
    background-color: transparent;
    border-radius: 12px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(36, 0, 255, 0.2);
    }

    @media (max-width: 1440px) {
        padding: 25px;
    }

    @media (max-width: 1024px) {
        padding: 20px;
    }

    @media (max-width: 768px) {
        padding: 18px;
    }

    @media (max-width: 480px) {
        padding: 15px;
    }

    @media (max-width: 425px) {
        background-color: transparent;
        border: none;
        border-radius: 0;
        padding: 0;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }

    @media (max-width: 320px) {
        gap: 8px;
    }
`

const CardHeader = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;

    @media (max-width: 1440px) {
        gap: 9px;
    }

    @media (max-width: 1024px) {
        gap: 8px;
    }

    @media (max-width: 768px) {
        gap: 7px;
    }

    @media (max-width: 480px) {
        gap: 6px;
    }

    @media (max-width: 425px) {
        gap: 8px;
        flex-shrink: 0;
    }

    @media (max-width: 320px) {
        gap: 6px;
    }
`

const Icon = styled.div`
    img{
        width: 15px;
    }

    @media (max-width: 1440px) {
        img {
            width: 14px;
        }
    }

    @media (max-width: 1024px) {
        img {
            width: 13px;
        }
    }

    @media (max-width: 768px) {
        img {
            width: 12px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 11px;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 12px;
            filter: brightness(0) saturate(100%) invert(21%) sepia(97%) saturate(7495%) hue-rotate(250deg) brightness(94%) contrast(147%);
        }
    }

    @media (max-width: 320px) {
        img {
            width: 10px;
        }
    }
`

const Title = styled.p`
    font-family: 'Geist', Regular;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    color: #2400FF;
    margin: 0;

    @media (max-width: 1440px) {
        font-size: 14px;
    }

    @media (max-width: 1024px) {
        font-size: 13px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
        font-weight: 600;
    }

    @media (max-width: 320px) {
        font-size: 12px;
    }
`

const CardText = styled.p`
    font-family: 'Geist', Regular;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: black;
    margin: 0;

    @media (max-width: 1440px) {
        font-size: 14px;
    }

    @media (max-width: 1024px) {
        font-size: 13px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }

    @media (max-width: 425px) {
        color: white;
    }
`