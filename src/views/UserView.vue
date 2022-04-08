<template>
    <div class="user">
        <h1>{{userName}}님의 정보 페이지 입니다.</h1>
    </div>
</template>

<script>

export default {
    name : 'UserView',
    computed : {
        userName : function(){
            return this.$route.params.user
        },
    }
}
</script>