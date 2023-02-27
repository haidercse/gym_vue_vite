import Api from "./Api";


export default {
    all() {
        return Api.get('/member');
    },
    store(data) {
        return Api.post('/member', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

    },
    getMemberById(id) {
        return Api.get(`/member/${id}`);
    },
    deleteById(id) {
        return Api.delete(`/member/${id }`);
    }
}