import React, {Component} from 'react';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  //because the action is so short we can just pass it in the tag
  // onShowClick = (e) => {
  //   this.setState({showContactInfo: !this.state.showContactInfo});
  // }

  render() {

    const {name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;

    return(
      <section>
        <h4>{name} <span onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}>+</span></h4>
        {showContactInfo ? (
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
        ): null}
      </section>
      );
    }
  }
  
export default Contact;