import React, { useEffect } from "react";
import "./App.css";
import  {SmurfCard}  from "./SmurfCard";
import { AddSmurfForm } from "./AddSmurfForm";

import { connect } from 'react-redux'
import { fetchSmurfs, postSmurf } from '../utils/actions'



const App = (props) => {

  useEffect(() => {
    props.fetchSmurfs()
  }, [])
  
    return (
      <div className="App">
        <h1>Smurfbook</h1>
        {props.isLoading ? <h4>Loading the Smurfs...</h4> : null}
            {props.error ? (
                <h4 className='danger'>
                    Uh oh... something happened 😟 {props.error}
                </h4>
            ) : null}
        {props.smurfs.map( smrf => (
          <SmurfCard
          smurf={smrf}
          key={smrf.id}
          />
        ))}
        
        <AddSmurfForm/>
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurfs, postSmurf})(App);
