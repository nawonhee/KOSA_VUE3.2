<template>
    <form @submit.prevent="loginFormSubmitHandler">
        <div>
            <label>아이디 : <input type="text"
                                    required
                                    placeholder="아이디를 입력하세요" 
                                    id="i"
                                    name="id"
                                    v-model="id"></label>
        </div>
        <div>
            <label>비밀번호 : <input type="password" 
                                    required
                                    placeholder="비밀번호를 입력하세요" 
                                    id="p"
                                    name="pwd"
                                    v-model="pwd"></label>
        </div>
        <div>
            <input type="checkbox" checked id="c" v-model="checked">
            <label for="c">아이디저장</label>
            <button type="submit" style="margin-left:40px">로그인</button> <!--<button type="submit">과 같음--> <!--@click.prevent="login"-->
        </div>
    </form>
</template>
<script>
import axios from 'axios'
    export default{
        name: 'Login',
        data(){
            return{
                id:'',
                pwd:'',
                checked: true
            }
        },
        methods:{
            loginFormSubmitHandler(){
                const data=`id=${this.id}&pwd=${this.pwd}`
                const url=`${this.backURL}/login`
                console.log(data)
                if(this.checked){
                    localStorage.setItem('savedId',this.id)
                }else{
                    localStorage.removeItem('savedId')
                }
                alert('눌렀음')
                axios.post(url,data, {withCredentials:true})
                    .then((Response)=>{
                        if(Response.data.status==0){
                            alert(Response.data.msg)
                        }else if(Response.data.status==1){
                            localStorage.setItem('loginedId',this.id)
                            location.href='/'
                        }
                    })
                    .catch((Error)=>{
                        console.log(Error);
                    })
            }
        },
        created(){
            const savedId = localStorage.getItem('savedId')
            if(savedId != null){
                this.id = savedId
            }
        }
    }
</script>
<style scoped>
div{
        padding:10px;
    }
</style>