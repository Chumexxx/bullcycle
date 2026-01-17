import React from 'react'
import styled from 'styled-components'
import chain from '../assets/chain.svg'

const LandingPage2 = () => {
  return (
    <Wrapper>
        <PageContent>

            <Paragraphs>
                <ProblemParagraph>
                    <p>The problem</p>
                    <h4>
                        OUR TOOLS ARE EVOLVING FASTER THAN OUR VALUES
                    </h4>
                </ProblemParagraph>

                <ExplanationParagraph>
                    <p>
                        We live in an age of paradox where we are <span style={{ color: "#2400FF" }}>hyper-connected, yet divided</span>.  Digitally rich but morally bankrupt. Money moves faster than ever, yet poverty deepens. Artificial Intelligence is learning rapidly, but wisdom hasn’t kept pace. 
                        <br /> <br />
                        The world doesn’t just need better technology. It needs a new moral architecture, a new operating system for humanity. <span style={{ color: "#2400FF" }}>That’s where we come in</span>
                    </p>

                </ExplanationParagraph>
            </Paragraphs>

            {/* <div> */}
                <img src={chain} alt="" />
            {/* </div> */}

        </PageContent>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const PageContent = styled.div`
    margin-top: 150px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 800px;
    }
`

const Paragraphs = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ProblemParagraph = styled.div`
    width: 550px;
    height: 154px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: black;
    }

    h4{
        margin-top: 0%;
        font-family: 'Bebas Neue', Regular;
        font-weight: 400;
        font-size: 64px;
        line-height: 100%;
        color: #2400FF;
    }
    
`

const ExplanationParagraph = styled.div`
    width: 805px;
    height: 205px;
    p{
        font-family: 'Geist', Regular;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
    }
`

export default LandingPage2
