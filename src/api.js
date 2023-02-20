import Axios from 'axios';

export const getData = async() => {
    await Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/api/images",
    })
    .then((res) => {
        //   console.log(res.data)
        return res
      });
  };

