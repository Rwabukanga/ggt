<template>
  <div class="container min-container py-md-5 mt-4">
       <div class="card-panel p-sm-2 position-relative">
    <div class="text-center">
      <!-- <img src="http://www.footballlogosandkits.com/LOGO+S.C.%20KIYOVU%20SPORT"> -->
      <h1 class="h2 mt-1">Welcome</h1>
    </div>
      <div class="panel-default">
           
          <div class="panel-body">
            
      <form v-on:submit.prevent= "login">
        
        <label>Username</label>
        <div class="col-xs-20 col-sm-12 col-sm-offset col-md-8 col-md-offset-3">
        <div class="input-group mb-3 ">
        <div class="input-group-prepend">
            
    <span class="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input class="form-control" type="text" placeholder="username" name="username" id="username" required v-model="dm.username">
</div>
        </div>
 <label>Password</label>
 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-8 col-md-offset-3">
<div class="input-group mb-3">
        <div class="input-group-prepend">
           
    <span class="input-group-text"><i class="fa fa-unlock"></i></span>
  </div>
  <input class="form-control" type="password" value="FakePSW" placeholder="password" name="password" id="password" required v-model="dm.password">
</div>
 </div>
<input type="checkbox" @click="myFunction()"><label>Show Password</label>

   <!--  <div class="form-group position-relative">
     <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">
     <label for="input2">Username</label>
     <input type="text" class="form-control is-valid" name="username" id="username" v-model="dm.username">
     <div class="valid-feedback feedback-icon">
          <i class="fa fa-user"></i>
    </div>
     </div>
     <div class="invalid-feedback feedback-icon">
          <i class="fa fa-times"></i>
     </div>
</div> -->

<!-- <div class="form-group position-relative">
    <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">
     <label for="input2">Password</label>
     <input type="text" class="form-control is-valid" name="password" id="password" v-model="dm.password">
     <div class="valid-feedback feedback-icon">
        <i class="fa fa-unlock" aria-hidden="true"></i>
    </div>
     </div>

     <div class="invalid-feedback feedback-icon">
          <i class="fa fa-times"></i>
     </div>
</div> -->
        
       <!--  <div class="wrapper">
         <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
         <i class="fa fa-user " aria-hidden="true"></i>
        <input class="form-control" type="text" placeholder="Username" name="username" id="username" v-model="dm.username">
        </div>
        </div>
        <br>
      <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
      <div class="input-container">
        <i class="fa fa-unlock" aria-hidden="true"></i>
        <input class="form-control" type="password" placeholder="Password" name="password" id="password" v-model="dm.password">
        </div>
        </div> -->
        <br>
             <!-- <div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
                <label>Username</label>
                
                <input name="username" type="text" class="form-control" id="username" placeholder="username" v-model="dm.username">
                </div> -->
                <!-- </div> -->
                <!-- <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-3 col-md-offset-3">
                <label>Password</label>
                <input name="password" type="text" class="form-control" id="password" placeholder="password" v-model="dm.password">
              </div>
            </div>     -->

<!-- ========================================================================================================== -->
            <!-- <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text"><i class="fa fa-unlock"></i></span>
  </div>
  <input class="form-control" type="text" placeholder="Email address">
</div>

<div class="input-group mb-3">
  <input class="form-control" type="text" placeholder="Email address">
  <div class="input-group-append">
    <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
  </div>
</div> -->
            <br>

            <button type="submit" class="btn btn-primary">Submit</button> 
      </form>
             
          </div>
      </div>
       </div>
 </div>  
</template>
<script>
export default {
    name: "login",

    data(){
        return{
            dm:{
                username:"",
                password:""
            }
        };
    },
    methods: {
      login: function(){
          this.$store.dispatch('login', this.dm)
      },

  myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
},

/* validateform(){  
var username=document.form.username.value;  
var password=document.form.password.value;  
  
if (username == null || username ==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}   */

    },
   
};
</script>

<style scoped>
/* .container{
    background-color: black;
    margin-top: 40px;
    padding-left: 350px;
   
} */


.card-panel {
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px;
  border-bottom: 10px solid transparent;
  transition: box-shadow 0.25s;
  padding: 20px;
  /* margin: 0.5rem 0 1rem; */
  border-radius: 2px;
  background-color: #fff;
  margin-top: 0;
  margin-bottom: 0.5rem;
 
}

h1{
  font-display: initial;
  font-family: 'Times New Roman', Times, serif;
  font-style: normal;
  font-size: x-large;
  font-weight: bold;
  font-kerning: normal;
  font-stretch: expanded;
  font-variant: normal;
  font-variant-caps: titling-caps;
}

.panel-default{
    background-color: seagreen;
    margin-top: 30px;
    padding-left: 200px;
    shape-rendering: optimizeSpeed;
    height: 400px;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 1em;
    margin-bottom: 1em;
    
   
    
}
label{
    
    color: white;
    margin-right: 20px;
    font-style: normal;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    margin-left: 20px;
    margin-top: 40px;
    
    
}

.form{
    margin-top: 20px;
    margin-bottom: 20px;
}
/* .input{
 
    padding-right: 50px;
} */
.panel-heading{
color: green;
font-display: initial;
font-family: 'Times New Roman', Times, serif;
font-size: x-large;
font-style: normal;
margin-top: 50px;
font-weight: bold;
background-color: white;
margin-left: 0;
margin-right: 190px;
margin-top: 10px;
margin-bottom: 10px;
}
.panel-body{
    margin-top: 20px;
}
button{
    margin-left: 8em;
    background-color: green;
}
.wrapper{
    position: relative;
}
i .fa-user{
position: absolute;
top: 10px;
left: 50px;
}

 /* .input-icons { 
            width: 100px; 
            margin-bottom: 10px; 
        }  */

/* .valid-feedback.feedback-icon,
.invalid-feedback.feedback-icon {
    position: absolute;
    width: auto;
    bottom: 10px;
    left: 20px;
    margin-top: 0;
    color: black;
}         */ 
</style>