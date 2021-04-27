<template>
    <div class="container">
        	<!-- Main Wrapper -->
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="src/assets/img/logo-white.png" alt="Logo">
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<h1>Login</h1>
							<!-- 	<p class="account-subtitle">Welcome</p> -->
								
								<!-- Form -->
								<form v-on:submit.prevent="login">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Username" id="username" required v-model="dm.username">
									</div>
									<div class="form-group">
										<input class="form-control" type="password" placeholder="Password" id="password" required v-model="dm.password">
									</div>
									<div class="form-group">
									<!-- <button type="submit" class="btn btn-primary">Login</button> -->
                  <button class="btn btn-primary btn-block" type="submit">Login</button>
									</div>
								</form>
								<!-- /Form -->
								
								<!-- <div class="text-center forgotpass"><a href="#">Forgot Password?</a></div> -->
							<!-- 	<div class="login-or">
									<span class="or-line"></span>
									<span class="span-or">or</span>
								</div> -->
								  
								<!-- Social Login -->
							<!-- 	<div class="social-login">
									<span>Login with</span>
									<a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="google"><i class="fa fa-google"></i></a>
								</div> -->
								<!-- /Social Login -->
								
								<div class="text-center dont-have">Don’t have an account? <a href="/formsave">Register</a></div>
							</div>
                        </div>
                    </div>
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

</style>