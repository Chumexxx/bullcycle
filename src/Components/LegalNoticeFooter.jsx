import React from 'react'
import styled from 'styled-components'
import globe from '../assets/globe.svg'
import bullcycle from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';

const LegalNoticeFooter = () => {

    const navigate = useNavigate()

    const handleNavigateToSection = (sectionId) => {
        navigate('/')
        setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        }, 100)
    }

    const handleLegalSection = (sectionId) => {
        navigate('/legal-notice')
        setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        }, 100)
    }
  return (
    <Wrapper>

        <PageContent>
            <LeftDiv>
                <Image onClick={() => handleNavigateToSection('hero1')}>
                    <img src={bullcycle} alt="bullcycle logo" />
                </Image>

                <Paragraph>
                    <p>
                        Join an ecosystem rooted in purpose, transparency, and innovation. A comprehensive ecosystem leveraging blockchain, AI, ethics, and next-generation finance to restore the human way of living
                    </p>
                </Paragraph>

                <All1>
                    <p>
                        2026. All Rights Reserved
                    </p>
                </All1>

            </LeftDiv>

            <RightDiv>
                <Quicklinks> 
                    <ul> 
                        <a onClick={() => handleNavigateToSection('hero3')}><p><li>About Us</li></p></a>
                        <a onClick={() => handleNavigateToSection('hero5')}><p><li>Ecosystem</li></p></a> 
                        <a href="#"><p><li>Whitepaper</li></p></a> 
                    </ul> 
                    <ul>
                        <Link to="/legal-notice"> <p><li>Legal Notices</li></p> </Link> 
                        <a onClick={() => handleLegalSection('privacy')}><p><li>Privacy Poilcy</li></p></a> 
                        <a onClick={() => handleLegalSection('ai')}><p><li>AI Use & Limitation</li></p></a> 
                        {/* <li><p style={{color: "white", fontSize: "10px"}}>Designed by Ey</p></li>  */}
                    </ul>
                </Quicklinks>
            </RightDiv>

            <NextDiv>
                <p>
                    Want to leave feedback?
                </p>
                <a href="mailto:bullcycle070@gmail.com">
                    <p> <span style={{color: "#2400FF"}}>Send us a message</span></p>
                </a>
            </NextDiv>
            <All>
                <p>
                    2026. All Rights Reserved.
                </p>
            </All>
        </PageContent>
      
    </Wrapper>
  )
}

export default LegalNoticeFooter

const Wrapper = styled.div`
    margin-top: 60px;
    padding-top: 50px;
    width: 90%;
    background-color: #030013;
    border-radius: 20px;
    background-image: url(${globe});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0%;
    }
`

const PageContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const LeftDiv = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 120px;
    }
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;

    @media (max-width: 768px) {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

const Image = styled.div`
    cursor: pointer;

    img{
        animation: heartbeat 1.6s ease-in-out infinite;
        transform-origin: center center;
        will-change: transform;
    }

    @keyframes heartbeat {
        0%, 100% {
            transform: scale(1);
        }
        10% {
            transform: scale(1.02); /* Tiny prep for realism */
        }
        20% {
            transform: scale(1.15); /* Strong pump – this is where it grows noticeably larger */
        }
        35% {
            transform: scale(1.08); /* Quick settle after first beat */
        }
        45% {
            transform: scale(1.12); /* Softer second beat – still grows, but less intense */
        }
        60% {
            transform: scale(1);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @media (max-width: 1024px) {
        img{
            width: 100px;
        }
    }
`

const Paragraph = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 450;
        font-size: 16px;
        line-height: 140%;
        color: white;
    }

    @media (max-width: 1024px) {
        p{
        font-family: 'Geist', sans-serif;
        font-weight: 350;
        font-size: 12px;
        line-height: 120%;
        color: white;
        }
    }
    
`

const Quicklinks = styled.div` 
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-end; 
    ul{ 
        a{ 
            text-decoration: none; 
            cursor: pointer;
        } 
        p{ 
            font-family: 'Geist', sans-serif; 
            font-weight: 600; 
            font-size: 18px; 
            line-height: 100%; 
            color: white;
            white-space: nowrap;
        } 
        li{ 
            list-style-type: none; 
            padding: 20px; 
            margin: 0%; 
        } 
    }

    @media (max-width: 1024px) {
        ul{
            a{
                text-decoration: none;
                cursor: pointer;
            }
            p{
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 100%;
                color: white;
                white-space: nowrap;
            }
            li{
                list-style-type: none;
                padding: 15px;
                margin: 0%;
            }
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        ul{
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            padding: 0;
            margin: 0;
            
            a{
                text-decoration: none;
                cursor: pointer;
            }
            p{
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 12px;
                line-height: 100%;
                color: white;
                white-space: nowrap;
            }
            li{
                list-style-type: none;
                margin: 0;
            }
            #all{
                display: none;
            }
        }

        @media (max-width: 480px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            ul{
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                padding: 0;
                margin: 0;
                
                a{
                    text-decoration: none;
                    cursor: pointer;
                }
                p{
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 50%;
                    color: white;
                    white-space: nowrap;
                }
                li{
                    list-style-type: none;
                    margin: 0;
                }
                #all{
                    display: none;
                }
            }
        }

        @media (max-width: 425px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            ul{
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                padding: 0;
                margin: 0;
                
                a{
                    text-decoration: none;
                    cursor: pointer;
                }
                p{
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 50%;
                    color: white;
                    white-space: nowrap;
                }
                li{
                    list-style-type: none;
                    margin: 0;
                }
                #all{
                    display: none;
                }
            }
        }
    }
`

const NextDiv = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 100%;
            color: white;
        }
    }

`

const All1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
     p{
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        color: #2400FF;
    }

    @media (max-width: 768px) {
        display: none;
    }

`

const All = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 100%;
            color: #2400FF;
        }
    }

`