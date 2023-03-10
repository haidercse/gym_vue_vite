import Api from "./Api";


export default {
    store(data) {
        return Api.post('/auth/login/', data);
    },

    getAuthUser() {
        return Api.get('/user/auth');
    },

    logOut() {
        return Api.post('/logout');
    }
}