import React from 'react'
import styled from 'styled-components'
import bull from '../assets/bull.svg'
import leader1 from '../assets/leader1.svg'
import leader2 from '../assets/leader2.svg'
import leader3 from '../assets/leader3.svg'
import email from '../assets/email.svg'
import Footer from './Footer'

const Hero7 = () => {
  return (
    <Wrapper>
        <PageContent>
            <Section1>
                <img src={bull} alt="" />

                <Paragraph1>
                    <h1>
                        BULLCYCLE AI & MEME COIN
                    </h1>
                    <p>
                        Bullcycle AI & Meme Coin is a cutting-edge cryptocurrency designed for savvy investors who are bullish on the crypto market. With its advanced trading
                        algorithms and market analytics, the Bull Cycle Token helps users navigate
                        the ups and downs of the crypto market with confidence and precision. It's like having a personal bull whisperer in your crypto portfolio. Get ready to
                        charge ahead with the Bull Cycle Token!
                    </p>
                </Paragraph1>
            </Section1>

            <Section2>
                <Paragraph2>
                    <p>
                        About the Founder
                    </p>

                    <h1>
                        THE VISIONARY BEHIND <br />THE MOVEMENT
                    </h1>

                </Paragraph2>

                <Images>
                    <img src={leader1} alt="" />
                    <img src={leader2} alt="" />
                    <img src={leader3} alt="" />
                </Images>

            </Section2>
            <Section3>
                <Paragraph3>
                    <p>
                        <span style={{color: "#2400FF"}}>Emmanuel Obinna Chibuike</span> is a Nigerian-born visionary entrepreneur, creative strategist, author, and digital finance innovator redefining the future of blockchain, 
                        AI, and ethical technology through the Bullcycle Ecosystem. A mission-driven platform designed to restore balance, transparency, and integrity to global digital finance. <br /> <br />

                        Hails from Agbo Emede Ibeku, born in Amuzukwu Ibeku, Umuahia, and raised between Umuahia and Enugu, Emmanuel’s journey began at his mother’s printing press,
                         where he learned early the disciplines of precision, creativity, and mechanical problem-solving. This foundation shaped the systems-thinking mindset that guides his work today. <br /> <br />

                        He attended Ebenezer Nursery and Primary School, continued to Federal Government College Ohafia (2012–2018), and earned his LL.B. in Law from Abia State University (2018–2024). 
                        At ABSU, he served on the Editorial Board and served as President Umuahia Students Association, Umuahia campus chapter (2023), strengthening his leadership and communication capabilities. <br /> <br />

                        Emmanuel’s creative path also includes drama directing (in 2020) at Christian Foundation Evangelical Ministry, where he led major productions including *Momento Inesperado*. 
                        In 2023, under the brand FATHERSANTACRUISE, he entered social media content creation; his first viral video earned him the award for Best Content Creator at Abia State University law faculty. <br /> <br />

                        The COVID-19 lockdown of 2020 marked a pivotal shift. During this period, Emmanuel entered the cryptocurrency industry, studying global financial systems, structural inequality, and the Cantillon effect. 
                        He also expanded into agriculture, becoming the co-founder of 5 and 6 Palm Oil/Agro Company, gaining direct experience in palm oil processing, agricultural economics, and supply distribution. <br /> <br />

                        Years of navigating crypto markets and understanding global economic cycles led Emmanuel to recognize the need for an ecosystem rooted in purpose, transparency, and innovation. 
                        From this revelation emerged Bullcycle. A comprehensive ecosystem fusing blockchain, AI, ethics, and next-generation finance, built with a powerful team of young African innovators. <br /> <br />

                        Emmanuel is also the author of his first book, AI and Blockchain: The New Dawn of Humanity, a groundbreaking manifesto exploring how technology, virtue, digital finance, and human consciousness can merge to shape a more balanced and enlightened future for the world. <br /> <br />

                        Today, he stands at the intersection of law, creative direction, technology, agriculture, economic reform, and visionary leadership. Through Bullcycle and his broader ventures, Emmanuel is committed to 
                        building systems that uplift humanity, strengthen communities, and create a fair, innovative, and prosperous future. <br /> <br />
                    </p>
                </Paragraph3>
            </Section3>
            <Section4>
                <Paragraph4>
                    <h1>
                        COME COLLABORATE WITH US
                    </h1>

                    <p>
                        We invite governments, institutions, technologists, financial leaders and global communities to join the collaborative development  of the Bullcycle ecosystem. This vision advances ethical AI, secure digital infrastructure and virtue-aligned economic systems built to strengthen human diginity and prosperity. Your partnership is pivotal in creating a new cycle of progress for all nations and peoples. Come take part in shaping this shared future
                    </p>
                </Paragraph4>
                <a href="mailto:bullcycle070@gmail.com">
                    <button>
                        <img src={email} alt="" />
                        <p>Send us an email</p>
                    </button>
                </a>
                
            </Section4>

        </PageContent>

        <Footer/>
      
    </Wrapper>
  )
}

export default Hero7

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #030013;
    overflow: hidden;
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 425px) {
        height: auto;
        padding: 40px 0;
    }
`

const PageContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`

const Section1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img{
        width: 300px;
    }
`
const Paragraph1 = styled.div`
    width: 800px;
    h1{
        font-family: 'Bebas Neue', regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: white;
    }

    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%; 
        text-align: left;
        color: white;
    }
`
const Section2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 180px;
`
const Paragraph2 = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%; 
        text-align: left;
        color: #BABABA;
    }

    h1{
        font-family: 'Bebas Neue', regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: white;
        margin-top: 0px;
    }
`

const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img{
        width: 150px;
    }
`
const Paragraph3 = styled.div`
    width: 100%;
    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%; 
        text-align: left;
        color: white;
    }
`
const Section3 = styled.div`
    width: 100%;
`
const Section4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
    }

    button{
        width: 220px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 2px solid white;
        border-radius: 10px;
        padding: 10px;
        gap: 12px;

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: white;
        }
    }
`

const Paragraph4 = styled.div`
    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: #2400FF;
        text-align: center;
    }

    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 140%; 
        text-align: center;
        color: white;
    }
`

