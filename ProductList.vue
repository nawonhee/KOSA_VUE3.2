<template lang="">
    <div class="productlist">
        <h3>상품목록</h3>
        <ProductItem :p="p"  
            v-if="pageGroup" 
            v-for="p in pageGroup.list" 
            :key="p.prodNo"/>
        <PageGroup
            v-if="pageGroup" :pg="pageGroup" 
            :path="/productlist/"
            :currentPage="$route.params.currentPage?$route.params.currentPage: 1"
            :start="pageGroup.startPage" 
            :end="pageGroup.endPage"
            :total="pageGroup.totalPage"
        />
    </div>
</template>
<script>
import ProductItem from './ProductItem.vue'
import PageGroup from './PageGroup.vue'
import axios from 'axios'
export default {
    name: 'ProductList',
    components: { ProductItem, PageGroup },
    data() {
        return {
            currentPage: 1,
            pageGroup: null,
        }
    },
    methods: {
        //----페이지그룹의 페이지(ex: [1] [2] [NEXT])객체가 클릭되었을 때 할 일 START----   
        axiosHandler() {
            const url = `${this.backURL}/productlistjson?currentPage=${this.currentPage}`
            axios.get(url)
            .then(response=>{
                this.pageGroup = response.data
                /*
                {
    "list": [
        {
            "prodNo": "D0001",
            "prodName": "요거트",
            "prodPrice": 3000
        },
        {
            "prodNo": "D0002",
            "prodName": "블랙티",
            "prodPrice": 3000
        },
        {
            "prodNo": "D0003",
            "prodName": "딸기주스",
            "prodPrice": 1000
        }
    ],
    "totalCnt": 11,
    "currentPage": 2,
    "totalPage": 4,
    "startPage": 1,
    "endPage": 2
}*/
            })
        }
        //----페이지그룹의 페이지(ex: [1] [2] [NEXT])객체가 클릭되었을 때 할 일 END----
    },
    watch: {
        //----라우터값이 변경되었을 때 할 일 START----
        $route(newRoute, oldRoute) {
            console.log("라우터값이 변경" + newRoute.path + "," + oldRoute.path)
            if (newRoute.params.currentPage) {
                this.currentPage = newRoute.params.currentPage
            } else {
                this.currentPage = 1
            }
            this.axiosHandler(this.currentPage)
        }
        //----라우터값이 변경되었을 때 할 일 END----     
    },
    created() {
        console.log('created productlist')
        if (this.$route.params.currentPage) {
            this.currentPage = this.$route.params.currentPage
        }
        this.axiosHandler(this.currentPage)
    }
}
</script>
<style scoped>
.productlist>h3 {
    width: 200px;
    margin: 10px auto;
    text-align: right;
    background: yellow;
}
</style>