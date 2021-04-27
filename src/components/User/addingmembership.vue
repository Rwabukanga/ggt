<template>
    <div class="container">
<nav class="navbar navbar-expand-md navbar-darkcyan bg-darkcyan">
    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <!-- <ul class="navbar-nav ml-auto">
             <li class="nav-item">
                <a class="nav-link" href="/login">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/reg">Registration</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">List</a>
            </li>
            <li class="nav-item">
              <button type="submit" class="btn btn-primary btn-sm">Log out</button> 
            </li>
        </ul> -->
        <h1 class="h2 mt-3"> Welcome </h1>
    </div>
<div class="sidebar">
 <!--  <a href="/login"><i class="fa fa-fw fa-home"></i>Home</a> -->
 <!--  <a href="#services"><i class="fa fa-fw fa-wrench"></i>Services</a> -->
  <!-- <a href="/kyvmember"><i class="fa fa-fw fa-user"></i>Membership</a> -->
  <a href="/listreg"><i class="fas fa-list"></i>List of Members</a>
  <a href="/contact"><i class="fa fa-fw fa-envelope"></i>Contact</a>
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
    <h2 class="h2 mt-3">Registration</h2>
  </div>
<form class="navbar-form" v-on:submit.prevent="addmember()">
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
                 
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" required v-model="memberr.firstname">
                </div>
      </div>
        <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" required v-model="memberr.lastname">
              </div>
      </div>
            </div>

             <div class="form-group row">
                   <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" placeholder="email" required v-model="memberr.email">
                </div>
                   </div>
            <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" placeholder="idnumber" required v-model="memberr.idnumber">
              </div>
                   </div>
            </div>

            <div class="form-group row">
                  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                 <div class="col-auto">
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" placeholder="phonenumber" required v-model="memberr.phonenumber">
                </div>
                  </div>
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                 <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dob" type="date" class="form-control" id="dob" placeholder="dateofbirth" required v-model="memberr.dob">
                </div>
                  </div>
            </div>
            <div class="form-group row">
                  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
              <label>Gender</label>
              <select id="gender" name="gender" class="form-control" required v-model="memberr.gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
            <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Province</label>
              <select class="form-control"  id="province" required  v-model="province" @change="fetchDistrict($event)">
                       
                        <option v-bind:key="province.id" v-for="province in provinces"  :value='province.id'>{{province.name}}</option>
                        
                      </select>
                    </div>
                  </div>
            </div>
            <div class="form-group row">
        <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>District</label>
              <select id="district" name="district" class="form-control" required v-model="memberr.district">
                      
                        <option v-bind:key="district.id" v-for="district in districts" :value='district.id'>{{district.name}}</option>
                      </select>
                    </div>
        </div>

         <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Category</label>
              <select class="form-control"  id="category" required  v-model="memberr.category">
                       
                        <option v-bind:key="category.id" v-for="category in categories"  :value='category.id'>{{category.name}}</option>
                        
                      </select>
                    </div>
                  </div>

            </div>
               <button type="submit" class="btn btn-success btn-sm">Submit</button> 
</form>
 </div>     
</div>
</template>
<script>
import axios from 'axios';

export default {
    
    data(){
        return{
       memberr:{},
       provinces:[],
       province:0,
       districts:[],
       district:0,
       categories:[],
       category:0,
   
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

    fetchcategory(){
     axios.get("http://localhost:2021/category/all")
     .then(response =>{
         this.categories = response.data.OBJECT;
         console.log(this.categories);
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
        addmember(b){
            if(!this.memberr.firstname || !this.memberr.lastname || !this.memberr.email || !this.memberr.email || !this.memberr.dob || !this.memberr.phonenumber || !this.memberr.idnumber || !this.memberr.gender|| !this.memberr.district|| !this.memberr.category){
               alert = "fill all user";
            }else{
                let newmember ={
                    firstname: this.memberr.firstname,
                    lastname: this.memberr.lastname ,
                    email: this.memberr.email,
                    dob : this.memberr.dob,
                    phonenumber: this.memberr.phonenumber,
                    idnumber: this.memberr.idnumber,
                    gender: this.memberr.gender,
                    district: this.memberr.district,
                    category: this.memberr.category
                }

                axios.post('http://localhost:2021/mmb/savee', newmember)
                .then(response =>{
                    
                    this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
                this.$router.push({path:'/kyvmember',query:{alert: response.data.description}});
                });
               /*  b.preventDefault(); */
            }
            /* b.preventDefault(); */
        }
    },
    created:function(){
      
        this.fetchProvince();
        this.fetchcategory();
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
  background-color: green;
  overflow-x: hidden;
  padding-top: 20px;
 
 
}

.navbar-collapse{
  margin-right: 6rem;
  color: white;
  
}

.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #f1f1f1;
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
width: 85em;
background-color: green;
color: white;
}

.navbar a:hover{
    color: #f1f1f1;
}

form{
  margin-top: 20px;
  margin-right: 200px;
  margin-left: 1em;
  
}

.card-panel {
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px;
  border-bottom: 10px solid transparent;
  transition: box-shadow 0.25s;
  padding: 20px;
  margin: 0.5rem 0 1rem;
  border-radius: 2px;
  background-color: green;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 5em;
  width: 80em;
}

.card-header{
  text-align: center;
  background-color: green;
  font-family: 'Times New Roman', Times, serif;
  font-size: x-large;
  font-style: normal;
  
}

.form-group {
  
  
  font-style: normal;
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  width: 80em ;
}

button{

width: 40%;
margin-left: 50%;
margin-right: 50%

}

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
  text-align: center;
  margin-left: 16em;
}

h2{
  font-family: 'Times New Roman', Times, serif;
  font-size: xx-large;
  font-style: initial;
  color: #fff;
  text-align: center;
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