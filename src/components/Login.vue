<template>
  <div class="form">
    <label for="Email">Email</label>
    <input
      type="text"
      id="email"
      v-model="email"
      placeholder="Enter your email"
    />
    <label for="Password">Password</label>
    <input
      type="password"
      id="password"
      v-model="password"
      placeholder="Enter your password"
      required
    />
    <button :disabled="!email && !password" @click="login">Login</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods:{
        login(){
           if(this.email="user@gmail.com" && this.password=="1122"){
            localStorage.setItem('user', JSON.stringify(true))
            this.$router.push({path:'/profile'})
           }
       else {
                localStorage.setItem('user', JSON.stringify(false))
            }

           }
        },

}

</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
label {
  margin-top: 10px;
  font-size: 20px;
  color: rgb(141, 98, 181);
}
input {
  width: 300px;
  height: 25px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  border-color: rgb(67, 47, 85);
}
button {
  width: 300px;
  height: 35px;
  margin-top: 20px;
  background-color: rgb(101, 56, 143);
  color: aliceblue;
  border:none;
  outline: red;
  

}
button:hover {
  background-color: rgb(158, 111, 202);
}
</style>
