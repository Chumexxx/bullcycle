import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import LegalNoticeHeader from '../Components/LegalNoticeHeader'
import LegalNoticeFooter from '../Components/LegalNoticeFooter'

const LegalNotice = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('terms')
  const [visibleSections, setVisibleSections] = useState(new Set(['terms']))
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleSectionClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['terms', 'privacy', 'risk', 'ai', 'intellectual', 'fraud']
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const sectionCenter = rect.top + (rect.height / 2)
          
          // Calculate distance from viewport center
          const distanceFromCenter = Math.abs(viewportCenter - sectionCenter)
          
          // Calculate opacity (1 when centered, fades to 0.3 as it moves away)
          // Using a smooth transition zone
          let opacity
          if (distanceFromCenter < viewportHeight * 0.3) {
            // Fully visible when close to center
            opacity = 1
          } else if (distanceFromCenter < viewportHeight * 0.8) {
            // Gradual fade
            opacity = 1 - ((distanceFromCenter - viewportHeight * 0.3) / (viewportHeight * 0.5)) * 0.7
          } else {
            // Minimum opacity
            opacity = 0.3
          }
          
          element.style.opacity = opacity
          
          // Update active section (the one closest to center and most visible)
          if (opacity > 0.7) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    // Only add scroll listener on mobile
    if (window.innerWidth <= 425) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
      
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      // Reset opacity on desktop
      const sections = ['terms', 'privacy', 'risk', 'ai', 'intellectual', 'fraud']
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.style.opacity = 1
        }
      })
    }
  }, [])

  return (
    <Wrapper>
      <LegalNoticeHeader />

      <PageContent>
        <Shortcuts>
            <h1>
                Terms & Condition
            </h1>

            <a href="#terms" onClick={() => setActiveSection('terms')}>Terms & Conditions</a>
            <a href="#privacy" onClick={() => setActiveSection('privacy')}>Privacy Policy</a>
            <a href="#risk" onClick={() => setActiveSection('risk')}>Risk Disclaimer</a>
            <a href="#ai" onClick={() => setActiveSection('ai')}>AI Use & Limitation Disclaimer</a>
            <a href="#intellectual" onClick={() => setActiveSection('intellectual')}>Intellectual Property Notice</a>
            <a href="#fraud" onClick={() => setActiveSection('fraud')}>Anti-Fraud & Security Notice</a>
        </Shortcuts>

        <FullTexts>
            <Terms id="terms">
                <Title>
                    <h1>
                        Terms & Conditions
                    </h1>

                    <p>
                        Last Updated: 2026
                    </p>
                </Title>

                <Content>
                    <p>
                        Welcome to Bullcycle. By accessing this website, you agree to the following terms:
                        <br /> <br />
                        <span style={{color: "#333232"}}>1. Use of Website</span> <br />
                        Bullcycle provides information about AI, blockchain, and digital innovation. Your use of the site is at your own risk.
                        <br />
                        <span style={{color: "#333232"}}>2. No Guarantees</span> <br />
                        All content is provided "as is." We do not guarantee accuracy, completeness, or system availability. <br />
                        <span style={{color: "#333232"}}>3. Intellectual Property</span> <br />
                        All text, graphics, branding, and product names (MedLedger AI, LearnLedger AI, Self ID, DEFi-Pay, etc.) belong to Bullcycle. You may not copy, reproduce, or misuse them. <br />
                        <span style={{color: "#333232"}}>4. User Conduct</span> <br />
                        You agree not to misuse the website, hack it, or violate any laws while using it. <br />
                        <span style={{color: "#333232"}}>5. Third-Party Links</span> <br />
                        We may link to external websites. Bullcycle is not responsible for their content or actions. <br />
                        <span style={{color: "#333232"}}>6. Changes to Terms</span> <br />
                        We may update these terms at any time. Continued use means you accept the updates. <br /> <br />

                        If you disagree with these terms, please stop using the website.
                    </p>
                </Content>

            </Terms>

            <Privacy id="privacy" >
                <Title>
                    <h1>
                        Privacy Policy
                    </h1>

                    <p>
                        Last Updated: 2026
                    </p>
                </Title>

                <Content>
                    <p>
                        Bullcycle respects your privacy. Information we collect includes: 
                        Basic analytics (browser, device, pages visited),
                        Email address (if you subscribe or contact us) <br /> <br />

                        <span style={{color: "#333232"}}>How We Use Information:</span> <br />
                        To improve our website, communicate updates, and provide a better user experience. <br />

                        <span style={{color: "#333232"}}>Data Sharing:</span> <br />
                        We do not sell your data. We may use trusted third-party tools (analytics, hosting providers). <br />

                        <span style={{color: "#333232"}}>Data Protection:</span> <br />
                        We use industry-standard security to protect information. <br />

                        <span style={{color: "#333232"}}>Your Rights:</span> <br />
                        You may request access, correction, or deletion of your information by contacting us. <br />
                        
                        <span style={{color: "#333232"}}>Cookies:</span> <br />
                        We use cookies for analytics and basic functionality. Using this website means you agree to this policy.
                    </p>

                </Content>

            </Privacy>

            <Risk id="risk">
                <Title>
                    <h1>
                        Risk Disclaimer
                    </h1>       
                </Title>

                <Content>
                    <p>
                        Bullcycle is an innovative AI and blockchain project. Nothing on this website should be considered: <br />
                        1. Financial advice <br />
                        2. Investment guidance <br />
                        3. Legal or tax advice <br />
                        4. A guarantee of future performance <br /> <br />

                        Crypto, blockchain, and AI technologies involve risk. Users should do their own research and make independent decisions.
                        Bullcycle is not responsible for any financial losses or misunderstandings.
                    </p>

                </Content>
            </Risk>

            <AI id="ai">
                <Title>
                    <h1>
                        AI Use & Limitation Disclaimer
                    </h1>       
                </Title>    

                <Content>
                    <p>
                        Bullcycle uses and discusses artificial intelligence technologies. AI outputs may sometimes be: <br />
                        1. Incomplete <br />
                        2. Imperfect <br />
                        3. Subject to errors <br />
                        4. Experimental <br /> <br />
                        AI should not replace professional advice in healthcare, law, finance, or safety.
                        Users must verify information independently.
                    </p>
                </Content>
            </AI>

            <Intellectual id="intellectual" >
                <Title>
                    <h1>
                        Intellectual Property Notice
                    </h1>       
                </Title>
                <Content>
                    <p>
                        All Bullcycle content: including text, ideas, branding, product names, frameworks, models, diagrams, and technology descriptions is the exclusive intellectual property of Bullcycle and its founders.
                        You may not copy, reproduce, resell, or modify Bullcycle materials without written permission.
                    </p>
                </Content>
            </Intellectual>

            <Anti id="fraud">
                <Title>
                    <h1>
                        Anti-Fraud & Security Notice
                    </h1>       
                </Title>
                <Content>
                    <p>
                        Bullcycle will never ask you for: <br />
                        • private keys <br />
                        • seed phrases <br />
                        • wallet passwords <br />
                        • sensitive personal data <br /> <br />

                        Beware of fake websites, impersonators, and fraudulent token launches.
                        Always verify official announcements through Bullcycle's official channels.
                    </p>
                </Content>
            </Anti>

        </FullTexts>

        <MobileMenuButton ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <p>Terms & Conditions</p>
          <Arrows>
            <Arrow>▲</Arrow>
            <Arrow>▼</Arrow>
          </Arrows>
        </MobileMenuButton>

        {isMenuOpen && (
          <MobileMenu ref={menuRef}>
            {activeSection === 'terms' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#terms" 
              $isActive={activeSection === 'terms'}
              onClick={() => handleSectionClick('terms')}
            >
              Terms & Conditions
            </MobileLink>

            {activeSection === 'privacy' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#privacy" 
              $isActive={activeSection === 'privacy'}
              onClick={() => handleSectionClick('privacy')}
            >
              Privacy Policy
            </MobileLink>

            {activeSection === 'risk' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#risk" 
              $isActive={activeSection === 'risk'}
              onClick={() => handleSectionClick('risk')}
            >
              Risk Disclaimer
            </MobileLink>

            {activeSection === 'ai' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#ai" 
              $isActive={activeSection === 'ai'}
              onClick={() => handleSectionClick('ai')}
            >
              AI Use & Limitation Disclaimer
            </MobileLink>

            {activeSection === 'intellectual' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#intellectual" 
              $isActive={activeSection === 'intellectual'}
              onClick={() => handleSectionClick('intellectual')}
            >
              Intellectual Property Notice
            </MobileLink>

            {activeSection === 'fraud' && <CurrentlyReading>Currently reading</CurrentlyReading>}
            <MobileLink 
              href="#fraud" 
              $isActive={activeSection === 'fraud'}
              onClick={() => handleSectionClick('fraud')}
            >
              Anti-Fraud & Security Notice
            </MobileLink>
          </MobileMenu>
        )}
      </PageContent>
      <FooterWrapper>
            <LegalNoticeFooter/>
        </FooterWrapper>
    </Wrapper>
  )
}

export default LegalNotice

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
     @media (max-width: 768px) {
        padding-bottom: 0px;
    }
`

const PageContent = styled.div`
    width: 90%;
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    margin-top: 50px;
    position: relative;

    @media (max-width: 1440px) {
        gap: 70px;
    }

    @media (max-width: 1024px) {
        gap: 60px;
    }

    @media (max-width: 768px) {
        gap: 50px;
    }

    @media (max-width: 480px) {
        gap: 40px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 0;
        padding-bottom: 80px;
    }

    @media (max-width: 320px) {
        padding-bottom: 70px;
    }
`

const Shortcuts = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    position: sticky;
    top: 100px;
    
    h1{
        font-family: 'Geist', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        color: #2400FF;
        margin-bottom: 10px;
    }

    a{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        text-decoration: none;
        color: #AFAFAF;
        transition: opacity 0.2s;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    @media (max-width: 1440px) {
        width: 280px;
        h1 {
            font-size: 19px;
        }
        a {
            font-size: 19px;
        }
    }

    @media (max-width: 1024px) {
        width: 260px;
        h1 {
            font-size: 18px;
        }
        a {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        width: 240px;
        h1 {
            font-size: 17px;
        }
        a {
            font-size: 17px;
        }
    }

    @media (max-width: 480px) {
        width: 220px;
        h1 {
            font-size: 16px;
        }
        a {
            font-size: 16px;
        }
    }

    @media (max-width: 425px) {
        display: none;
    }
`

const FullTexts = styled.div`
    flex: 1;
    max-width: 1100px;

    @media (max-width: 425px) {
        max-width: 100%;
        width: 100%;
    }
`

const SectionBase = styled.div`
    margin-bottom: 60px;
    transition: opacity 0.3s ease;

    @media (max-width: 1440px) {
        margin-bottom: 55px;
    }

    @media (max-width: 1024px) {
        margin-bottom: 50px;
    }

    @media (max-width: 768px) {
        margin-bottom: 45px;
    }

    @media (max-width: 480px) {
        margin-bottom: 40px;
    }

    @media (max-width: 425px) {
        margin-bottom: 35px;
        opacity: 1;
    }

    @media (max-width: 320px) {
        margin-bottom: 30px;
    }
`

const Terms = styled(SectionBase)``
const Privacy = styled(SectionBase)``
const Risk = styled(SectionBase)``
const AI = styled(SectionBase)``
const Intellectual = styled(SectionBase)``
const Anti = styled(SectionBase)``

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    
    h1{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 28px;
        line-height: 100%;
        color: #2400FF;
        margin: 0;
    }

    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: #777676;
        margin: 0;
    }

    @media (max-width: 1440px) {
        margin-bottom: 28px;
        h1 {
            font-size: 26px;
        }
        p {
            font-size: 19px;
        }
    }

    @media (max-width: 1024px) {
        margin-bottom: 26px;
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 24px;
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 17px;
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 22px;
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 425px) {
        margin-bottom: 20px;
        h1 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 320px) {
        margin-bottom: 18px;
        h1 {
            font-size: 16px;
        }
        p {
            font-size: 13px;
        }
    }
`

const Content = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 160%;
        color: #636161;
        margin: 0;
    }

    @media (max-width: 1440px) {
        p {
            font-size: 19px;
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
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
    }
`

const MobileMenuButton = styled.div`
    display: none;

    @media (max-width: 425px) {
        display: flex;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: white;
        border-radius: 8px;
        padding: 12px 16px;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;

        p {
            font-family: 'Geist', sans-serif;
            font-weight: 500;
            font-size: 14px;
            color: #2400FF;
            margin: 0;
        }
    }

    @media (max-width: 320px) {
        bottom: 15px;
        right: 15px;
        padding: 10px 14px;

        p {
            font-size: 13px;
        }
    }
`

const Arrows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Arrow = styled.span`
    font-size: 8px;
    color: #2400FF;
    line-height: 1;
`

const MobileMenu = styled.div`
    display: none;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 80px;
        right: 20px;
        background-color: #DBDBDD;
        border-radius: 12px;
        padding: 20px;
        gap: 15px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 999;
        max-width: 200px;
        width: calc(100% - 40px);
    }

    @media (max-width: 320px) {
        bottom: 70px;
        right: 15px;
        padding: 16px;
        gap: 12px;
        max-width: 250px;
    }
`

const CurrentlyReading = styled.p`
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #636262;
    margin: 0 0 -10px 0;
`

const MobileLink = styled.a`
    font-family: 'Geist', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    text-decoration: none;
    color: ${props => props.$isActive ? '#2400FF' : '#636161'};
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 320px) {
        font-size: 13px;
    }
`

const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 425px) {
        display: none;
    }
`