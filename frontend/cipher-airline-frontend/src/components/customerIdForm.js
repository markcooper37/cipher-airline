import React from 'react';
    
    export default class CustomerIdForm extends React.Component {
      constructor(props) {
        super(props);
    
        this.state = {
          customer: {
            customerId: props.customerId,
            status: props.status
          }
        }
      }
    

    handleCustomerIdChanged(event) {
        var customer        = this.state.customer;
        customer.customerId  = event.target.value;
    
        this.setState({ customer: customer });
      }
    
    handleStatusChanged(event) {
        var customer    = this.state.customer;
        customer.status = event.target.value;
    
        this.setState({ customer: customer });
      }
    
      handleButtonClicked() {
        console.log(this.state.customer);

        window.location.href = 'http://localhost:3000/booking-details';
      }


    render() {
        return (
          <div>
            <label>
              Customer ID: 
            </label>
            <input type="text" value={this.state.customer.customerId} onChange={this.handleCustomerIdChanged.bind(this)}/>
            <br/>
            <label>
              Status:
            </label>
            <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
              <option value="PENDING">
                Pending
              </option>
              <option value="APPROVED">
                Approved
              </option>
            </select>
            <hr/>
            <button onClick={this.handleButtonClicked.bind(this)}>
              Submit
            </button>
          </div>
        );
      }
    }