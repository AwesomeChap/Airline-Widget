import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAirports, chooseAirport } from "../actions/actions";
import Select from "react-select";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      origin: "",
      destination: ""
    };
  }

  componentDidMount() {
    this.props.fetchAirports();
    const { origin, destination } = this.props;
    this.setState({ origin, destination });
  }

  handleChangeOrigin = origin => {
    this.setState({ origin });
    this.props.chooseAirport("origin", origin);
  };

  handleChangeDestination = destination => {
    this.setState({ destination });
    this.props.chooseAirport("destination", destination);
  };

  render() {
    return (
      <>
        <i className="huge space shuttle icon" />
        <h2>Pandora Airlines</h2>
        {/*<div className="ui inverted divider" />*/}
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <div className="ui labeled input">
                <div className="ui red label">From</div>
                <Select
                  className="select-input"
                  name="origin"
                  value={this.state.origin}
                  placeholder="Select Country"
                  options={this.props.airports}
                  onChange={this.handleChangeOrigin}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui labeled input">
                <div className="ui red label">
                  {" "}
                  <span className="T">T</span>To<span className="T">T</span>
                </div>
                <Select
                  className="select-input"
                  name="destination"
                  value={this.state.destination}
                  placeholder="Select Country"
                  options={this.props.airports}
                  onChange={this.handleChangeDestination}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  airports: state.airports.map(airport => ({
    value: airport.code,
    label: `${airport.city} - ${airport.country} (${airport.code})`
  })),
  origin: state.route.origin,
  destination: state.route.destination
});

export default connect(
  mapStateToProps,
  { fetchAirports, chooseAirport }
)(Info);
