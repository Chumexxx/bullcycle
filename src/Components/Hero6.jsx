import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import gridbg from '../assets/gridbg.svg'
import medledger from '../assets/medledger.svg'
import learnledger from '../assets/learnledger.svg'
import agricycle from '../assets/agricycle.svg'
import selfid from '../assets/selfid.svg'
import votetrust from '../assets/votetrust.svg'
import lawchain from '../assets/lawchain.svg'
import estatechain from '../assets/estatechain.svg'
import propchain from '../assets/propchain.svg'
import legacychain from '../assets/legacychain.svg'
import civicchain from '../assets/civicchain.svg'
import defipay from '../assets/defipay.svg'
import movechain from '../assets/movechain.svg'
import artstream from '../assets/artstream.svg'
import insurechain from '../assets/insurechain.svg'
import bondledger from '../assets/bondledger.svg'
import knowledger from '../assets/knowledger.svg'
import workchain from '../assets/workchain.svg'
import aidtrust from '../assets/aidtrust.svg'
import nutritrust from '../assets/nutritrust.svg'
import aquapure from '../assets/aquapure.svg'
import mindhaven from '../assets/mindhaven.svg'
import cultureledger from '../assets/cultureledger.svg'
import astroledger from '../assets/astroledger.svg'
import threadledger from '../assets/threadledger.svg'
import sportschain from '../assets/sportschain.svg'
import bioguardian from '../assets/bioguardian.svg'
import nextgenprotocol from '../assets/nextgenprotocol.svg'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'
import download2 from '../assets/download2.svg'

