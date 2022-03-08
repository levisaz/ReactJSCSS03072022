import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import JumbotronNobtn from '../components/JumbotronNobtn'
import Cards from '../components/Cards'
import CardsRightImg from '../components/CardsRightImg'
import '../styles/Page3.css'
const Page3 = () => {
  return (
    <Container fluid className="page3 mx-10">
    
      <Row className="mb-5">
        <div>
          <h1 className="mb-5 d-flex justify-content-center">My Sunday</h1>
        </div>

        <JumbotronNobtn  
            header="Chill Day"
            content="I decided that in this day, I won't worry about school and ojt requirements. Rest is essential. Dsurb."
            content2="I did my morning routine and later that day decided to buy iced coffee before going to my girlfriend's house to relax and watch a netflix movie. At night we cooked fishcake with gochujang (red chili paste). When I got home, I played valorant with my friends until 2AM before going to sleep."
        />
      </Row>

      <Row>
      <div>
          <h5 className="mb-5 d-flex justify-content-center text-center">Since that pretty much sums up my Sunday, let me share to you my favorite characters in Valorant.</h5>
        </div>
        <Col xl={6} className="col1">
        <Row className="mx-3 mb-5">
            <Container className="d-flex justify-content-center p-0">
              <Cards
                img ="https://www.pcgamesn.com/wp-content/uploads/2020/04/valorant-jett-guide.jpg"
                title = "Jett"
                description = "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."
                url="https://valorant.fandom.com/wiki/Jett"
                alt="Jett img"
              />
            </Container>
          </Row>

          <Row className="mx-3 mb-5">
            <Container className="d-flex justify-content-center p-0">
              <CardsRightImg
                img ="https://www.nme.com/wp-content/uploads/2020/07/072220-Raze-Valorant-Riot-Games.jpg"
                title = "Raze"
                description = "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”"
                url="https://valorant.fandom.com/wiki/Raze"
                alt="Raze img"
              />
            </Container>
          </Row>
        </Col>

        <Col xl={6} className="col2"> 

          <Row className="mx-3 mb-5">
            <Container className="d-flex p-0">
              <Cards className="text-right"
                    img ="https://www.pcgamesn.com/wp-content/uploads/2020/04/valorant-sova-arrows-lineups.jpg"
                    title = "Sova"
                    description = "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide."
                    url="https://valorant.fandom.com/wiki/Sova"
                    alt="Sova img"
                />
            </Container>
          </Row>

          <Row className="mx-3 mb-5">
            <Container className="d-flex p-0">
              <CardsRightImg
                  img ="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91fb161316bbb88b/6179d200ece6b40b35072b7a/Chamber-TRAILER-Article-Banner.jpg?auto=webp&disable=upscale&height=381"
                  title = "Chamber"
                  description = "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan."
                  url="https://valorant.fandom.com/wiki/Chamber"
                  alt="Chamber img"
              />
            </Container>
          </Row>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Page3