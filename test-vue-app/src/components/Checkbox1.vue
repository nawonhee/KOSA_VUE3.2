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
        props: ["p"]
    }
</script>
<style lang="">

</style>