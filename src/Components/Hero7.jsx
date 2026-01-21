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

                <Images1>
                    <img src={leader1} alt="" />
                    <img src={leader2} alt="" />
                    <img src={leader3} alt="" />
                </Images1>

            </Section2>
            <Section3>
                <Paragraph3>
                    <p>
                        <span style={{color: "#2400FF"}}>Emmanuel Obinna Chibuike</span> is a Nigerian-born visionary entrepreneur, creative strategist, author, and digital finance innovator redefining the future of blockchain, 
                        AI, and ethical technology through the Bullcycle Ecosystem. A mission-driven platform designed to restore balance, transparency, and integrity to global digital finance. <br /> <br />

                        Hails from Agbo Emede Ibeku, born in Amuzukwu Ibeku, Umuahia, and raised between Umuahia and Enugu, Emmanuel's journey began at his mother's printing press,
                         where he learned early the disciplines of precision, creativity, and mechanical problem-solving. This foundation shaped the systems-thinking mindset that guides his work today. <br /> <br />

                        He attended Ebenezer Nursery and Primary School, continued to Federal Government College Ohafia (2012–2018), and earned his LL.B. in Law from Abia State University (2018–2024). 
                        At ABSU, he served on the Editorial Board and served as President Umuahia Students Association, Umuahia campus chapter (2023), strengthening his leadership and communication capabilities. <br /> <br />

                        Emmanuel's creative path also includes drama directing (in 2020) at Christian Foundation Evangelical Ministry, where he led major productions including *Momento Inesperado*. 
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

                <Images2>
                    <img src={leader1} alt="" />
                    <img src={leader2} alt="" />
                    <img src={leader3} alt="" />
                </Images2>
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

    @media (max-width: 1440px) {
        padding-top: 90px;
        padding-bottom: 90px;
    }

    @media (max-width: 1024px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media (max-width: 768px) {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    @media (max-width: 480px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media (max-width: 425px) {
        padding: 40px 0;
    }

    @media (max-width: 320px) {
        padding: 30px 0;
    }
`

const PageContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
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
        gap: 25px;
    }

    @media (max-width: 320px) {
        gap: 20px;
    }
`

const Section1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    img{
        width: 300px;
    }

    @media (max-width: 1440px) {
        img {
            width: 280px;
        }
    }

    @media (max-width: 1024px) {
        img {
            width: 250px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        img {
            width: 220px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 200px;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 180px;
        }
    }

    @media (max-width: 320px) {
        img {
            width: 150px;
        }
    }
`

const Paragraph1 = styled.div`
    width: 800px;
    
    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: white;
        margin: 0 0 20px 0;
    }

    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%; 
        text-align: left;
        color: white;
        margin: 0;
    }

    @media (max-width: 1440px) {
        width: 700px;
        h1 {
            font-size: 58px;
        }
        p {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) {
        width: 600px;
        h1 {
            font-size: 52px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        width: 500px;
        h1 {
            font-size: 46px;
            text-align: center;
        }
        p {
            font-size: 16px;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        width: 100%;
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 12px;
            line-height: 140%;
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 12px;
        }
    }
`

const Section2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 180px;
    gap: 40px;

    @media (max-width: 1440px) {
        margin-top: 150px;
    }

    @media (max-width: 1024px) {
        margin-top: 120px;
    }

    @media (max-width: 768px) {
        margin-top: 100px;
    }

    @media (max-width: 480px) {
        margin-top: 80px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        margin-top: 60px;
        text-align: center;
    }

    @media (max-width: 320px) {
        margin-top: 50px;
    }
`

const Paragraph2 = styled.div`
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 100%; 
        text-align: left;
        color: #BABABA;
        margin: 0 0 10px 0;
    }

    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 110%;
        color: white;
        margin: 0;
    }

    @media (max-width: 1440px) {
        p {
            font-size: 20px;
        }
        h1 {
            font-size: 58px;
        }
    }

    @media (max-width: 1024px) {
        p {
            font-size: 18px;
        }
        h1 {
            font-size: 52px;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 16px;
        }
        h1 {
            font-size: 46px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 425px) {
        p {
            font-size: 12px;
            text-align: center;
        }
        h1 {
            font-size: 22px;
            text-align: center;
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
            font-size: 22px;
        }
    }
`

const Images1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    img{
        width: 150px;
    }

    @media (max-width: 1440px) {
        gap: 18px;
        img {
            width: 140px;
        }
    }

    @media (max-width: 1024px) {
        gap: 16px;
        img {
            width: 130px;
        }
    }

    @media (max-width: 768px) {
        gap: 14px;
        img {
            width: 120px;
        }
    }

    @media (max-width: 480px) {
        gap: 12px;
        img {
            width: 100px;
        }
    }

    @media (max-width: 425px) {
        img {
            display: none;
        }
    }

`

const Images2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    display: none;
    
    img{
        width: 150px;
    }

    /* @media (max-width: 1440px) {
        gap: 18px;
        img {
            width: 140px;
        }
    }

    @media (max-width: 1024px) {
        gap: 16px;
        img {
            width: 130px;
        }
    }

    @media (max-width: 768px) {
        gap: 14px;
        img {
            width: 120px;
        }
    }

    @media (max-width: 480px) {
        gap: 12px;
        img {
            width: 100px;
        }
    } */

    @media (max-width: 425px) {
        display: flex;
         img {
            width: 100px;
        }
    }
`

const Section3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1440px) {
        gap: 35px;
    }

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 768px) {
        gap: 25px;
    }

    @media (max-width: 480px) {
        gap: 20px;
    }

    @media (max-width: 425px) {
        gap: 0px;
        margin-top: 0%;
        ${Images2} {
            display: flex;
        }
    }

    @media (max-width: 320px) {
        gap: 25px;
    }
`

const Paragraph3 = styled.div`
    width: 100%;
    
    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%; 
        text-align: left;
        color: white;
        margin: 0;
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
        margin-top: 0%;
        p {
            font-size: 12px;
            text-align: center;
            line-height: 140%;
        }
    }

    @media (max-width: 320px) {
        p {
            font-size: 12px;
        }
    }
`

const Section4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

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
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: white;
            
            p {
                color: #030013;
            }

            img {
                filter: brightness(0);
            }
        }

        p{
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: white;
            margin: 0;
        }

        img {
            width: 20px;
        }
    }

    @media (max-width: 1440px) {
        gap: 28px;
        button {
            width: 210px;
            height: 48px;
            p {
                font-size: 17px;
            }
        }
    }

    @media (max-width: 1024px) {
        gap: 26px;
        button {
            width: 200px;
            height: 46px;
            p {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 768px) {
        gap: 24px;
        button {
            width: 190px;
            height: 44px;
            p {
                font-size: 15px;
            }
            img {
                width: 18px;
            }
        }
    }

    @media (max-width: 480px) {
        gap: 22px;
        button {
            width: 180px;
            height: 42px;
            p {
                font-size: 14px;
            }
            img {
                width: 16px;
            }
        }
    }

    @media (max-width: 425px) {
        gap: 20px;
        button {
            width: 170px;
            height: 40px;
            p {
                font-size: 13px;
            }
            img {
                width: 15px;
            }
        }
    }

    @media (max-width: 320px) {
        gap: 18px;
        button {
            width: 160px;
            height: 38px;
            p {
                font-size: 12px;
            }
            img {
                width: 14px;
            }
        }
    }
`

const Paragraph4 = styled.div`
    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 110%;
        color: #2400FF;
        text-align: center;
        margin: 0 0 20px 0;
    }

    p{
        font-family: 'Geist', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 140%; 
        text-align: center;
        color: white;
        margin: 0;
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 58px;
        }
        p {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) {
        h1 {
            font-size: 52px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 46px;
        }
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 22px;
        }
        p {
            font-size: 12px;
        }
    }
`