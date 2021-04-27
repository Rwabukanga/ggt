<template>
<div class="container">
<nav class="navbar navbar-expand-md navbar-darkcyan bg-darkcyan">
    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
             <li class="nav-item">
                <a class="nav-link" href="/dashb">Home</a>
            </li>
           
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

 <div class="card-panel p-sm-3 position-relative">
   
     <div class="card-header">
    <h1 class="h2 mt-3">Meeting Registration</h1>
  </div>
<div class="container">
        <input  class="form-control" placeholder="enter" v-model="filterInput">
        <table class="table table-stripped">
            <thead>
                <tr>
           <th>Name</th>
           <th>Description</th>
           <th>Meeting Date</th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="meeting.uuid" v-for="meeting in filterBy (regs,filterInput)">
              
             <td>{{meeting.name}}</td>
             <td>{{meeting.description}}</td>   
             <td>{{meeting.meetingdate}}</td>
           
             <!--    <td><button  class="btn btn-danger" type="submit" @click="deleteseller(branchuser.id)">Delete</button></td> -->
                <td><router-link class="btn btn-default" v-bind:to="'/editmt/'+meeting.id">Update Meeting</router-link></td>
               <!--  <td><router-link class="btn btn-default" v-bind:to="'/addinst/'+reg.uuid">Add Institution</router-link></td>
                <td><router-link class="btn btn-default" v-bind:to="'/addreq/'+reg.uuid">Create Request</router-link></td>
                <td><router-link class="btn btn-default" v-bind:to="'/savemeeting/'+reg.uuid">Create Meeting</router-link></td> -->
                </tr>
            </tbody>
        </table>
    </div>
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
            axios.get('http://localhost:2021/meeting/all')
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
                return regs.name.indexOf(value)> -1;
            });
        },
        logout:function(){
        this.$store.dispatch('logout')
      }

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

.table {
    margin-right: 10px;
    margin-left: 280px;
}

/* button{
  margin-left: 340px;
} */

input{
  
  color: black;
  margin-left: 280px;
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