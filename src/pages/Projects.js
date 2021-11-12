import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
//  import {img} from "./img/weathermoblie.png"
export default function Projects() {
    
        
    
    return (
        <body>
        <Container>
            <br />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/fulltodo.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="border-dark  d-none d-md-block" id='todocap' >
                            
                            <h2 className='text-light'>React Project :</h2>
                            <p id="pic">
                                A React Project Todo list App using React, CSS and Bootstrap<br />
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/todo"><i className="bi bi-github"></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                    <div className='smallCap text-center' id="smallCap">
                    <a href="https://github.com/GrantHarris1/todo" id ='a'>React.  <i className='bi bi-github'></i></a>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/newHero.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-none d-md-block">
                        <div classNameName="border-dark  border border-danger .d-sm-none .d-md-block" id='herocap'>
                            
                            <h2 className='text-danger'>WordPress Project :</h2>
                            <p>
                                Project in use for client to raise money for first responders.
                            </p>
                            <h1>
                                <a href="https://heroaid.us/"><i className="bi bi-link-45deg"></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                    <div className='smallCap text-center'>
                    <a href="https://heroaid.us/" id ='a'>WordPress.  <i className="bi bi-link-45deg"></i></a>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/hooks.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="border-dark  d-none d-md-block" id='hookscap' >
                            
                            <h2 className='text-light'>React Project With Hooks:</h2>
                            <p id="pic" className="innerIam">
                                A Mock E-commerce site made with React Hooks and APIs.
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/hooks"><i className="bi bi-github" ></i></a>
                            </h1>

                        </div>

                    </Carousel.Caption>
                    <div className='smallCap text-center'>
                    <a href="https://github.com/GrantHarris1/hooks" id ='a'>React w/Hooks.  <i className='bi bi-github'></i></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/wftw.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="border-dark  d-none d-md-block" id='watercap' >
                            
                            <h2 className='text-light'>WordPress Project :</h2>
                            <p id="pic" className="innerIam">
                                Project in use for a client that brings water to Africa and around the world. 
                            </p>
                            <h1>
                                <a href="http://waterfortheworld-nla.org/" className='d-none d-lg-block'><i className="bi bi-link-45deg "></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                    <div className='smallCap text-center'>
                    <a href="http://waterfortheworld-nla.org/" id ='a'>WordPress.<i className="bi bi-link-45deg"></i></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/fullmenu.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="Iam border-dark d-none d-md-block" id='menucap' >
                           
                            <h2 className='text-light'>React Project:</h2>
                            <p id="pic" className="innerIam">
                                A React Project,
                                made with Bootstrap,
                                using an API call
                                rendering a menu based on time of day.<br />
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/menu"><i className="bi bi-github" ></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                    <div className='smallCap text-center'>
                    <a href="https://github.com/GrantHarris1/menu" id ='a'>React w/API , Cond. Rendering.  <i className='bi bi-github'></i></a>
                    </div>
                </Carousel.Item>
                <Carousel.Item variant="dark">
                    <img
                        className="d-block w-100"
                        src="/img/full KHP.png"
                        alt="Third slide"
                    />
                    
                    <Carousel.Caption>
                        <div className="Iam border-dark d-none d-md-block" id='khpcap' >
                            
                            <h2 className='text-light'>WordPress Project :</h2>
                            <p id="pic" className="innerIam">
                                Project in use for customer to book AirBnB properties.
                            </p>
                            <h1>
                                <a href="https://kentuckyhistoricproperties.com/"><i className="bi bi-link-45deg"></i></a>
                            </h1>
                        </div>
                    </Carousel.Caption>
                    <div className='smallCap text-center'>
                    <a href="https://kentuckyhistoricproperties.com/" id ='a'>WordPress.  <i className='bi bi-link-45deg'></i></a>
                    </div>
                </Carousel.Item>
            </Carousel>
                <div id = 'probot'>
                <h2 id = 'probot'>These Projects.</h2>
                <p>
                    Were all made by Grant Harris. There are Wordpress projects included to show working, functional
                    websites in use by commercial clients.<br />
                    The rest of the Projects were made in HTML, CSS, React, React Bootstrap, Bootstrap, and API calls.

                </p>
                </div>
           


        </Container>
        </body>
    )
}
