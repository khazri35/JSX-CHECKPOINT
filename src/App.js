import React from 'react';
import "./mystyles.css";
import TheImage  from './assets/imageInSrc.jpg';
import Video from './myvideo/TheObstacles.mp4';


function App() {
  const Title = "Khazri Naim";

  return (

  <div className="body" style={{border:"solid1px blackmax-width:100vw"}}>
    <h1 className="title red">{Title}</h1>
    <br/>
    <img src="/imageInPublic.jpg" alt="PubImage" />
    <br />
    <img src={TheImage} alt="SrcImage" />
    <br/>
    <video src={Video} width="320" height="240" controls></video>
  </div>
  );
}

export default App;
