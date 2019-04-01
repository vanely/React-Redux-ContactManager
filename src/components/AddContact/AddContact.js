import React, {Component} from 'react';

class AddContact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  } 

  render() {

    const {name, email, phone} = this.state;

    return(
      <section>
        <p>Add Contact</p>
        <section>
          <form onSubmit={this.onSubmit}>
            <section>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter Name..." vanlue={name} onChange={this.onChange}/>
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter Email..." value={email} onChange={this.onChange}/>
            </section>
            <section>
              <label htmlFor="phone">Phone</label>
              <input type="phone" name="phone" placeholder="555-555-5555" value={phone} onChange={this.onChange}/>
            </section>
            <input type="submit" value="Add Contact"/>
          </form>          
        </section>
      </section>
    );
  }
}

export default AddContact;