<template>
    <section>
        <router-view></router-view> <!--라우터가 결과를 보여줄 영역-->
    </section>
</template>
<script>
    export default{
        name: 'Section'
    }
</script>
<style scoped>
section{
    text-align: center;
}
section>div.product>div>ul{
    list-style-type: none;
}
</style>