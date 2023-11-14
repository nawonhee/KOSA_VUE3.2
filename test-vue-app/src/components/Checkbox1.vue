<template lang="">
        <!--<li><input type="checkbox" v-model="checked"/>선택</li>--> <!--여기서 chk는 안 됨-->
        <!-- <li><input type="checkbox" v-bind:checked="chk"/>{{name}}</li> -->
        <li><input type="checkbox" v-bind:checked="p.checked"/>{{p.prodName}}</li>
        <input type="text" v-model="p.prodName">
</template>
<script>
    export default {
        name: 'Checkbox1',
        data() {
            checked : false
        },
        // props : ["chk", "name"] //읽기 전용
        // props:{  //부모가 전달해준 자료를 자식쪽에서 유효성검사하하기
        //     chk:{
        //         type : Boolean,
        //         default : false,
        //     },
        //     name:{
        //         validator(v){
        //             return typeof(v) !== 'string'? false;
        //                     v.trim().length>=4 ? true  : false
        //         }
        //     }
        // }
        props: ["p"]
    }
</script>
<style lang="">

</style>