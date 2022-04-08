<template>
    <div class="page">
        <!--처음부터 변수를 두지말고 값으로 둔다음에 바꾸기-->
        <h2>{{$route.params.page}}페이지 입니다.</h2>
        <p>{{showMemo}}</p>
    </div>
</template>

<script>
import data from "../assets/data.json";

export default {
    name : 'PageComponent',
    data : ()=>({
        data : data,
    }),
    computed : {
        showMemo : function(){
            return this.data.board[this.$route.params.page-1].memo
        }
    }
}
</script>