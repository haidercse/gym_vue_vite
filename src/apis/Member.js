import Api from "./Api";


export default {
    all() {
        return Api.get('/member');
    },

    deleteById(id) {
        return Api.delete(`/member/${id}`);
    }
}