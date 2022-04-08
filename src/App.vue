<template>
  <div id="app">
    <div v-if="login">
      <button @click="$router.push('/board')">글목록</button>
      <button @click="$router.push(`/user/${user}`)">{{user}}님의 정보</button>
      <button @click="loginOut">로그아웃</button>
    </div>
    <button v-else @click="$router.push('/login')">로그인</button>

    <main>
      <router-view @login-user="showLogin" />
    </main>
  </div>
</template>

<script>
export default {
  name : 'app',
  data : ()=>({
    user : '',
    pw : '',
    login : false
  }),
  methods : {
    //사용자 지정이벤트로 가져온 this.user값을 넣기위한 매개변수 user
    showLogin : function(user,pw){
      this.user = user;
      this.pw = pw;
      this.login = true;
    },
    //로그아웃시 user값 초기화, 메인화면으로 돌아감
    loginOut : function(){
      this.user = '';
      this.login = false;
      this.$router.push('/');
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
