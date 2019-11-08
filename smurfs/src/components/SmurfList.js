import React from 'react';
import { connect } from 'react-redux';

const SmurfList = props => {
    return(
        <div>
            <h4>Name: </h4>
            <h5>Age:</h5>
            <h5>Height:</h5>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        smurfsData: state.smurfsData
    }

};

export default connect(mapStateToProps, {})(SmurfList);