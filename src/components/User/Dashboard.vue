<template>
<div class="container">
<nav class="navbar navbar-expand-md navbar-darkcyan bg-darkcyan">
    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
             <li class="nav-item">
                <a class="nav-link" href="/dashb">Home</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/reg">Registration</a>
            </li> -->
           <!--  <li class="nav-item">
                <a class="nav-link" href="#">List</a>
            </li> -->
            <li class="nav-item">
              <button type="submit" class="btn btn-danger btn-sm" @click="logout"> 
                <i class="fas fa-sign-out-alt"></i>
                 <span class="glyphicon glyphicon-log-out">Log out</span> 
                 </button> 
            </li>
        </ul>
    </div>
<div class="sidebar">
  <a href="/login"><i class="fa fa-fw fa-home"></i>Home</a>
 <!--  <a href="#services"><i class="fa fa-fw fa-wrench"></i>Services</a> -->
  <a href="/reglist"><i class="fa fa-fw fa-user"></i>Registration List</a>
  <a href="/memberlist"><i class="fa fa-fw fa-user"></i>List of Members</a>
  <a href="/contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>
 
</nav>
<!--  <form class="navbar-form" role="search">
                            <div class="input-group" style="width: 100%">
                                <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term-header">
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search"></span></button>
                                </div>
                            </div>
                        </form> -->
 <div class="card-panel p-sm-3 position-relative">
          <!-- <div class="text-center">
      <img src="http://www.footballlogosandkits.com/LOGO+S.C.%20KIYOVU%20SPORT">
      
    </div> -->
     <div class="card-header">
    <h1 class="h2 mt-3">Registration</h1>
  </div>
<form class="navbar-form" v-on:submit.prevent="addreg()">
<!-- <span>Login</span>
<label for="inputEmail" class="sr-only">Email address</label>
<input type="email" id="inputEmail" class="form-control" placeholder="Email Address" required autofocus>
<label for="inputPassword" class="sr-only">Password</label>
<input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
<div class="checkbox">
<label>
<input type="checkbox" value="remember-me"> Remember Me
</label>
</div>
<button type="button" class="btn btn-success btn-bg" id="signin-btn">Sign In</button> -->
  <div class="form-group row">
          <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >First Name</label>
                 
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" required v-model="userr.firstname">
                </div>
          </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" required v-model="userr.lastname">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" required placeholder="email" v-model="userr.email">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" required placeholder="idnumber" v-model="userr.idnumber">
              </div>
                </div>
            </div>

           
            <div class="form-group row">
               <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
               
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" required placeholder="phonenumber" v-model="userr.phonenumber">
                </div>
             </div>
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">
                <div class="col-auto">
                 
                <label>Username</label>
                <input name="username" type="text" class="form-control" id="username" required placeholder="username" v-model="userr.username">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Password</label>
                 
                <input name="password" type="password" class="form-control" id="password" required placeholder="password" v-model="userr.password">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dateofbirth" type="date" class="form-control" id="dateofbirth" required placeholder="dateofbirth" v-model="userr.dateofbirth">
                </div>
                </div>
            </div>
             <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">   
               <div class="col-auto">
              <label>Gender</label>
           
              <select id="gender" name="gender" class="form-control" required v-model="userr.gender">
                <option value="" selected disabled hidden>Please select</option>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                </div>
                 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">
                <div class="col-auto">
              <label>Category</label>
              <select id="category" name="category" class="form-control" required v-model="userr.category">
                        <option value="">Select Category</option>
                        <option value="Admin">Admin</option>
                        <option value="Member">Member</option>
                      </select>
                    </div>
            </div>
             </div>
             
             <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">   
               <div class="col-auto">
              <label>Province</label>
              <select id="province" name="province"  class="form-control" required v-model="province" @change="fetchDistrict($event)">
                        <option v-bind:key="province.id" v-for="province in provinces"  :value='province.id'>{{province.name}}</option>
                      </select>
                    </div>
                </div>
                 <div class="col-xs-20 col-sm-5 col-sm-offset col-md-4 col-md-offset-6">
                <div class="col-auto">
              <label>District</label>
              <select id="district" name="district" class="form-control" required v-model="userr.district">
                        <option v-bind:key="district.id" v-for="district in districts" :value='district.id'>{{district.name}}</option>
                      </select>
                    </div>
            </div>
             </div>
             
       <button type="submit" class="btn btn-primary btn-sm">Submit</button> 
