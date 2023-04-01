import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import TinderCard from 'react-tinder-card';

function Home() {

  const[showModal, setShowModal] = useState(false)

  const authToken = false;

  function handleClick() {
    console.log("clicked");
    setShowModal(true)
  }

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <div className="overLay">
      <Nav  minimal={false} authToken={authToken}setShowModal={setShowModal} showModal={showModal}/>
      <div className="home">
        <h1>Swipe Right@</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal &&(
          <AuthModal setShowModal={setShowModal}/>
        )}

      </div>
      
    </div>
  );
}

export default Home;
