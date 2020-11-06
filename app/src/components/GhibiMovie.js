import React from "react";
import {connect} from "react-redux";
import {getGhibiApi} from "../actions/action";

const GhibiMovie = props =>{ 
    console.log("What props are we receiving here? : ", props);
    return(
        <div className = "ghibi-movie-list">
            <h1>testing :</h1>
            {/* mapping */}
            {/* {props.ghibiList.map(item => {
                return(
                    <div className = "ghibi-movie">
                        <h2>{props.item.title}</h2>
                    </div>
                )
            })} */}
             {
                props.ghibiList.map((item) => (
                    <div className = "ghibi-movie">
                        <p>{item.title}</p> 
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        loading : state.false, 
        ghibiList : state.ghibiList,
        errors : state.errors
    }
}
export default connect(mapStateToProps,{getGhibiApi})(GhibiMovie);