import axios from "axios";

export const GET_TODO = "GET_TODO";

export const getTodo = () => {
  return (dispatch) => {
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then(function (response) {
        // console.log(response.data.filter((item) => item.status === 1));
        dispatch({
          type: GET_TODO,
          payload: {
            datadone: response.data.filter((item) => item.status === 1),
            datagone: response.data.filter((item) => item.status === 0),
            errorMassage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TODO,
          payload: {
            data: false,
            errorMassage: error.massage,
          },
        });
      });
  };
};
