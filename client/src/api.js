import axios from "axios";

export default {
    stories: {
        getByPath: (path) => {
            return axios.get(`/api/stories/${path}`)
                .then((res) => res.data)
                .catch((err) => { throw err });
        }
    }
};