const Hero6 = () => {
    const scrollRef = useRef(null)
    const [activeCard, setActiveCard] = useState(null)
 
                const cards = [
            {
              text: 'MedLedger AI is Bullcycle’s healthcare intelligence and blockchain infrastructure built for resilience, privacy, and patient dignity. It brings together smart health wallets, self-sovereign identity, AI triage, secure data exchange, Health DAOs, and on-chain micro-insurance to create a network of healing powered by code and compassion. In this system, medical care becomes instant, tamper-proof, and accessible without paperwork, bribes, or delay',
              icon: <img src={medledger} alt="" />,
              title: 'MEDLEDGER AI'
            },
            {
              text: 'LearnLedger Protocol is a decentralized global learning network powered by AI and blockchain, built around a self-sovereign learning identity that follows the learner everywhere. It combines AI-tuned learning environments, peer-to-peer teaching DAOs, NFT-certified credentials, on-chain micro-scholarships, smart bursaries, and earn-to-learn models to liberate minds with new systems. In this network, knowledge becomes borderless, tamper-proof, and universally recognized',
              icon: <img src={learnledger} alt="" />,
              title: 'LEARNLEDGER AI'
            },
            {
              text: 'AgriCycle AI is a decentralized agricultural ecosystem powered by AI, blockchain, and crypto incentives, giving farmers tools like Farm diagnostics, Agri-ID, verified seed registries, and weather-linked insurance. It uses Farm DAOs, stablecoin payments and AgriCoin microloans to help farmers reclaim ownership, access finance, and connect globally. The result is sovereignty, climate justice, and a future-proof food system where farmers own their data, their produce, and their future',
              icon: <img src={agricycle} alt="" />,
              title: 'AGRICYCLE AI'
            },
            {
              text: 'SelfID is Bullcycle’s decentralized identity framework powered by AI and blockchain, built around a universal digital passport tied to biometric and behavioral traits. It provides encrypted identity vaults, selective proof-sharing, cross-border sync, reputation tokens, and guardian features while ensuring that whether in Lagos, London, or the metaverse, you still remain you. With a single biometric scan, SelfID restores recognition, dignity, and inclusion through a tamper-proof digital identity',
              icon: <img src={selfid} alt="" />,
              title: 'SELFID'
            },
            {
              text: 'VoteTrust is Bullcycle’s AI and blockchain infrastructure for secure, transparent global voting. It uses biometric digital voter IDs, smart-contract counting, and open audit trails to eliminate ghost voters, ballot stuffing, and manipulation. Every vote is anonymous, verifiable, and instantly validated, creating digital democracy in action',
              icon: <img src={votetrust} alt="" />,
              title: 'VOTETRUST'
            },
            {
              text: 'Lawchain is Bullcycle’s AI and blockchain system for Smart Justice and LegalTech transformation. It offers AI legal chatbots, smart contract builders, evidence vaults, and decentralized dispute resolution to make justice programmable and universal. Legal conflicts are resolved on-chain with verified experts and automated rulings by leveraging smart contracts; no courts, no borders, no legal fees',
              icon: <img src={lawchain} alt="" />,
              title: 'LAWCHAIN AI'
            },
            {
              text: 'EstateChain DAO is Bullcycle’s decentralized, borderless property registry and management system. It uses AI valuation, blockchain land deeds, smart contract rentals, tokenized property shares, and housing history NFTs to make ownership clear, fair, and programmable. Every transfer becomes transparent and tamper-proof, turning property ownership from a maze of bureaucracy into a dignified right for anyone',
              icon: <img src={estatechain} alt="" />,
              title: 'ESTATECHAIN AI'
            },
            {
              text: 'PropChain is Bullcycle’s AI and blockchain platform for managing residential, commercial, and land properties. It uses AI repair forecasting, NFT property tokens, decentralized rent payments, smart sensors, and tenant DAOs to make ownership and occupancy intelligent and just. Every interaction from entry to escrow is secured, decentralized, equitable and fair',
              icon: <img src={propchain} alt="" />,
              title: 'PROPCHAIN AI'
            },
            {
              text: 'LegacyChain AI is a decentralized protocol for creating and executing digital wills, using AI guidance, biometric verification, and blockchain-based smart contracts. It enables secure, rule-based inheritance of digital and physical assets across jurisdictions, with automated disbursements to heirs and charities. The system ensures that a person’s legacy is preserved, protected from corruption, and accessible immediately upon verified events like death',
              icon: <img src={legacychain} alt="" />,
              title: 'LEGACYCHAIN AI'
            },
            {
              text: 'CivicChain is Bullcycle’s governance, accountability, and inclusion platform for the public sector. It uses GovID wallets, on-chain elections, smart-contract civic funds, welfare verification, and citizen-run oversight DAOs to modernize trust. Every decision becomes visible, immutable, and instantly auditable, delivering governance that is truly transparent',
              icon: <img src={civicchain} alt="" />,
              title: 'CIVIC CHAIN AI'
            },
            {
              text: 'Defi Pay is Bullcycle’s hybrid confidential financial network, a global ethical financial highway for the unbanked, underserved, and unseen. It uses zero-knowledge stablecoin wallets, Self ID verification, AI fraud detection, micro-lending, and community smart contracts to balance transparency with human privacy. Every transaction becomes verifiable yet confidential, creating a financial system trusted by regulators and respected by humanity',
              icon: <img src={defipay} alt="" />,
              title: 'DEFI PAY'
            },
            {
              text: 'MoveChain is Bullcycle’s decentralized transportation infrastructure, built to let people co-own and co-shape how their cities move. It integrates AI-enhanced routing, blockchain vehicle registries, carbon credit tokens, smart logistics, incentivized carpooling, and community voting. With intermodal wallets, smart insurance, carbon ledgers, and zero-knowledge security, it creates a fair, efficient, and accountable transit ecosystem',
              icon: <img src={movechain} alt="" />,
              title: 'MOVECHAIN AI'
            },
            {
              text: 'Artstream Protocol is Bullcycle’s decentralized AI and blockchain platform for media ownership, licensing, and profit-sharing. It offers NFT minting, AI collaborations, smart streaming wallets, Proof-of-Voice protection, fan-powered DAOs, and censorship-resistant media archives to empower creators, not platforms. Here, your talent becomes your equity, and every creative work is protected, owned, and rewarded instantly',
              icon: <img src={artstream} alt="" />,
              title: 'ARTSTREAM AI'
            },
            {
              text: 'InsureChain is Bullcycle’s AI and blockchain platform for decentralized insurance products. It offers parametric policies, AI-verified IoT and satellite claims, community insurance DAOs, smart contract coverage, and on-chain actuarial models that make protection provable and programmable. Claims trigger automatically and pay out instantly, creating transparent protection without disputes or paperwork',
              icon: <img src={insurechain} alt="" />,
              title: 'INSURECHAIN AI'
            },
            {
              text: 'BondLedger AI is a decentralized compassion network where AI, virtue and blockchain rebuild the emotional and moral fabric of society. It uses Family Trust Wallets, AI relationship mediators, community DAOs, crypto care vouchers, and LoveLedger rewards to turn compassion into infrastructure. Every act of support becomes transparent, secure, and verifiable, preserving belonging across families and communities',
              icon: <img src={bondledger} alt="" />,
              title: 'BONDLEDGER AI'
            },
            {
              text: 'KnowLedger AI is Bullcycle’s decentralized intelligence framework where truth, transparency, and trust converge. It uses open research chains, AI validation, smart funding pools, virtue-weighted collaboration, and tokenized knowledge to create a moral economy of enlightenment. In this system, discoveries are verified, credited, and rewarded transparently because truth earns value',
              icon: <img src={knowledger} alt="" />,
              title: 'KNOWLEDGER AI'
            },
            {
              text: 'WorkChain AI is Bullcycle’s decentralized employment and gig platform built to empower workers, automate trust, and restore dignity in global labor markets. It delivers smart-contract payments, AI skill matchmaking, immutable work profiles, gig DAO governance, and virtue-backed rewards for ethical work. Every job becomes fair, transparent, and borderless making talent visible wherever it exists',
              icon: <img src={workchain} alt="" />,
              title: 'WORKCHAIN AI'
            },
            {
              text: 'AidTrust AI is Bullcycle’s decentralized humanitarian intelligence and disaster resilience system built to make compassion efficient, transparent, and borderless. It combines transparent donation chains, self-sovereign ID for victims, AI disaster prediction, drone and satellite mapping, and blockchain supply ledgers to prevent fraud and ensure verified delivery. In this system, charity becomes coordination, and donations become truth',
              icon: <img src={aidtrust} alt="" />,
              title: 'AIDTRUST AI'
            },
            {
              text: 'NutriTrust AI is Bullcycle’s nutrition intelligence and ethical food verification platform built on AI personalization and blockchain transparency. It combines personal nutrition IDs, smart label verification, health value scoring, wellness tracking, and community nutrition DAOs to teach the world how to eat wisely and live consciously. Every meal becomes verified, rewarded, and aligned with integrity',
              icon: <img src={nutritrust} alt="" />,
              title: 'NUTRITRUST AI'
            },
            {
              text: 'AquaPure AI is Bullcycle’s decentralized infrastructure for environmental intelligence, water purification, and sanitation accountability. It uses AI sensing, IoT smart water grids, and blockchain-verified reports to track purity, predict contamination, and ensure transparent aid distribution. Environmental care becomes shared stewardship, where accountability is automated and justice flows like water',
              icon: <img src={aquapure} alt="" />,
              title: 'AQUAPURE AI'
            },
            {
              text: 'MindHaven AI is Bullcycle’s decentralized ecosystem for emotional intelligence and global wellness powered by AI and blockchain. It combines self-sovereign wellness identities, AI empath companions, peer-to-peer support DAOs, and smart care contracts to make healing private, measurable, and empowering. Mental health becomes a digital right, not a privilege',
              icon: <img src={mindhaven} alt="" />,
              title: 'MINDHAVEN AI'
            },
            {
              text: 'CultureLedger Protocol is Bullcycle’s decentralized tourism and heritage ecosystem connecting travelers, communities, and cultures through transparency and truth. It uses cultural DAOs, tokenized preservation, AI heritage guardians, and authenticity verification to ensure travel funds communities, not exploitation. Here, tourism becomes preservation, and culture thrives on the blockchain',
              icon: <img src={cultureledger} alt="" />,
              title: 'CULTURELEDGER AI'
            },
            {
              text: 'AstroLedger Protocol is Bullcycle’s decentralized, AI-powered framework for interplanetary innovation, exploration, and governance. Through space DAOs, tokenized mission funding, AI navigation, and immutable mission records, space projects become transparent and globally co-owned. It ensures space becomes humanity’s shared destiny, guided by equity and governed by truth',
              icon: <img src={astroledger} alt="" />,
              title: 'ASTROLEDGER AI'
            },
            {
              text: 'ThreadLedger Protocol is Bullcycle’s AI and blockchain system for a transparent, fair, and regenerative fashion ecosystem. It gives every garment a digital passport, automates fair wages through smart contracts, enables circular DAO fashion houses, and rewards sustainability with EcoTokens. Fashion becomes traceable, ethical, and authentic—where what you wear carries truth, not exploitation',
              icon: <img src={threadledger} alt="" />,
              title: 'THREADLEDGER AI'
            },
            {
              text: 'SportChain Protocol is Bullcycle’s decentralized sports ecosystem uniting athletes, fans, coaches, and creators through transparency and reward. It records athlete identities and performance on-chain, automates sponsorships with smart contracts, and enables fan-powered economies and earn-to-train systems. Talent meets opportunity in a world where sports are protected by truth and powered by purpose',
              icon: <img src={sportschain} alt="" />,
              title: 'SPORTSCHAIN AI'
            },
            {
              text: 'BioGuardian Protocol is Bullcycle’s AI and blockchain guardianship network for protecting the planet’s living systems. It tracks wildlife identities, deploys AI drones against poaching, rewards conservation actions, and enforces transparent ecological funding through smart contracts. Every creature matters, every action counts, and stewardship becomes automated and accountable',
              icon: <img src={bioguardian} alt="" />,
              title: 'BIOGUARDIAN AI'
            },
            {
              text: 'NextGen Protocol merges AI mentorship, blockchain certification, and funding. for youth empowerment. It tracks verified achievements, guides learning and leadership through AI mentors, and connects youth globally via DAOs, virtual hubs, and smart incubators. Every contribution earns InspireTokens, blockchain-verified credentials, and access to opportunities, making young people stakeholders in humanity’s progress',
              icon: <img src={nextgenprotocol} alt="" />,
              title: 'NEXTGENPROTOCOL'
            },
        ] 

        const scrollLeft = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' })
            }
        }

        const scrollRight = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' })
            }
        }
  return (
    <Wrapper>

        <PageContents>
            <Paragraph>
                <h1>
                    CORE INFRASTRUCTURE FOR THE BULLCYCLE ECOSYSTEM
                </h1>

                <p>
                    A suite of secure, scalable DApps designed for global adoption. Each one leverages <br /> blockchain and AI to deliver trust, accountability, and long-term value
                </p>
            </Paragraph>

            <CardsSection>
                <Navigations>
                    <img src={leftarrow} alt="Left Arrow" onClick={scrollLeft} />
                    <img src={rightarrow} alt="Right Arrow" onClick={scrollRight} />
                </Navigations>

                <AICards ref={scrollRef}>
                    {cards.map((card, index) => (
                                <Card 
                                    key={index}
                                    $isActive={activeCard === index}
                                    onClick={() => setActiveCard(index)}
                                >
                                    <Text>{card.text}</Text>
                                    <Footer>
                                        <Icon>{card.icon}</Icon>
                                        <Title>{card.title}</Title>
                                    </Footer> 
                                </Card>
                            ))
                        }
                </AICards>
            </CardsSection>

            <ButtonDiv>
                <p>
                    Download our whitepaper to learn more
                </p>

                <Button>
                    <img src={download2} alt="Download Icon" />
                    <p>Download Whitepaper</p>
                </Button>

            </ButtonDiv>
        </PageContents>

    </Wrapper>
  )
}

