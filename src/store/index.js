import { createStore } from 'vuex';
import Cookies from 'js-cookie';

export default createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            Cookies.set(`username: ${user.username},password: ${user.password}`, `username: ${user.username},password: ${user.password}`, { expires: 7 }); // Store user data in cookies for 7 days

        },
        clearUser(state) {
            state.user = null;
            Cookies.remove('user'); // Remove user data from cookies
        }
    },
    actions: {
        loginUser({ commit }, user) {
            commit('setUser', user);
        },
        logoutUser({ commit }) {

            commit('clearUser');
        }
    },
    getters: {
        getUser(state) {
            return state.user || Cookies.getJSON('user') || null; // Return user from state or cookies
        },
        isLoggedIn(state) {
            return state.user !== null || Cookies.getJSON('user') !== undefined; // Check if user is logged in
        }
    }
});
