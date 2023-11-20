<template>
    <div class="productlist">
        <h3>상품목록</h3>
        <div class="product" v-for="p in productlist">
            <ul>
                <li><img :src="'../images/'+p.prodNo+'.PNG'" alt=""></li>
                <li><span>{{p.prodName}}</span></li>
            </ul>
        </div>
    </div>
    <div class="pagegroup">
        <div v-if="startPage>1">
            <span>PREV</span>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
            <span>{{}}</span>
        </div>
        <div v-if="endPage!==totalPage">
            <span>NEXT</span>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name: 'ProductList',
        // components: {ProductItem, PageGroup},
        data(){
            return {
                productlist:[],
                currentPage:'',
                // pageGroup: null,
                startPage:'',
                endPage:'',
                totalPage:''
            }
        },
        mounted(){
            this.listHandler(1)
        },
        methods:{
            // axiosHandler(){
            //     const url=`${this.backURL}/productlistjson?currentPage=${this.currentPage}`
            //     axios.get(url)
            //         .then(response=>{
            //             this.pageGroup = response.data
            //         })
            // }
            listHandler(cp){
                const url = `${this.backURL}/productlistjson?currentPage=${cp}`
            axios.get(url)
                  .then((Response)=>{
                            const totalCnt = Response.data.totalCnt
                            this.productlist = Response.data.list
                            console.log(this.productlist)

                            this.startPage = Response.data.startPage //시작페이지
                            this.endPage = Response.data.endPage //끝페이지
                            this.totalPage = Response.data.totalPage

                            // if(startPage>1){
                            //     let page = `[<span class="pg${startPage-1}">PREV</span>]&nbsp;&nbsp;&nbsp;`
                            //     $divPageGroup.html($divPageGroup.html()+page)
                            // }
                            // for(let i = startPage; i<=endPage; i++){
                            //     let page=`[<span class="pg${i}">${i}</span>]&nbsp;&nbsp;&nbsp;`
                            //     $divPageGroup.html($divPageGroup.html()+page)
                            // }
                            // if(endPage!=responseJSONObj.totalPage){
                            //     let page=`[<span class="pg${endPage+1}">NEXT</span>]`
                            //     $divPageGroup.html($divPageGroup.html()+page)
                            // }
                    })
                    .catch((Error)=>{
                        console.log(Error)
                    })
            }
        },
        // watch:{ //라우트 변경 감지 (오버헤드 위험성, 퍼포먼스 떨어짐)
        //     $route(newRoute, oldRoute){
        //         console.log("라우터값이 변경"+newRoute.path+","+oldRoute.path)
        //         if(newRoute.params.currentPage){
        //             this.currentPage=newRoute.params.currentPage
        //         }else{
        //             this.currentPage=1
        //         }
        //         this.axiosHandler
        //     }
        // },
        // created(){ //컴포넌트가 변경되었을 때만 호출함
        //     if(this.$route.params.currentPage){
        //         this.currentPage = this.$route.params.currentPage
        //     }
        //     this.axiosHandler(this.currentPage)
        // }
    
    }
</script>
<style scoped>
div.product{
    box-sizing : border-box;
    width:200px;
    display:inline-block;
}
div.product>ul{
    list-style-type: none; /*ul요소때문에 동그라미 점 생기는 거라 없애주는*/
    padding-left:0px;
}
div.product>ul>li>img{
    /*width:100px;*/
    width:80%;
}
div.product>ul>li>span{
    display:inline-block;
    width:80%;
    text-align: center;
}
div.productlist>h3{
    width:200px;
    margin:10px auto;
    text-align: right;
    background: yellow;
}
</style>