export default Hero6

const Wrapper = styled.div`
    width: 100%;
    height: 120vh;
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

    @media (max-width: 320px) {
        padding: 30px 0;
    }
`

const PageContents = styled.div`
    width: 90%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (max-width: 1440px) {
        gap: 55px;
    }

    @media (max-width: 1024px) {
        gap: 50px;
    }

    @media (max-width: 768px) {
        gap: 45px;
    }

    @media (max-width: 480px) {
        gap: 40px;
    }

    @media (max-width: 425px) {
        gap: 35px;
    }

    @media (max-width: 320px) {
        gap: 30px;
    }
`

const Paragraph = styled.div`
    text-align: center;
    h1{
        font-family: 'Bebas Neue', regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 110%;
        color: #2400FF;
        margin: 0 0 20px 0;
    }

    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        color: black;
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
            line-height: 100%;

            br{
                display: none;
            }
        }
    }

    @media (max-width: 375px) {
        h1 {
            font-size: 17px;
        }
        p {
            font-size: 12px;
            line-height: 100%;

            br{
                display: none;
            }
        }
    }

    @media (max-width: 320px) {
        h1 {
            font-size: 17px;
        }
        p {
            font-size: 12px;
            line-height: 100%;

            br{
                display: none;
            }
        }
    }
`

