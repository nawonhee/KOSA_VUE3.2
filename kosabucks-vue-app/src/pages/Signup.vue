<template>
    <form class="signup"> <!--method="post" enctype="multipart/form-data">--> <!--<form method="post" action="http://localhost:8888/back/signup">-->
            <div class="id">
                <label>아이디 : <input type="text"
                                       required placeholder="아이디를 입력하세요"
                                       name="id"
                                       v-model="c.id"
                                       @focus="idFocusHandler"></label>
                <button type="button" @click="idDupChkHandler">중복확인</button>
            </div>
            <div class="pwd">
                <label>비밀번호 : <input type="text" 
                                        required placeholder="비밀번호를 입력하세요"
                                        name="pwd"
                                        ref="p"
                                        v-model="c.pwd"></label>
            </div>
            <div class="pwd2">
                <label>비밀번호 1 : <input type="text"
                                           required placeholder="비밀번호를 재입력하세요"
                                           v-model="pwd1"></label>
            </div>
            <div class="name">
                <label>이름 : <input type="text"
                                     required placeholder="이름을 입력하세요"
                                     name="name"
                                     v-model="c.name"></label>
            </div>
            <div>
                <label>프로필 :<input type="file" name="f1" id="f1" @change="profileChangeHandler"></label>
                <div>
                    <img class="profile" v-bind:src="profile">
                </div>
                <label>자기소개서:<input type="file" name="f2" id="f2"></label>
            </div>
            <div :class="[isBtSignup?'btSignupShow':'btSignupHide']">
                <button type="submit" @click.prevent="signupFormSubmitHandler">가입하기</button>
            </div>
        </form>
        <hr>
        
        <form method="post" enctype="multipart/form-data" >
            <input type="file" multiple name="f1"><br>
            <input type="text" name="t" value="tValue"><br>
            <button type="submit">첨부</button>
        </form>
        <hr>
        <form class = "form1">
            <input type="file" multiple name="f1"><br>
            <input type="text" name="t" value="tValue"><br>
            <button type="submit">첨부</button>
        </form>
    
    <div class="download">
        <img>
        <button>파일다운로드</button>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        name: 'Signup',
        data(){
            return {
                // id:'',
                // pwd:'',
                pwd1:'',
                // name:'',
                isBtSignup: false, //가입버튼 보여주기 여부
                c : {
                    id:'',
                    pwd:'',
                    name:''
                },
                profile:''
            }
        },
        methods:{
            idFocusHandler(){
                this.isBtSignup = false
            },
            idDupChkHandler(){
                const url=`${this.backURL}/iddupchk?id=${this.c.id}`
                axios.get(url) //get 방식은 url에 직접 쿼리스트링 작성
                    .then((Response)=>{
                        if(Response.data.status==1){
                            this.isBtSignup = true
                        }else{
                            alert('이미 사용중인 아이디입니다')
                        }
                    })
                    .catch((Error)=>{
                        console.log(Error);
                    })
            },
            signupFormSubmitHandler(e){
                console.log(this.c.pwd)
                console.log(this.pwd1)
                if(this.c.pwd != this.pwd1){
                    alert('비밀번호를 다시 입력하세요')
                    const pwdObj = this.$refs.p
                    pwdObj.focus()
                    pwdObj.select()
                }else{
                    const url=`${this.backURL}/signup`
                    // const data= this.c
                    const fd = new FormData(e.target)
                    const data = fd
                    axios.post(url,data,{contentType:false, //파일첨부용 프로퍼티
                                         processData:false //파일첨부용 프로퍼티 
                                         }) 
                        .then((Response)=>{
                            if(Response.data.status==1){
                                alert(Response.data.msg)
                                location.href='/'
                            }else{
                                alert(Response.data.msg)
                            }
                        })
                        .catch((Error)=>{
                            console.log(Error)
                        })
                }
            },
            profileChangeHandler(e){
                const url= URL.createObjectURL(e.target.files[0]) //<input> ty=e"file"> 선택된 파일자원
                this.profile = url
            }
        }
    }
</script>
<style scoped>
div{
    padding:10px;
}
/* form>div.sign{
    display: none;
} */
.btSignupShow{
    display : block;
}
.btSignupHide{
    display : none;
}
</style>