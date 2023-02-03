import member from '../../../apis/Member';

import router from '../../../router/index';

export const getAllMember = ({ commit }) => {
    member.all()
        .then(response => {
            if (response.data.status == true) {
                commit("SET_MEMBER", response.data.data.data);
            }
        }).catch(error => {
            console.log(error);
        })
}