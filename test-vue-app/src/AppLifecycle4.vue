<template lang="">
    <Lifecycle/>
</template>
<script>
    import Lifecycle from "./components/Lifecycle.vue"
    export default{
        name:'App1',
        components : {Lifecycle},
        data(){

        },
        methods:{
            
        },
        beforeCreate(){ //DOM트리 완성전 DOM 접근불가
            console.log("beforeCreate")
        },
        created(){ //DOM트리 완성후
            console.log("created")
            
        },
        beforeMount() { //template태그 실행(렌더링 전) 후에 호출됨
            console.log("beforeMount")
        },
        mounted() {  //렌더링 후
            console.log("mounted")
        },
        beforeUpdate() { //데이터(데이터옵션, props옵션) 변경되고 렌더링 전
            console.log("beforeUpdate")
        },
        updated() {  //데이터(데이터옵션, props옵션) 변경되고 렌더링 후
        //함수 내부에서 데이터를 변경하면 beforeUpdate -> updated->beforeUpdate ...무현반경
            console.log("updated")
        },
        beforeUnmount() {  //내려갈 때, 데이터 변경 감지되면 atch 리ㅏ
            console.log("beforeUnmount")
        },
        unmounted() { 
            console.log("unmounted")
        },
    }
</script>
<style lang="">
</style>