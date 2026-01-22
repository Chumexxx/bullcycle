import React, { useState, useEffect, useRef } from 'react'
import bullcycle from '../assets/bullcycle.svg'
import styled from 'styled-components'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <Wrapper>
        <HeaderDiv>
            <Logo>
                <img src={bullcycle} alt="BullCycle Logo" />
            </Logo>

            <Hamburger ref={hamburgerRef} onClick={toggleMenu} $isOpen={isMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>

            <Tags ref={menuRef} $isOpen={isMenuOpen}>
                <CloseButton onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </CloseButton>
                <a onClick={() => scrollToSection('hero3')}>About Us</a>
                <a onClick={() => scrollToSection('hero5')}>Ecosystem</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>Download Whitepaper</a>
            </Tags>
        
        </HeaderDiv>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    @media (max-width: 768px) {
        margin-top: 20px;
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

    @media (max-width: 2560px) {
        width: 85%;
        padding: 20px 30px;
    }

    @media (max-width: 1440px) {
        width: 85%;
        padding: 20px 30px;
    }

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
        height: 70px;
        width: auto;
    }

    @media (max-width: 2560px) {
        img {
            height: 100px;
        }
    }

    @media (max-width: 1440px) {
        img {
            height: 100px;
        }
    }

    @media (max-width: 1024px) {
        img {
            height: 100px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 70px;
        }
    }

    @media (max-width: 480px) {
        img {
            height: 50px;
        }
    }

    @media (max-width: 425px) {
        img {
            height: 50px;
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
        display: ${props => props.$isOpen ? 'none' : 'flex'};
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
    width: 400px;
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

    @media (max-width: 900px) {
        width: 350px;
        
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
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        gap: 30px;
        padding: 30px 65px 35px 25px;
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
        padding: 30px 65px 35px 25px;
        gap: 25px;

        a {
            font-size: 15px;
        }
    }
`