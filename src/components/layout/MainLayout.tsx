import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;
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
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header>
          {/* logout */}
          <Button onClick={handleLogOut}>Logout</Button>
        </Header>
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
      </Layout>
    </Layout>
  );
};

export default MainLayout;
