<template>
<div class="container">
 <nav class="navbar navbar-expand-md navbar-darkcyan bg-darkcyan">
    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
             <li class="nav-item">
               <!--  <a class="nav-link" href="/login">Home</a> -->
            </li>
            <li class="nav-item">
              <!--   <a class="nav-link" href="/reg">Registration</a> -->
            </li>
            <li class="nav-item">
             <!--    <a class="nav-link" href="#">List</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                <i class="fas fa-sign-in-alt"></i>
                 <span class="glyphicon glyphicon-log-out">Login</span> 
              </a>
            </li>
        </ul>
    </div>
<div class="sidebar">
  <!-- <a href="/dashb"><i class="fa fa-fw fa-home"></i>Home</a> -->
 <!--  <a href="#services"><i class="fa fa-fw fa-wrench"></i>Services</a> -->
  <a href="/reglist"><i class="fa fa-fw fa-user"></i>Registration List</a>
  <a href="/memberlist"><i class="fa fa-fw fa-user"></i>List of Members</a>
  <a href="/contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div> 
</nav>
<div class="card-panel p-sm-3 position-relative">
          <!-- <div class="text-center">
      <img src="http://www.footballlogosandkits.com/LOGO+S.C.%20KIYOVU%20SPORT">
      
    </div> -->
     <!-- <div class="card-header">
    <h2 class="h2 mt-3">Registration</h2>
  </div> -->
<!-- <form class="navbar-form" v-on:submit.prevent="addmember()">

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
            </div>
               <button type="submit" class="btn btn-primary btn-sm">Submit</button> 
</form> -->
<div class="input-group mb-3">
        <div class="input-group-prepend"> 
    <span class="input-group-text"><i class="fas fa-search"></i></span>
  </div>                
  <input class="form-control" type="search" v-model="filterInput">
</div>


    <table class="table table-stripped">
            <thead>
                <tr>
           <th>Firstname</th>
           <th>Lastname</th>
           <th>Date of Birth</th>
            <th>Email</th>
             <th>Gender</th>
             <th>Phonenumber</th>
             <th>ID Number</th>
            <th>District</th>
            <th>Category</th>
             <th>Actions</th>     
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="reg.uuid" v-for="reg in filterBy (regs,filterInput)">
              
             <td>{{reg.firstname}}</td>
             <td>{{reg.lastname}}</td>   
             <td>{{reg.dateofbirth}}</td>
             <td>{{reg.email}}</td>
             <td>{{reg.gender}}</td>
             <td>{{reg.phonenumber}}</td>
             <td>{{reg.idnumber}}</td>
             <td>{{reg.district.name}}</td>
             <td>{{reg.category}}</td>
           
             <!--    <td><button  class="btn btn-danger" type="submit" @click="deleteseller(branchuser.id)">Delete</button></td> -->
              <!--   <td><router-link class="btn btn-default" v-bind:to="'/edit/'+branchuser.uuid">Update</router-link></td> -->
                <td><router-link class="btn btn-default" v-bind:to="'/addinst/'+reg.uuid">Add Institution</router-link></td>
                <td><router-link class="btn btn-default" v-bind:to="'/addreq/'+reg.uuid">Create Request</router-link></td>
                <td><router-link class="btn btn-default" v-bind:to="'/savemeeting/'+reg.uuid">Create Meeting</router-link></td>
                </tr>
            </tbody>
        </table>
 </div>     
</div>



</template>
<script>
import axios from 'axios'
export default {
    data (){
        return{
            regs:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
        findall(){
            axios.get('http://localhost:2021/registr/all')
            .then(response => {
              this.regs  = response.data.OBJECT;
              console.log(this.regs);
              
            }).catch(response  =>{
             console.error(err);
            });

        },
        deleteseller(id){
            axios.delete('http://localhost:2002/branchuser/delete/'+id)
            .then(response => {
                this.$router.push({path:'/allseller',query:{alert:response.data.description}})
            });
        },
        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(regs){
                return regs.firstname.indexOf(value)> -1;
            });
        },

    },
    created:function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert
        }
        this.findall();
    }
}
</script>
<style scoped>
table{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1.4rem;
    font-family: 'Times New Roman', Times, serif;
    font-display: normal;
    margin-right: 80px;
    background-color: darkcyan;
    color: white;
}

.form-group{
    margin-top: 20px;
    margin-bottom: 20px;
}

.input-group {

margin-top: 30px;
margin-bottom: 20px;
width: 30%;
}

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
background-color: darkcyan;
color: white;
width: 87em;

}

.navbar a:hover{
    color: #f1f1f1;
}

.span{
    font-display: initial;
    font-family: 'Times New Roman', Times, serif;
    font-size: x-large;
    font-style: normal;
}
.nav-bar .form .h1{
    margin-left: 5em;
}
.card-panel h1{
    margin-left: 17em;
    margin-top: 8em;
    margin-bottom: 8em;
    font-style: normal;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    font-size: x-large;
    font-variant-caps: normal;
    /* font-synthesis: initial;
    font-stretch: semi-condensed; */
    
}

.card-panel {
    background-color: darkcyan;
    margin-top: 2em;
    margin-left: 7em;
    color: white;
    width: 80em;
}

</style>