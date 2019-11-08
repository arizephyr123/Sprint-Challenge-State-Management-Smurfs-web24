import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addNewSmurf } from '../actions';
import SmurfForm from "./SmurfForm";

const SmurfList = props => {
  console.log("SmurfList props:", props);
  return (
    <>
    <button onClick={props.fetchSmurfs}>Get Smurfs From API</button>
    <div>
    <SmurfForm addNewSmurf={props.addNewSmurf}/>
    </div>
      {props.smurfsData.map(smurf => {
        return (
          <div  key={smurf.id}>
            <h4>Name: {smurf.name}</h4>
            <h5>Age: {smurf.age}</h5>
            <h5>Height: {smurf.height}</h5>
            <h5>Id: {smurf.id}</h5>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfsData: state.smurfsData
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addNewSmurf }
)(SmurfList);
