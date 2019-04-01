import React, {Component} from 'react';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }

  render() {

    const {name, email, phone} = this.props.contact;

    return(
      <section>
        <h4>{name} <span onClick={() => this.setState({showContactInfo: this.state.showContactInfo})}>+</span></h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </section>
    );
  }
}