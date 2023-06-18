import React from 'react';
import bgimage from '../Assets/images/cool-background_black.png';
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
    color: 'white',
    textShadow: '10px 10px 10px grey'
  }
const Layout = ( props ) => (
    <>
    <div style={styleImg}>
      <Container>
    <h1 className="text-center"><b>My React Web Site</b></h1>
    <h2 className="text-center"><b>This is Just a Test</b></h2><br/>    
    </Container>
    </div>
    <Container>{props.children}</Container>
            
    </>
);

export default Layout;