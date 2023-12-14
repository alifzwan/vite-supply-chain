import { theme } from "antd";
import "./project.scss";
import ProjectSideBar from "./projectsidebar/projectSideBar/ProjectSideBar"



function Project() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="project-main-container">
        <div className="menu-bar">
          <ProjectSideBar />
        </div> 
    </div>
  );
}

export default Project;