const CardsSection = styled.div`
    width: 100%;
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
        gap: 10px;
    }

    @media (max-width: 320px) {
        gap: 10px;
    }
`

const Navigations = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
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
        gap: 12px;
        img {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 320px) {
        gap: 10px;
        img {
            width: 28px;
            height: 28px;
        }
    }
`

const AICards = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    padding: 10px 0;
    margin-bottom: 50px;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-width: 1440px) {
        gap: 18px;
        margin-bottom: 45px;
    }

    @media (max-width: 1024px) {
        gap: 16px;
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        gap: 14px;
        margin-bottom: 35px;
    }

    @media (max-width: 480px) {
        gap: 12px;
        margin-bottom: 30px;
    }

    @media (max-width: 425px) {
        gap: 10px;
        margin-bottom: 25px;
    }

    @media (max-width: 320px) {
        gap: 8px;
        margin-bottom: 20px;
    }
`

const Card = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    background-color: ${props => props.$isActive ? '#C7BEFE' : '#F2F2F5'};
    border-radius: 10px;
    flex-shrink: 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #C7BEFE;
    }

    @media (max-width: 1440px) {
        width: 360px;
        height: 430px;
        padding: 28px;
    }

    @media (max-width: 1024px) {
        width: 340px;
        height: 410px;
        padding: 26px;
    }

    @media (max-width: 768px) {
        width: 320px;
        height: 390px;
        padding: 24px;
    }

    @media (max-width: 480px) {
        width: 280px;
        height: 360px;
        padding: 20px;
    }

    @media (max-width: 425px) {
        width: 260px;
        height: 340px;
        padding: 18px;
    }

    @media (max-width: 320px) {
        width: 240px;
        height: 320px;
        padding: 16px;
    }
