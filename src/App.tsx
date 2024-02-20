import { Group } from "@mantine/core";
import "./App.css";
import Botessi from "./assets/bottesi-landing.jpg";
import { IconBrandInstagram } from "@tabler/icons-react";

function App() {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
    color: "white",
  };
  return (
    <div>
      <div style={centerDivStyle}>
        <img src={Botessi} alt="botes" width="500" />
        <Group>
          <IconBrandInstagram color="white" size={40} />
        </Group>
      </div>
    </div>
  );
}
export default App;
