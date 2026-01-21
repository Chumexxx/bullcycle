import React from 'react'
import styled from 'styled-components'
import globe from '../assets/globe.svg'
import bullcycle from '../assets/bullcycle.svg'
import emailblack from '../assets/emailblack.svg'

const Footer = () => {
  return (
    <Wrapper>

        <PageContent>
            <LeftDiv>
                <Image>
                    <img src={bullcycle} alt="" />
                </Image>

                <Paragraph>
                    <p>
                        Join an ecosystem rooted in purpose, transparency, and innovation. A comprehensive ecosystem leveraging blockchain, AI, ethics, and next-generation finance to restore the human way of living
                    </p>
                </Paragraph>    

                <ButtonDiv>
                    <p>
                        Want to leave feedback?
                    </p>
                    <a href="mailto:bullcycle070@gmail.com">
                        <button>
                            <img src={emailblack} alt="" />
                            <p>Send us an email</p>
                        </button>
                    </a>
                </ButtonDiv>

            </LeftDiv>

            <RightDiv>
                <Quicklinks>
                    <ul>
                        <a href="#"><p><li>About Us</li></p></a>
                        <a href="#"><p><li>Ecosystem</li></p></a>
                        <a href="#"><p><li>Whitepaper</li></p></a>
                    </ul>

                    <ul>
                        <a href="#"><p><li>Legal Notices</li></p></a>
                        <a href="#"><p><li>Privacy Poilcy</li></p></a>
                        <a href="#"><p><li>AI Use & Limitation</li></p></a>
                        <li><p style={{color: "#2400FF"}}>2026. All Rights Reserved</p></li>
                        {/* <li><p style={{color: "#333232"}}>Designed by Ey</p></li> */}
                    </ul>
                </Quicklinks>

            </RightDiv>
        </PageContent>
      
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
    margin-top: 60px;
    height: 50vh;
    width: 90%;
    background-color: white;
    border-radius: 20px;
    background-image: url(${globe});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PageContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`

const LeftDiv = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.div`
    
`

const Paragraph = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 450;
        font-size: 16px;
        line-height: 140%;
        color: #333232;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
    }
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #333232;
    }
    button{
        width: 220px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 2px solid #2400FF;
        border-radius: 10px;
        padding: 10px;
        gap: 12px;

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: #333232;
        }
    }
`

const Quicklinks = styled.div`
    display: flex;
    flex-direction: row;
    ul{
        a{
            text-decoration: none;
        }
        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: #333232;
        }
        li{
            list-style-type: none;
            padding: 20px;
            margin: 0%;
        }
    }
`