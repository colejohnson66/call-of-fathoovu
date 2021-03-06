import axios from "axios";

export default {
    stories: {
        getByPath: (path) => {
            return axios.get(`/api/stories/${path}`)
                .then((res) => res.data)
                .catch((err) => { throw err });
        }
    },

    user: {
        create: (username, password) => {
            let data = {
                username: username,
                password: password
            };
            return axios.post("/api/user/create", data)
                .then((res) => res)
                .catch((err) => err);
        },
        getAchievements: (username, password) => {
            let data = {
                username: username,
                password: password
            };
            return axios.post("/api/user/achievements", data)
                .then((res) => res)
                .catch((err) => err);
        },
        addAchievement: (username, password, achievement) => {
            let data = {
                username: username,
                password: password,
                achievement: achievement
            };
            return axios.post("/api/user/achievements/add", data)
                .then((res) => res)
                .catch((err) => err);
        }
    }
};