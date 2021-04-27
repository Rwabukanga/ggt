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
    <h1 class="h2 mt-3">Registration</h1>
  </div>
<form class="navbar-form" v-on:submit="updateMetting">

  <div class="form-group row">
          <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >NAME</label>
                 
                <input name="name" type="text" class="form-control" id="name" placeholder="name" required  v-model="userr.name">
                </div>
          </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Description</label>
                <input name="description" type="text" class="form-control" id="description" placeholder="description" required  v-model="userr.description">
              </div>
                </div>
            </div>

          

           
            <div class="form-group row">
               <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
               
                <label >Meeting Date</label>
                 
                <input name="meetingdate" type="date" class="form-control" id="meetingdate" required  v-model="userr.meetingdate">
                </div>
             </div>
            
            </div>

          
           
             
          
             
       <button type="submit" class="btn btn-primary btn-sm">Update</button> 
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
    /*    provinces:[],
       province:0,
       districts:[],
       district:0, */
      }
    },
     methods:{

           fetchmeeting(id){
            axios.get('http://localhost:2021/meeting/find/'+id)
            .then(response =>{
                this.userr = response.data.OBJECT;
                console.log(this.userr);
            });
        },

 /*   fetchProvince(){
     axios.get("http://localhost:2021/location/all")
     .then(response =>{
         this.provinces = response.data.OBJECT;
         console.log(this.provinces);
     }).catch(response =>{
        //  console.error(err);
     });
    }, */

   /*  fetchDistrict(event){
         //alert(event.target.value),
     axios.get('http://localhost:2021/location/district/'+event.target.value)
     .then(response =>{
         this.districts = response.data.OBJECT;
         console.log(response.data.OBJECT);
     }).catch(response =>{
        //  console.error(err);
     });
    }, */

      updateMetting(b){
        if(!this.userr.name|| !this.userr.description|| !this.userr.meetingdate){
          alert="fill all user";
        }else{
          let newusert = {
            name: this.userr.name,
         
            description: this.userr.description,
           
            meetingdate: this.userr.meetingdate,
           /*  category: this.userr.category,
            gender: this.userr.gender,
            username: this.userr.username,
            password: this.userr.password,
            idnumber: this.userr.idnumber,
            district: this.userr.district */
          }
         
         axios.put('http://localhost:2021/meeting/update/'+this.$route.params.id, newusert)
        
         .then(response =>{
            /*  console.log(response.data.OBJECT); */
            this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
                this.$router.push({path:'/listmeeting',query:{alert: response.data.description}});
         });
     /*  b.preventDefault();  */
        }
     /*   b.preventDefault(); */
      },

      logout:function(){
        this.$store.dispatch('logout')
      }
  
    },
    /* created:function(){
      
        this.fetchProvince();
    } */
      created: function(){
       this.fetchmeeting(this.$route.params.id);
    },   
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
a{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: larger;
	font-style: initial;
	font-variant-caps: normal;
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