import { CalendarOutlined, ClockCircleOutlined, CodeSandboxOutlined, FileOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { BiBookAlt } from 'react-icons/bi';
import { IoNutritionSharp } from 'react-icons/io5';
import './App.css';
import Dashboard from './components/Dashboard';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header> */}
        <Layout>
          <Sider width={200} className="site-layout-background1">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100vh', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<CodeSandboxOutlined />} title="University">
                <Menu.Item key="1"><HomeOutlined style={{marginRight: 10}} />Dashboard</Menu.Item>
                <Menu.Item key="2"><CalendarOutlined style={{marginRight: 10}} />Calendar</Menu.Item>
                <Menu.Item key="3"><UserOutlined style={{marginRight: 10}} />Teachers</Menu.Item>
                <Menu.Item key="4"><BiBookAlt style={{marginRight: 10}} />Course</Menu.Item>
                <Menu.Item key="5"><ClockCircleOutlined style={{marginRight: 10}} />Attendance</Menu.Item>
                <Menu.Item key="6"><FileOutlined style={{marginRight: 10}} />Assignment</Menu.Item>
                <Menu.Item key="7" style={{marginTop: 240, fontWeight: 700}}>
                  <IoNutritionSharp style={{marginRight: 10}} />
                  David Smith
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
