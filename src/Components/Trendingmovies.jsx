import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function Trendingmovies(){
    let [api,setApi]=useState([])
    let [search,setSearch]=useState("")
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=56ae0b492fe2fc5f33267ee4a47b2066&language=en-US").then(x=>x.json()).then(x=>setApi(x.results)).catch(()=>console.log("Failed to fetch")
        )
    },[])
    function moviesSearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=56ae0b492fe2fc5f33267ee4a47b2066`).then(x=>x.json()).then(x=>setApi(x.results)).catch(()=>console.log("Failed to fetch")
        )
    }
    let navigate=useNavigate();
    
    
  return (
    <div>
        {/*Navbar*/}
        <Navbar expand="lg" className="navbar"  >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" onClick={moviesSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Carousel*/}
    <Carousel>
                {api.map(x=>{
                    return(
                    <div key={x.id}>
                    <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} id='caro'/>
                    <div className="legend">
                    <h1 id="title">{x.title}</h1>
                    <p id='over'>{x.overview}</p>
                    <b>{x.vote_average}</b>
                    </div>
                    </div>
                    )
                })}
    </Carousel>
    {/*cards*/}
    <section style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
    {
        api.map(cards=>{
            return(
                <div key={cards.id}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
      <Card.Body>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text>
         {cards.overview}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/partmovie",{state:{cards}})} id="more">More Details</Button>
      </Card.Body>
    </Card>
                </div>
            )
        })
     }
    </section>
    </div>
  )
}


