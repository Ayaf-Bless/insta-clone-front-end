import Login from "../screens/Loggin";

const Home = () => {
  const isLoggedIn = true;
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
};
export default Home;
