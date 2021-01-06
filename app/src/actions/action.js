import axios from "axios";

export const getGhibiApi = () => dispatch => {
    dispatch({type : "FETCHING_API_START"});
    axios
    // .get("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
    .get("https://ghibliapi.herokuapp.com/films/")
    .then(res => {
    console.log("testing api : ", res.data);
    dispatch({type: "FETCHING_API_SUCCESS", payload: res.data})
  })
    .catch(err => {
    console.log("we've failed :", err);
    dispatch({type: "FETCHING_API_FAIL", payload: err.data})
  });
}