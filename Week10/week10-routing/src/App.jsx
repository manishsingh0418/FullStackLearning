import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NotFound() {
  return <div>404 - Not Found</div>;
}

function Class11Program() {
  return <div>NEET program for Class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      NEET program for Class 12th
      <button onClick={redirectUser}>Go to Home</button>
    </div>
  );
}
function Home() {
  return <div>Welcome to the NEET Coaching Program</div>;
}
export default App;
