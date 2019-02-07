import React, { Component } from "react";
import Ticket from "./Ticket";
import { connect } from "react-redux";
import dummyTicketGenerator from "../data/dummyTickets";

class Tickets extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    // let ticket = '';
    let ticketsArray = [];
    for (let i = 0; i < 3; i++) {
      const dummy = dummyTicketGenerator(
        this.props.origin,
        this.props.destination,
        Math.random()
      );
      if (this.props.origin && this.props.destination) {
        ticketsArray.push(dummy);
      }
    }

    console.log(ticketsArray);

    const tickets = ticketsArray.map(ticket => {
      return (
        <div key={ticket.price} className="item">
          <Ticket ticket={ticket} />
        </div>
      );
    });

    if (tickets.length === 0) {
      return (
        <div className="message">
          Select Origin and Destination Country in order to see offers!
        </div>
      );
    } else {
      return <div className="ui list">{tickets}</div>;
    }
  }
}

const mapStateToProps = state => ({
  origin: state.route.origin,
  destination: state.route.destination
});

export default connect(mapStateToProps)(Tickets);
