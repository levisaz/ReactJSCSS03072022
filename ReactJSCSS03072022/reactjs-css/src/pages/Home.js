import React from 'react'
import Jumbotron from '../components/Jumbotron'
import {Container} from 'react-bootstrap'
import '../styles/Home.css'
const Home = () => {
  return (
    <Container>
        <Jumbotron
            header="Hi! My name is Levi!"
            content="In this activity, I applied CSS, React Bootstrap technology and React Router. Learn more about what happened during my weekend!"
            url="saturday"
        />
    </Container>
    
  )
}

export default Home