import React, {Component} from 'react';
import Contact from '../Contact/Contact';

class Contacts extends Component {

  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 0,
          name:"John Doe",
          email: "jdoe@gmail.com",
          phone: '555-555-5555' 
        },
        {
          id: 1,
          name: "Anne Doe",
          email: "Adoe@gmail.com",
          phone: '666-666-6666'
        },
        {
          id: 2,
          name: "Hanz shmoe",
          email: "shmoe@gmail.com",
          phone: '777-777-7777'
        },
      ]
    };
  }

  render() {

    const {contacts} = this.state;

    return(
      <React.Fragment>
        {
          contacts.map(contact => {
            // passing single contacts item down to contact as contacts are iterated over
            <Contact key={contact.id} contact={contact}/>
          })
        }
      </React.Fragment>
    );  
  }
}

export default Contacts;