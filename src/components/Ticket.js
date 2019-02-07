import React from "react";

const Ticket = props => (
  <>
    <div className="ui divider" />
    <div className="item">
      <div className="ui middle aligned grid">
        <div className="three wide column">
          {" "}
          <h4 className="ui red large label">{props.ticket.airline}</h4>{" "}
        </div>
        <div className="four wide column">
          <p>
            <b>{props.ticket.origin}</b>{" "}
            <span className="time">{props.ticket.timeA}</span>
          </p>{" "}
          <p>{props.ticket.dateA}</p>{" "}
        </div>
        <div className="two wide column">
          <i className="arrow right icon" />
        </div>
        <div className="four wide column">
          <p>
            <b>{props.ticket.destination}</b>{" "}
            <span className="time">{props.ticket.timeB}</span>
          </p>{" "}
          <p>{props.ticket.dateB}</p>{" "}
        </div>
        <div className="three wide column">
          <p class="ui red  large right ribbon label">${props.ticket.price}</p>
        </div>
      </div>
    </div>
  </>
);

export default Ticket;
