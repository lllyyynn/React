import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { withRouter } from 'react-router-dom';
class App extends React.Component{
 
/*   handleInputOnChange = (event) => {
    this.setState({ inputText: event.target.value });
  }; */

  render() {
    return (
      <>
      <Layout handleInputKeyUp={this.handleInputKeyUp}>
      </Layout>
      </>
    )
  }
}


export default App;
