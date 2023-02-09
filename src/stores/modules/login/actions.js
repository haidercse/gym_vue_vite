import login from '../../../apis/Login.js';

import router from '../../../router/index';

export const loginUser = ({
    commit
}, data) => {
    login.store(data)
        .then(response => {
            if (response.data.status == true) {
                commit("LOGIN_USER", response.data);
                commit("SET_SUCCESS", response.data.message);
                localStorage.setItem("user", response.data.token);
                window.location.href = '/staff/dashboard';
            }
        }).catch(error => {

            if (error.response.data.status == false) {
                commit("SET_ERRORS_MESSAGE", error.response.data.message);
            }
            if (error.response.data.errors) {
                commit("SET_ERRORS", error.response.data.errors);
            }

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

export const logout = ({
    commit
}) => {
    login.logOut()
        .then(response => {
            if (response.data.status == true) {
                commit('LOGOUT', response.data.message)
                localStorage.removeItem("user");
                router.push({
                    name: 'staff-login'
                });
                window.location.reload();
            }
        }).catch(error => {
            console.log(error.response.status);
            if (error.response.status == '401') {
                localStorage.removeItem("user");
                router.push({
                    name: 'staff-login'
                });
                window.location.reload();
            }
        })
}