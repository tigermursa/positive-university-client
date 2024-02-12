import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenetor } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";


const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          padding: "5px",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Positive University</h1>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItemsGenetor(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
