import Nav from "../components/Nav";

function Home() {
  const authToken = false;

  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <Nav  minimal={false}/>
      <div className="home">
        <h1>Swipe Right@</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
}

export default Home;
