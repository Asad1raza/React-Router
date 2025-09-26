import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about"); // 
  }

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to About Page</button>
    </>
  );
}

export default Home;
