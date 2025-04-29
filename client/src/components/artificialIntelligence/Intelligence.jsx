import "./Intelligence.css";

import Sidebar from "../gemini/sideBar/SideBar";
import Main from "../gemini/main/Main";

const Intelligence = () => {
  return (
    <section className="main-div flex">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Intelligence;
