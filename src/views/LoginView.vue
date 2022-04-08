<template>
    <body>
        <form>
            아이디<input type="text" name="아이디" v-model="user"><br>
            패스워드<input type="password" name="패스워드" v-model="pw"><br><br>
            <button @click="loginUser">로그인</button>
            <button @click="$router.push('/')">취소</button>
        </form>
    </body>
</template>

<script>
export default {
    name : 'LoginView',
    data : ()=>({
        user : '',
        pw : ''
    }),
    methods : {
        loginUser : function(){
            //사용자 지정 이벤트로 로그인값을 넘겨줌
            this.$emit('login-user',this.user,this.pw);
            //로그인이 되면 메인화면으로 넘어감
            this.$router.push('/');
        }
    }
}
</script>