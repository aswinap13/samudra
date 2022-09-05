import './App.css';
import { FiSearch,FiSettings,FiBell} from "react-icons/fi";
import { IoIosAddCircleOutline} from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';





function App() {  
  const [isDis, setDis] = useState('AllPho');  



    function AllPho(){
      return(
        <>
            <div className='gallery'>
                <div className='day col-lg-2 col-md-3'>
                  <h3>Today</h3>
                  <p>Friday, 26th August 2022</p>
                </div>
                <Container className='container'>
                  <Row>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg1' src={require('./assets/11.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Seg_12399.jpg</figcaption>
                    </Col >
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg2' src={require('./assets/12.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>New_house.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg3' src={require('./assets/13.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Barakpore valley.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg4' src={require('./assets/14.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Kitchen sansudan.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg5' src={require('./assets/15.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Bridge.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg3' src={require('./assets/16.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Abstract_44533</figcaption>
                    </Col>
                  </Row>
                </Container>
                  
            </div>
            <div className='gallery'>
              <div className='day col-lg-2'>
                <h3>This week</h3>
                <p>21 to 25 August 2022</p>
              </div>
              <Container className='container2 col-lg-10'>
                <Row className='row2'>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg1' src={require('./assets/21.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Seg_12399.jpg</figcaption>
                  </Col >
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg4' src={require('./assets/22.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>New_house.jpg</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg2' src={require('./assets/23.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Barakpore valley.jpg</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg3' src={require('./assets/24.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Kitchen sansudan.jpg</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg3' src={require('./assets/25.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Bridge.jpg</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg1' src={require('./assets/26.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Abstract_44533</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg1' src={require('./assets/27.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Abstract_44533</figcaption>
                  </Col>
                  <Col className='col' sm={6} md={4} lg={2}>
                    <img className='imge colImg3' src={require('./assets/28.jpg')} alt="Trulli"></img>
                    <figcaption className='caption'>Abstract_44533</figcaption>
                  </Col>
                </Row>
              </Container>
                
            </div>
        </>
      );
    }
    function Archi(){
      return (
        <>
          <div className='gallery'>
                <div className='day col-lg-2'>
                  <h3>Today</h3>
                  <p>Friday, 26th August 2022</p>
                </div>
                <Container className='container'>
                  <Row>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg2' src={require('./assets/12.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Seg_12399.jpg</figcaption>
                    </Col >
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg4' src={require('./assets/14.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>New_house.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg2' src={require('./assets/15.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Barakpore valley.jpg</figcaption>
                    </Col>
                  </Row>
                </Container>        
            </div>
            <div className='gallery'>
                <div className='day col-lg-2'>
                  <h3>This week</h3>
                  <p>21 to 25 August 2022</p>
                </div>
                <Container className='container'>
                  <Row>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg1' src={require('./assets/21.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Seg_12399.jpg</figcaption>
                    </Col >
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg4' src={require('./assets/22.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>New_house.jpg</figcaption>
                    </Col>
                    <Col className='col' sm={6} md={4} lg={2}>
                      <img className='imge colImg3' src={require('./assets/28.jpg')} alt="Trulli"></img>
                      <figcaption className='caption'>Barakpore valley.jpg</figcaption>
                    </Col>
                  </Row>
                </Container>        
            </div>
        </>
      );
    }  
      
    const clickHandle=(e)=>{
      const clname=e.target.className
      setDis(clname)
    }


  return (
    <div className="App">
      {/* HEADER */}
      <div className='headDiv'>
        <div className='headleft'>
          <FiSettings/>          
          <FiBell className='ic2'/>
        </div>
        <div className='headcenter'>
          <ul className='list'>
            <li className='active'>Timeline</li>
            <li>Albums</li>
            <li>Events</li>
            <li>Favourites</li>
          </ul>
        </div>
        <div className='headright'>
          <IoIosAddCircleOutline stroke='white'/>
          <p>Upload Photos</p>
        </div>
      </div>
      <div className='libDiv'>
        <p>Library</p>
        <div className='libright'>
          <p >Search all photos</p>
          <FiSearch className='ic3'/>
        </div>
      </div>
      <div className='category'>
        <ul className='cat-list'>
          <li  className='AllPho cat-active ' onClick={clickHandle}>All Photos</li>
          <li className='Archi'  onClick={clickHandle}>💰Architecture </li>
          <li>🌄Kashmir</li>
          <li>⛵Sea side</li>
          <li>🐟Lake View</li>
          <li> 
            Italy
          </li>
          <li>China</li>
          <li>Argentina</li>
        </ul>
        <div className='new-cat'>
          <IoIosAddCircleOutline stroke='white'/>
          <p>New Category</p>
        </div>
      </div>
      {isDis==='Archi' ? <Archi/> : <AllPho/>}



    </div>
  );
}

export default App;
