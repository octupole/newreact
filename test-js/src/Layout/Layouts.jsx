import React from 'react';
import bgimage from '../Assets/images/theperfectloaf.jpg';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const styleImg={
  fontFamily: "'Open Sans', sansSerif",
    position: 'relative',
    left: 0,
    top: '0px',
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    opacity: '0.8',
    backgroundImage: "url("+bgimage+")",
    height: 'cover',
    color: 'black',
    textShadow: '10px 10px 10px white'
  }
const Layout = ( props ) => (
    <>
    <div style={styleImg}>
      <Container>
    <h1 className="text-center"><b>Lievito Madre</b></h1><br/>
    <h2 className="text-center"><b>Calcolo Ingredienti e Ricette</b></h2>    
    </Container>
    </div>
    <Container>{props.children}</Container>
            
    </>
);

export default Layout;