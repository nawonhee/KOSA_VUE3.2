<template>
    <header>
            <img src="/images/logo.png" alt="로고" @click="logoClickHandler">
        </header>
        <nav>
            <!--메뉴들-->
            <ul>
                <li v-if="loginedId ===''"><router-link to="/login">로그인</router-link></li>
                <li v-if="loginedId ===''"><router-link to="/signup">가입</router-link></li>
                <template v-if="loginedId !== ''">
                    <li><a href="#" class="intro">자기소개서</a></li>
                    <li><img v-show="profile" :src="profile" class="profile"></li>
                    <li v-if="loginedId !==''"><a href="#" @click="logoutClickHandler()">{{loginedId}}님 로그아웃</a></li>
                </template>
                <li>
                    <router-link class="nav-link" to="/productlist">상품목록</router-link>
                </li>
                <!-- <li><a href="#" class ="login">로그인</a></li>
                <li><a href="#" class = "signup">가입</a></li>

                <li><a href="#" class = "intro">자기소개서</a></li>
                <li><img class="profile"></li>
                <li><a href="#" class = "logout">로그아웃</a></li>

                <li><a href="#" class = "productlist">상품목록</a></li>
                <li><a href="#" class="cartlist">장바구니목록</a></li>
                <li><a href="#" class="orderlist">주문목록</a></li> -->
            </ul>
        </nav>
</template>
<script>
import axios from 'axios'
    export default{
        name: 'Header',
        data(){
            return {
                loginedId: '',
                profile:''
            }
        },
        created(){
            const loginedId = localStorage.getItem('loginedId')
            if(loginedId != null){
                this.loginedId = loginedId
            }
            //---프로필 이미지 다운로드
            const url = `${this.backURL}/download?id=${this.loginedId}&opt=profile`
            axios.get(url,{responseType: 'blob'})
                    .then(response=>{
                        if(response.data.size>0){
                            const blob = new Blob([response.data])
                            const url = URL.createObjectURL(blob)
                            this.profile=url
                        }else{
                            this.profile = ''
                        }
                    })
        },
        methods: {
            //--로고 img객체에서 클릭이벤트가 발생했을 때 할 일 start--
            logoClickHandler(){
                location.href='/'
            },
            //--로고 img객체에서 클릭이벤트가 발생했을 때 할 일 end--

            logoutClickHandler(){
                const url=`${this.backURL}/logout`
                axios.get(url)
                    .then(()=>{
                        localStorage.removeItem('loginedId')
                        location.href='/'
                    })
                    .catch((Error)=>{
                        console.log(Error);
                    })
            }
        }
    }
</script>
<style scoped>
header{
    background-color: #FAECC5; 
    padding:20px;
    width: 10%;
    height:150px;
    float:left;
}
header>img{
    padding : 10px;
}
nav{
    background-color: #FAECC5; 
    text-align: center;
    width:90%;
    height:150px;
    float:left;
}
nav>ul{
    list-style-type: none;
    padding-left:0px;
    margin-top:70px;
}
nav>ul>li{
    display: inline-block;
    margin-left: 30px;
} 
nav>ul>li>a{
    text-decoration: underline;
}
</style>