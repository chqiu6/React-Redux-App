import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {getGhibiApi} from "../actions/action";

const GhibiMovie = (props) =>{ 
    useEffect(() => {
        props.getGhibiApi();
    },[]);
    // const [movieTest, setMovieTest] = useState([]);
    // setMovieTest(ghibiList);
    console.log("What props are we receiving here? : ", props);
    // console.log("is movietest working", movieTest);
    return(
        <div className = "ghibi-movie-list">
            {/* <h1>testing :</h1> */}
            
             {
                props.ghibiList.map((item,i) => (
                    <div className = "ghibi-movie" key = {item.id}>
                        <p>#{i + 1}</p>
                        <p>Title : {item.title}</p> 
                        <p>Description : {item.description}</p>
                        <p>Director : {item.director}</p>
                        <p>Producer : {item.producer}</p>
                        <p>Release Date : {item.release_date}</p>
                        <p>RT Score : {item.rt_score}</p>
                    </div>
                ))
            }
            {/* <button onClick = {getGhibiApi}>Button action</button> */}
            {/* <button onClick = {() => {setMovieTest(ghibiList);}}>Button</button> */}
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