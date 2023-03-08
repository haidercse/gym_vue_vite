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
    update(id, data) {
        return Api.put(`/member/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    },
    deleteById(id) {
        return Api.delete(`/member/${id }`);
    }
}