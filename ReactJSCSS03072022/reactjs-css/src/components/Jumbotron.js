import React from 'react'

/* props for modifiable jumbotron content */
const Jumbotron = (props) => {
  return (
    <div className="container-fluid bg-light text-dark p-5 jumbotron-container">
        <div className="container bg-light jumbotron">
            <h1 className="display-4 fw-bold">{props.header}</h1>
            <hr/>
            <p>{props.content}</p>
            
            <a href={props.url} className="btn btn-primary">Go to my Saturday!</a>
        </div>
    </div>
  )
}

export default Jumbotron