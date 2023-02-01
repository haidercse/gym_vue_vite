import login from '../../../apis/Login.js';
import router from '../../../router/index';

export const loginUser = ({
    commit
}, data) => {
    login.store(data)
        .then(response => {
            if (response.data.status == true) {
                commit("LOGIN_USER", response.data);
                // commit("SET_SUCCESS", response.data.message);

                router.push({ name: 'staff-dashboard' });
                localStorage.setItem("user", response.data.token);
            }
        }).catch(error => {
            console.log(error);
        });
}


// export const getAuthUser = ({
//     commit
// }) => {
//     login.getAuthUser()
//         .then((response) => {
//             if (response.data.status == true) {
//                 commit('SET_AUTH_USER', response.data.data)
//             }
//         }).catch(error => {
//             commit("SET_ERRORS", error.response.data.errors);
//         });

// }