import React, { Component } from 'react';
import Contacts from '../components/Contacts/Contacts';
import AddContact from '../components/AddContact/AddContact';

class App extends Component {

  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <section className="App">
        <AddContact/>
        <Contacts/>
      </section>
    );
  }
}

export default App;
