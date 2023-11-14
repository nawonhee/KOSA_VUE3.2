<template lang="">
        생명주기용 메서드
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Lifecycle',
        data() {
            
        },
        beforeCreate(){ //DOM트리 완성전 DOM 접근불가
            console.log("하위컴포넌트 beforeCreate")
        },
        created(){ //DOM트리 완성후
            console.log("하위컴포넌트 created")
            const url = "http://192.168.1.12:8888/back2/productlistjson?currentPage=1"
            axios
            .get(url)
            .then((response)=>{
                console.log(response.data)
            })
        },
        beforeMount() { //template태그 실행(렌더링 전) 후에 호출됨
            console.log("하위컴포넌트 beforeMount")
        },
        mounted() {  //렌더링 후
            console.log("하위컴포넌트 mounted")
        },
        beforeUpdate() { //데이터(데이터옵션, props옵션) 변경되고 렌더링 전
            console.log("하위컴포넌트beforeUpdate")
        },
        updated() {  //데이터(데이터옵션, props옵션) 변경되고 렌더링 후
        //함수 내부에서 데이터를 변경하면 beforeUpdate -> updated->beforeUpdate ...무현반경
            console.log("updated")
        },
        props: ["p"]
    }
</script>
<style lang="">

</style>