`

const Text = styled.p`
    font-family: 'Geist', regular;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #333232;
    margin: 0;
    flex: 1;

    @media (max-width: 1440px) {
        font-size: 19px;
    }

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    @media (max-width: 425px) {
        font-size: 13px;
    }

    @media (max-width: 320px) {
        font-size: 12px;
    }
`
    
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 1440px) {
        gap: 14px;
        margin-top: 18px;
    }

    @media (max-width: 1024px) {
        gap: 13px;
        margin-top: 16px;
    }

    @media (max-width: 768px) {
        gap: 12px;
        margin-top: 14px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        margin-top: 12px;
    }

    @media (max-width: 425px) {
        gap: 8px;
        margin-top: 10px;
    }

    @media (max-width: 320px) {
        gap: 6px;
        margin-top: 8px;
    }
`

const Icon = styled.div`
    img{
        width: 25px;
        height: 25px;
    }

    @media (max-width: 1440px) {
        img {
            width: 24px;
            height: 24px;
        }
    }

    @media (max-width: 1024px) {
        img {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width: 768px) {
        img {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 320px) {
        img {
            width: 14px;
            height: 14px;
        }
    }
`

const Title = styled.h1`
    font-family: 'Bebas Neue', Regular;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    color: #333232;
    margin: 0;

    @media (max-width: 1440px) {
        font-size: 34px;
    }

    @media (max-width: 1024px) {
        font-size: 32px;
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
    }

    @media (max-width: 425px) {
        font-size: 22px;
    }

    @media (max-width: 320px) {
        font-size: 20px;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p{
        font-family: 'Geist', regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        margin: 0;
    }

    @media (max-width: 1440px) {
        gap: 18px;
        p {
            font-size: 19px;
        }
    }

    @media (max-width: 1024px) {
        gap: 16px;
        p {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        gap: 14px;
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 480px) {
        gap: 12px;
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        gap: 10px;
        p {
            font-size: 13px;
        }
    }

    @media (max-width: 320px) {
        gap: 8px;
        p {
            font-size: 12px;
        }
    }
`

const Button = styled.div`
    width: 230px;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid #2400FF;
    cursor: pointer;
    transition: all 0.2s;

    img{
        width: 12px;
    }

    p{
        color: black;
        font-family: 'Geist', Regular;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        margin: 0;
    }

    @media (max-width: 1440px) {
        width: 220px;
        height: 38px;
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 1024px) {
        width: 210px;
        height: 36px;
        img {
            width: 11px;
        }
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 768px) {
        width: 200px;
        height: 34px;
        img {
            width: 10px;
        }
        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        width: 190px;
        height: 32px;
        img {
            width: 10px;
        }
        p {
            font-size: 13px;
        }
    }

    @media (max-width: 425px) {
        width: 180px;
        height: 30px;
        img {
            width: 9px;
        }
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 320px) {
        width: 170px;
        height: 28px;
        img {
            width: 8px;
        }
        p {
            font-size: 11px;
        }
    }
`