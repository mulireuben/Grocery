import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
