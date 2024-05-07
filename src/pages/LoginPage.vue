<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['loginUser']),
    login() {
      // Dispatch loginUser action
      this.loginUser({ username: this.username, password: this.password })
          .then(() => {
            // Redirect if login successful
            if (this.isLoggedIn) {
              // Redirect to home
              this.$router.push('/home');
            } else {
              // Handle login failure
              console.error('Login failed');
            }
          })
          .catch(error => {
            console.error('Error during login:', error);
          });
    }
  }
};
</script>

<style >
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: linear-gradient(to bottom right, #b883ca, #7700ff);
  /* Updated background to a gradient */
}
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 92%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #2c0953;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #5100b3;
}
</style>
