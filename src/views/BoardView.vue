<template>
    <div id="board">
        <h1>게시글 목록입니다.</h1>
        <a v-for="n in num" :key="n">
            <router-link :to="`/${n}`">{{n}}</router-link> |
        </a>
        <p v-for="i in memo" :key="i">
            {{i.memo}}
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
import dataJson from "@/assets/data.json"

export default {
    name : 'BoardView',
    data : ()=>({
        num : dataJson.board.length,
        memo : dataJson.board
    })
}
</script>