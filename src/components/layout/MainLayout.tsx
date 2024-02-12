import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { sidebarItemsGenetor } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;
//No need now
// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create-admin",
//         label: <NavLink to={"/admin/create-admin"}>Create-admin</NavLink>,
//       },
//       {
//         key: "Create-faculty",
//         label: <NavLink to={"/admin/create-faculty/"}>Create-faculty</NavLink>,
//       },
//       {
//         key: "Create-student",
//         label: <NavLink to={"/admin/create-student/"}>Create-student</NavLink>,
//       },
//     ],
//   },
//   {
//     key: "003",
//     label: "Admins",
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
            border: "2px solid red",
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
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 0,
              minHeight: 360,
            }}
          >
            {/* all data */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
