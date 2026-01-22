import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import lovecoin from '../assets/lovecoin.svg'
import joycoin from '../assets/joycoin.svg'
import peacecoin from '../assets/peacecoin.svg' 
import faithfulnesscoin from '../assets/faithfulnesscoin.svg'
import gentlenesscoin from '../assets/gentlenesscoin.svg'
import patiencecoin from '../assets/patiencecoin.svg'
import kindnesscoin from '../assets/kindnesscoin.svg'
import goodnesscoin from '../assets/goodnesscoin.svg'
import selfcontrolcoin from '../assets/selfcontrolcoin.svg'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'

const Hero5 = () => {
    const scrollRef = useRef(null)
    const autoScrollInterval = useRef(null)
    const scrollDirection = useRef(1)

    const coins = [
        {
          coin: <img src={lovecoin} alt="coin" />,
          title: 'LOVECOIN',
        },
        {
          coin: <img src={joycoin} alt="coin" />,
          title: 'JOYCOIN',
        },
        {
          coin: <img src={faithfulnesscoin} alt="coin" />,
          title: 'FAITHFULNESSCOIN',
        },
        {
          coin: <img src={selfcontrolcoin} alt="coin" />,
          title: 'SELFCONTROLCOIN',
        },
        {
          coin: <img src={goodnesscoin} alt="coin" />,
          title: 'GOODNESSCOIN',
        },
        {
          coin: <img src={patiencecoin} alt="coin" />,
          title: 'PATIENCECOIN',
        },
        {
          coin: <img src={kindnesscoin} alt="coin" />,
          title: 'KINDNESSCOIN',
        },
        {
          coin: <img src={gentlenesscoin} alt="coin" />,
          title: 'GENTLENESSCOIN',
        },
        {
          coin: <img src={peacecoin} alt="coin" />,
          title: 'PEACECOIN',
        },
    ] 

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
    }

    // Auto-scroll functionality for mobile with bidirectional scrolling
    useEffect(() => {
        const startAutoScroll = () => {
            if (window.innerWidth <= 425 && scrollRef.current) {
                autoScrollInterval.current = setInterval(() => {
                    if (scrollRef.current) {
                        const scrollContainer = scrollRef.current
                        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
                        const currentScroll = scrollContainer.scrollLeft
                        
                        // Check if we've reached the end (right side)
                        if (currentScroll >= maxScroll - 5) {
                            scrollDirection.current = -1 // Change direction to left
                        }
                        // Check if we've reached the beginning (left side)
                        else if (currentScroll <= 5) {
                            scrollDirection.current = 1 // Change direction to right
                        }
                        
                        // Scroll in the current direction
                        scrollContainer.scrollBy({ 
                            left: scrollDirection.current * 1, 
                            behavior: 'auto' 
                        })
                    }
                }, 0) // Scroll every 20ms for smooth continuous motion
            }
        }

        const stopAutoScroll = () => {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current)
                autoScrollInterval.current = null
            }
        }

        // Start auto-scroll on mobile
        startAutoScroll()

        // Stop auto-scroll when user interacts
        const handleTouchStart = () => {
            stopAutoScroll()
        }

        const handleTouchEnd = () => {
            setTimeout(startAutoScroll, 20) // Resume after 2 seconds of no interaction
        }

        const handleScroll = () => {
            // If user is manually scrolling, stop auto-scroll temporarily
            if (autoScrollInterval.current) {
                stopAutoScroll()
                setTimeout(startAutoScroll, 20) // Resume after 2 seconds
            }
        }

        const scrollContainer = scrollRef.current

        if (scrollContainer) {
            scrollContainer.addEventListener('touchstart', handleTouchStart)
            scrollContainer.addEventListener('touchend', handleTouchEnd)
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
        }

        // Cleanup
        return () => {
            stopAutoScroll()
            if (scrollContainer) {
                scrollContainer.removeEventListener('touchstart', handleTouchStart)
                scrollContainer.removeEventListener('touchend', handleTouchEnd)
                scrollContainer.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

  return (
    <Wrapper id="hero5">

        <PageContent>

            <Paragraphs>
                <Paragraph1>
                    <h1>
                        THE FRUITS OF THE <br /> SPIRIT ECONOMY
                    </h1>
                </Paragraph1>

                <Paragraph2>
                    <p>
                        Bullcycle introduces the world's first Virtue-Based hybrid confidential Stablecoins, digital currencies inspired by the nine Fruits of the Spirit. Each coin embodies a timeless human value: <br /> <span style={{color: '#2400FF'}}>Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, Self-Control.</span> 
                        <br /> <br />
                        These are not tokens for speculation, but currencies for restoration designed to fund peacebuilding, reward generosity, and cultivate self-discipline in the global economy.
                    </p>
                </Paragraph2>
            </Paragraphs>

            <CoinsSection>
                <Navigations>
                    <img src={leftarrow} alt="Left Arrow" onClick={scrollLeft} />
                    <img src={rightarrow} alt="Right Arrow" onClick={scrollRight} />
                </Navigations>
                
                <Coins ref={scrollRef}>
                    {coins.map((card, index) => (
                            <Coin key={index}>
                                <Image>{card.coin}</Image>
                                <Title>{card.title}</Title>
                            </Coin>
                        ))
                    }
                </Coins>
            </CoinsSection>
            
        </PageContent>
      
    </Wrapper>
  )
}

export default Hero5

const Wrapper = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #030013;
    overflow: hidden;

    @media (max-width: 425px) {
        height: auto;
        padding: 40px 0;
    }
`

const PageContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    @media (max-width: 1440px) {
        gap: 45px;
    }

    @media (max-width: 1024px) {
        gap: 40px;
    }

    @media (max-width: 768px) {
        gap: 35px;
    }

    @media (max-width: 480px) {
        gap: 30px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 40px;
    }

    @media (max-width: 320px) {
        gap: 30px;
    }
`

const Paragraphs = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1440px) {
        gap: 18px;
    }

    @media (max-width: 1024px) {
        gap: 16px;
    }

    @media (max-width: 768px) {
        gap: 14px;
    }

    @media (max-width: 480px) {
        gap: 12px;
    }

    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
        gap: 15px;
    }

    @media (max-width: 320px) {
        gap: 12px;
    }
