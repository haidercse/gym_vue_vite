import { createStore } from 'vuex'
import login from './modules/login'
import errors from './modules/errors'
import success from './modules/success'
import member from './modules/member'

// Create a new store instance.
const store = createStore({
    modules: {
        login,
        errors,
        success,
        member
    }

});

export default store;