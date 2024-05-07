<template>
  <div class="home-page">
    <h2>Welcome, {{ username }}!Remember to protect your cookies!!</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getUser']),
    username() {
      return this.getUser ? this.getUser.username : '';
    }
  },
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      this.logoutUser();
      // Redirect to login page after logout
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.home-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: linear-gradient(to bottom right, #ab7abc, #7700ff);
  /* Updated background to a gradient */
}

h2 {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #7700ff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #2c0953;
}
</style>

