const axios = require('axios').default;

const newPost = {
  name: "morpheus",
  job: "leader",
  id: "26",
  createdAt: "2020-11-12T04:18:06.174Z"
};

const sendPostRequest = async () => {
    try {
        const resp = await axios.post('https://reqres.in/api/users/2',newPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendPostRequest();