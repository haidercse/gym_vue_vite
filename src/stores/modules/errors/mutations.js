export const SET_ERRORS = (state, errors) => {
    state.is_error = true;
    state.errors = errors;
}
export const SET_ERRORS_MESSAGE = (state, errors) => {
    state.is_error = true;
    state.error_message = errors;
}