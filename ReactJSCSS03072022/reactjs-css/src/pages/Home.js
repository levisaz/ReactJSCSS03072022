import React from 'react'
import Jumbotron from '../components/Jumbotron'
import {Container} from 'react-bootstrap'
import '../styles/Home.css'
import LinkedIn from '../imgs/linkedin.png'
import Instagram from '../imgs/instagram.png'
const Home = () => {
  return (
    <Container data-aos="zoom-in-left">
        <a className="btn linkedin-btn" href="https://www.linkedin.com/in/john-leviticus-levi-s-6b0831106/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" /></a>
        <a className="btn linkedin-btn" href="https://www.instagram.com/leviisazon/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
        <Jumbotron
            header="Hi! My name is Levi!"
            content="In this activity, I applied CSS, React Bootstrap technology and React Router. Learn more about what happened during my weekend!"
            url="/saturday"
        />
    </Container>
    
  )
}

export default Home