import { createStore } from 'vuex'
import login from './modules/login'
import errors from './modules/errors'
import success from './modules/success'

// Create a new store instance.
const store = createStore({
    modules: {
        login,
        errors,
        success
    }

});

export default store;