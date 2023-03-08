import member from '../../../apis/Member';

import router from '../../../router/index';

export const getAllMember = ({
    commit
}) => {
    member.all()
        .then(response => {
            if (response.data.status == 200) {
                commit("SET_MEMBER", response.data.data);
            }
        }).catch(error => {
            console.log(error);
        })
}
export const getMember = ({ commit }, id) => {
    member.getMemberById(id)
        .then(response => {
            commit("SET_GET_MEMBER", response.data.data);
        })
}
export const memberSubmit = ({ commit }, data) => {
    member.store(data)
        .then(response => {
            console.log(response);
            if (response.data.status == true) {
                commit("SET_SUBMIT_MEMBER", response.data.data);
            }
        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        })
}

export const memberEdit = ({ commit }, memberId, data) => {
    alert(memberId);
    member.update(memberId, data)
        .then(response => {
            console.log(response);
            if (response.data.status == true) {
                commit("SET_SUBMIT_MEMBER", response.data.data);
            }
        }).catch(error => {
            commit("SET_ERRORS", error.response.data.errors);
        })

}
export const memberDelete = ({
    commit
}, memberId) => {
    member.deleteById(memberId)
        .then(response => {
            if (response.data.status == true) {
                commit("SET_SUCCESS", response.data.message);
            }
        }).catch(error => {
            console.log(error);
        });
}