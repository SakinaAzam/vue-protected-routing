<template>
<div class="nav" >
<router-link to="/login" class="link">LOGIN</router-link>
<router-link to="/profile" class="link">PROFILE</router-link>

</div>
</template>
 <script>
 export default {
    name:'Header'
 }
 </script>

 <style scoped>
 .link{
    margin: 0px 30px;
    font-size: 20px;
    color: blueviolet;
    font-weight: bold;
    text-decoration:none ;
   
    transition: border-bottom  0.1s ;
 
 }
 .router-link-active{
    border-bottom: 2px solid rgb(150, 43, 200);
    height:1px ;
       transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 1s; 
}
 .nav{

   margin-top: 10px;
 }
 </style>