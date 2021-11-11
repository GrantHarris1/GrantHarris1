import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
//  import {img} from "./img/weathermoblie.png"
export default function Projects() {
    return (
        <Container>
            <br />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/hero.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className=".d-sm-none .d-md-block">
                        <div className="border-dark rounded-pill border border-danger .d-sm-none .d-md-block" id='herocap'>
                            
                            <h2 className='text-danger'>WordPress Project :</h2>
                            <p>
                                A project made for a client that is in use currently.
                                It is used to raise money for first responders. <br />
                            </p>
                            <h1>
                                <a href="https://heroaid.us/"><i class="bi bi-link-45deg"></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/fulltodo.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="border-dark rounded-pill" id='todocap' >
                            
                            <h2 className='text-light'>React Project :</h2>
                            <p id="pic">
                                A React Project Todo list App using React, CSS and Bootstrap<br />
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/todo"><i class="bi bi-github"></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/wftw.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="border-dark rounded-pill" id='watercap' >
                            
                            <h2 className='text-light'>WordPress Project :</h2>
                            <p id="pic" className="innerIam">
                                A project made for a client that is still in use that installs water<br />
                               systems in the most underdeveloped parts of the world. <br />
                            </p>
                            <h1>
                                <a href="http://waterfortheworld-nla.org/"><i class="bi bi-link-45deg"></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/hooks.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="border-dark rounded-pill" id='hookscap' >
                            <br />
                            <h2 className='text-light'>React Project With Hooks:</h2>
                            <p id="pic" className="innerIam">
                                A React Project W/ React Hooks , React Bootstrap and an API call.<br />
                                 A mock E-commerce site that you
                              could use to sell fishing equipment   <br />
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/hooks"><i class="bi bi-github" ></i></a>
                            </h1>

                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item variant="dark">
                    <img
                        className="d-block w-100"
                        src="/img/full KHP.png"
                        alt="Third slide"
                    />
                    
                    <Carousel.Caption>
                        <div className="Iam border-dark rounded-pill" id='khpcap' >
                            
                            <h2 className='text-light'>WordPress Project :</h2>
                            <p id="pic" className="innerIam">
                                A project made for a client that is still in use, that promotes and <br />
      books thier AIR BNB properties. <br />
                            </p>
                            <h1>
                                <a href="https://kentuckyhistoricproperties.com/"><i class="bi bi-link-45deg"></i></a>
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/fullmenu.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="Iam border-dark rounded-pill" id='menucap' >
                           
                            <h2 className='text-light'>React Project:</h2>
                            <p id="pic" className="innerIam">
                                A React Project,
                                made with Bootstrap,
                                using an API call
                                rendering a menu based on time of day.<br />
                            </p>
                            <h1>
                                <a href="https://github.com/GrantHarris1/menu"><i class="bi bi-github" ></i></a>
                            </h1>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </Container>
    )
}
