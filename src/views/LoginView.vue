<template>
    <body>
        <form>
            아이디<input type="text" name="아이디" v-model="user"><br>
            패스워드<input type="password" name="패스워드"><br><br>
            <button @click="loginUser">로그인</button>
            <button @click="$router.push('/')">취소</button>
        </form>
    </body>
</template>

<script>
export default {
    name : 'LoginView',
    data : ()=>({
        user : ''
    }),
    methods : {
        loginUser : function(){
            this.$emit('login-user',this.user);
            this.$router.push('/');
        }
    }
}
</script>