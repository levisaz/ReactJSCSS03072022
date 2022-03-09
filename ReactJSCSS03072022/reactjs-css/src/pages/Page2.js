import React from 'react'
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap'
import Cards from '../components/Cards'
import CardNoBtnImg from '../components/CardNoBtnImg'
import '../styles/Page2.css'
const Page2 = () => {
  return (
    <Container className="page2" data-aos="zoom-in">
    
      
      <Row>

      <div>
        <h1 className="mb-5 d-flex justify-content-center">My Saturday</h1>
      </div>

        <Col lg={12} className="mb-5 d-flex justify-content-center">

          <Cards
              img ="https://whalejournal.com/wp-content/uploads/2021/11/Axie-Infinity.jpeg"
              title = "My morning routine"
              description = "I play axie infinity daily to farm in-game digital currency, Smooth Love Potion (SLP). I can claim the tokens that I farmed every 2 weeks and store them in my crypto wallet that stores all my crpyto assets. Currently, I am exchanging all of my SLP tokens into Axie Infinity Shard (AXS) token and stake them in Axie Infinity's AXS staking."
              url="https://axieinfinity.com/"
              alt="Axie Infinity logo"
            />

        </Col>

        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <CardNoBtnImg
                  title = ""
                  description = "I usually wake up at around 10AM and eat brunch first before playing axie infinity. Then I would regularly meet with my friends through discord's voice/video channel and sometimes play with them if we are free. Since it's a Saturday and everyone's free, we played a few games of valorant."
          />
        </Col>
        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <CardNoBtnImg
                  title = ""
                  description = "Later that day, I cleaned my dusty pc with a can of compressed air, although, I did not disassemble the pc and clean it thoroughly because I am lazy. Then, I took a quick swim with my niece at our small pool since it has just been filled with water."
                  
          />
        </Col>

        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <CardNoBtnImg
                  title = "Night time"
                  description = "After dinner, I searched for some portfolio inspirations and saved a few for our future project."
                  
          />
        </Col>

        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <Carousel >
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://cdn.dribbble.com/users/2348/screenshots/10696082/valorant_1_4x.png"
                alt="Valorant logo"
              />
              
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://i0.wp.com/thegamehaus.com/wp-content/uploads/2021/09/TFT-Set-6.jpg?fit=771%2C465&ssl=1"
                alt="Teamfight Tactics logo"
              />
              
            </Carousel.Item>
            
          </Carousel>
        </Col>

        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <CardNoBtnImg 
                    title = ""
                    description = "At night I played a few games of Valorant and Teamfight Tactics before I sleep and finally end the day."
                    
            />
            <br/>
            
        </Col>
        <Col lg={12} className="mb-5 d-flex justify-content-center">
          <Button className="bot-btn" variant="danger" href="https://playvalorant.com/en-us/" target="_blank">Explore Valorant</Button>
            <Button className="bot-btn text-dark" variant="warning" href="https://teamfighttactics.leagueoflegends.com/en-gb/" target="_blank">Explore TFT</Button>
        </Col>
        
      </Row>

    </Container>
  )
}

export default Page2