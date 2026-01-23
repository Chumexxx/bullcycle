import React from 'react'
import styled from 'styled-components'
import globe from '../assets/globe.svg'
import bullcycle from '../assets/bullcycle.svg'
import emailblack from '../assets/emailblack.svg'
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
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
                <Image>
                    <img src={bullcycle} alt="bullcycle logo" />
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
                            <img src={emailblack} alt="email icon" />
                            <p>Send us an email</p>
                        </button>
                    </a>
                </ButtonDiv>

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
                        <li><p id='all' style={{color: "#2400FF"}}>2026. All Rights Reserved</p></li> 
                        {/* <li><p style={{color: "#333232"}}>Designed by Ey</p></li> */} 
                    </ul>
                </Quicklinks>
            </RightDiv>

            <NextDiv>
                <p>
                    Want to leave feedback?

                <a href="mailto:bullcycle070@gmail.com">
                    <span style={{color: "#2400FF"}}> Send us a message</span>
                </a>
                </p>
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

export default Footer

const Wrapper = styled.div`
    margin-top: 60px;
    padding-top: 50px;
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
        color: #333232;
    }

    @media (max-width: 1024px) {
        p{
        font-family: 'Geist', sans-serif;
        font-weight: 350;
        font-size: 12px;
        line-height: 120%;
        color: #333232;
        }
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
        border-radius: 10px;
        padding: 10px;
        gap: 12px;
        border: 2px solid #2400FF;
        transition: all 0.2s;

        &:hover {
            transform: scale(1.05);
            }

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: #333232;
        }
    }

    @media (max-width: 1024px) {
        p{
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        color: #333232;
        }
        button{
            width: 150px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border-radius: 10px;
            padding: 10px;
            gap: 8px;

            p{
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 12px;
                line-height: 100%;
                color: #333232;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
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
            color: #333232;
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
                color: #333232;
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
                color: #333232;
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
                    color: #333232;
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
                    color: #333232;
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
            color: #333232;
        }
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

