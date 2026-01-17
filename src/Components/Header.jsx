import React, { useState } from 'react'
import bullcycle from '../assets/bullcycle.svg'
import styled from 'styled-components'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper>
        <HeaderDiv>
            <Logo>
                <img src={bullcycle} alt="BullCycle Logo" />
            </Logo>

            <Hamburger onClick={toggleMenu} $isOpen={isMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>

            <Tags $isOpen={isMenuOpen}>
                <CloseButton onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </CloseButton>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
                <a href="#ecosystem" onClick={() => setIsMenuOpen(false)}>Ecosystem</a>
                <a href="#whitepaper" onClick={() => setIsMenuOpen(false)}>Download Whitepaper</a>
            </Tags>
        
        </HeaderDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 30px;
    padding: 20px 50px;
    background-color: transparent;
    position: relative;

    @media (max-width: 1024px) {
        width: 85%;
        padding: 20px 30px;
    }

    @media (max-width: 768px) {
        width: 90%;
        padding: 15px 20px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px 15px;
    }
`

const Logo = styled.div`
    img{
        background-color: transparent;
        height: 30px;
        width: auto;
    }

    @media (max-width: 768px) {
        img {
            height: 25px;
        }
    }

    @media (max-width: 480px) {
        img {
            height: 20px;
        }
    }
`

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 1001;

    span {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 3px 0;
        transition: all 0.3s ease;
        border-radius: 3px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

const CloseButton = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 1002;

        span {
            position: absolute;
            width: 25px;
            height: 3px;
            background-color: black;
            border-radius: 3px;
            top: 50%;
            left: 50%;

            &:nth-child(1) {
                transform: translate(-50%, -50%) rotate(45deg);
            }

            &:nth-child(2) {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
        }
    }
`

const Tags = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    
    a{
        font-family: 'Geist', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        text-decoration: none;
        color: white;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }

    @media (max-width: 1024px) {
        width: 40%;
        
        a {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        height: auto;
        width: 60%;
        max-width: 250px;
        background-color: #dbd3d3;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        gap: 30px;
        padding: 80px 30px 40px 30px;
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease;
        z-index: 1000;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 20px;

        a {
            font-size: 16px;
            color: black;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    @media (max-width: 480px) {
        width: 70%;
        max-width: 220px;
        padding: 70px 25px 35px 25px;
        gap: 25px;

        a {
            font-size: 15px;
        }
    }
`

export default Header