`

const Paragraph1 = styled.div`
    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: white;
        margin: 0;
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 56px;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 36px;
        }
    }

    @media (max-width: 425px) {
        h1 {
            font-size: 24px;
            br {
                display: none;
            }
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 28px;
        }
    }
`

const Paragraph2 = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: white;
        margin: 0;
        text-align: left;
    }

    @media (max-width: 1440px) {
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 1024px) {
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 13px;
        }
    }

    @media (max-width: 425px) {
        p {
            font-size: 12px;
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

const CoinsSection = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1440px) {
        gap: 18px;
    }

    @media (max-width: 1024px) {
        gap: 16px;
    }

    @media (max-width: 768px) {
        gap: 14px;
    }

    @media (max-width: 480px) {
        gap: 12px;
    }

    @media (max-width: 425px) {
        width: 100%;
        gap: 15px;
    }

    @media (max-width: 320px) {
        gap: 12px;
    }
`

const Navigations = styled.div`
    display: flex;
    gap: 20px;
    justify-content: right;
    align-items: center;
    
    img {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }

    @media (max-width: 1440px) {
        img {
            width: 38px;
            height: 38px;
        }
    }

    @media (max-width: 1024px) {
        gap: 18px;
        img {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 768px) {
        gap: 16px;
        img {
            width: 34px;
            height: 34px;
        }
    }

    @media (max-width: 480px) {
        gap: 14px;
        img {
            width: 32px;
            height: 32px;
        }
    }

    @media (max-width: 425px) {
        display: none;
    }
`

const Coins = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    padding: 10px 0;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-width: 1440px) {
        gap: 18px;
    }

    @media (max-width: 1024px) {
        gap: 16px;
    }

    @media (max-width: 768px) {
        gap: 14px;
    }

    @media (max-width: 480px) {
        gap: 12px;
    }

    @media (max-width: 425px) {
        gap: 15px;
        padding: 10px 0;
    }

    @media (max-width: 320px) {
        gap: 12px;
    }
`

const Coin = styled.div`
    min-width: 192px;
    height: 200px;
    background-color: #303031;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    flex-shrink: 0;

    @media (max-width: 1440px) {
        min-width: 180px;
        height: 190px;
    }

    @media (max-width: 1024px) {
        min-width: 170px;
        height: 180px;
    }

    @media (max-width: 768px) {
        min-width: 160px;
        height: 170px;
    }

    @media (max-width: 480px) {
        min-width: 150px;
        height: 160px;
    }

    @media (max-width: 425px) {
        min-width: 80px;
        height: 100px;
    }

    @media (max-width: 320px) {
        min-width: 80px;
        height: 100px;
    }
`

const Image = styled.div`
    img{
        width: 190px;
        height: 130px;
        border-radius: 5px;
    }

    @media (max-width: 1440px) {
        img {
            width: 178px;
            height: 125px;
        }
    }

    @media (max-width: 1024px) {
        img {
            width: 168px;
            height: 120px;
        }
    }

    @media (max-width: 768px) {
        img {
            width: 158px;
            height: 110px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 148px;
            height: 105px;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 100px;
            height: 70px;
        }
    }

    @media (max-width: 320px) {
        img {
            width: 100px;
            height: 70px;
        }
    }
`

const Title = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 100%;
    color: white;
    margin-bottom: 0px;

    @media (max-width: 1440px) {
        font-size: 23px;
    }

    @media (max-width: 1024px) {
        font-size: 21px;
    }

    @media (max-width: 768px) {
        font-size: 19px;
    }

    @media (max-width: 480px) {
        font-size: 17px;
    }

    @media (max-width: 425px) {
        font-size: 15px;
    }

    @media (max-width: 320px) {
        font-size: 15px;
    }
`