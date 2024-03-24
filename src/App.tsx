import "./App.css";
import Botessi from "./assets/bottesi-landing.jpg";

function App() {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
    color: "white",
  };
  const textStyle = {
    margin: "10px",
  };
  return (
    <div>
      <div style={centerDivStyle}>
        <img src={Botessi} alt="botes" width="500" />
        <div>
          <div style={textStyle}>
            <span>Coming Soon...</span>
          </div>
          <div style={textStyle}>
            <span>
              We are tirelessly working to get our operations off the ground
              here in New Orleans
            </span>
          </div>
          <div style={textStyle}>
            <span>Depp in our incantations.</span>
          </div>
          <div style={textStyle}>
            <span>Thank you for your patience, love and support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