</form>
 </div>     
</div>
</template>
<script>

 import axios from 'axios';

export default {
  name:'add',
    data(){
      return{
      userr:{},
       provinces:[],
       province:0,
       districts:[],
       district:0,
      }
    },
     methods:{

   fetchProvince(){
     axios.get("http://localhost:2021/location/all")
     .then(response =>{
         this.provinces = response.data.OBJECT;
         console.log(this.provinces);
     }).catch(response =>{
        //  console.error(err);
     });
    },

    fetchDistrict(event){
         //alert(event.target.value),
     axios.get('http://localhost:2021/location/district/'+event.target.value)
     .then(response =>{
         this.districts = response.data.OBJECT;
         console.log(response.data.OBJECT);
     }).catch(response =>{
        //  console.error(err);
     });
    },

      addreg(b){
        if(!this.userr.firstname|| !this.userr.lastname|| !this.userr.email || !this.userr.dateofbirth|| !this.userr.phonenumber|| !this.userr.category|| !this.userr.gender|| !this.userr.username|| !this.userr.password|| !this.userr.idnumber|| !this.userr.district){
          alert="fill all user";
        }else{
          let newusert = {
            firstname: this.userr.firstname,
            lastname: this.userr.lastname,
            email: this.userr.email,
            dateofbirth: this.userr.dateofbirth,
            phonenumber: this.userr.phonenumber,
            category: this.userr.category,
            gender: this.userr.gender,
            username: this.userr.username,
            password: this.userr.password,
            idnumber: this.userr.idnumber,
            district: this.userr.district
          }
         
         axios.post('http://localhost:2021/registr/saveuser', newusert)
       
         .then(response =>{
             console.log(response.data.OBJECT);
            this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
                /* this.$router.push({path:'/',query:{alert: response.data.description}}); */
         });
        /* b.preventDefault(); */
        }
     /*    b.preventDefault(); */
      },

      logout:function(){
        this.$store.dispatch('logout')
      }
  
    },
    created:function(){
      
        this.fetchProvince();
    }
}
</script>
<style scoped>
.sidebar {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #262b2f;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: darkcyan;
 
}
.navbar-nav {
  margin-right: 5em;
  color: white;
}
.navbar .nav-item .nav-link{
  color: #fff;
}
.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  display: block;
  margin-top: 40%;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; 
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
.navbar{

font-family: 'Times New Roman', Times, serif;
font-style: initial;
font-size: medium;
width: 78em;
background-color: darkcyan;
color: white;

}

.navbar a:hover{
    color: #f1f1f1;
}

form{
  margin-top: 20px;
  margin-right: 200px;
  margin-left:90px;
  width: 100%;
}

.card-panel {
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px;
  border-bottom: 10px solid transparent;
  transition: box-shadow 0.25s;
  padding: 20px;
  margin: 0.5rem 0 1rem;
  border-radius: 2px;
  background-color: darkcyan;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 5em;
  width: 105%;
}

.form-group {
    
  font-style: normal;
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  width: 60em ;
}

/* button{
  margin-left: 340px;
} */

input{
  
  color: black;
}

label{

color: #fff;
}

select{
  color: black;
}

h1{
  font-family: 'Times New Roman', Times, serif;
  font-size: xx-large;
  font-style: initial;
  color: #fff;
}

.card-header{
text-align: center;
background-color: darkcyan;
width: 55em;
}

.min-container .card-panel form .fa {
  top: 13px;
  right: 1rem;
}

@media (min-width: 768px) {
  .min-container {
    max-width: 650px;
  }
}
</style>