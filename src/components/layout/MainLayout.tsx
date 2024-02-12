import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";

const items: MenuProps["items"] = [
  {
    key: "001",
    label: "Dashboard-",
  },
  {
    key: "002",
    label: "Users",
  },
  {
    key: "003",
    label: "Admins",
  },
];

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
        <div style={{color:"white", padding:"5px", border:"2px solid red",height:"4rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h1>Positive University</h1>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
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
            My main content coming soon!
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
