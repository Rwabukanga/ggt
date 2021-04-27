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
  <a href="/listins"><i class="fa fa-fw fa-home"></i>View Institution</a>
 <!--  <a href="#services"><i class="fa fa-fw fa-wrench"></i>Services</a> -->
  <a href="/userlist"><i class="fa fa-fw fa-user"></i>Create Request</a>
  <a href="/rlist"><i class="fa fa-fw fa-user"></i>View Request</a>
  <a href="/listmeeting"><i class="fa fa-fw fa-envelope"></i>View Meetings</a>
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

 </div>     
</div>
</template>
<script>
export default {
  name:'add',

   data(){
    return{
        
    }
   },
   methods:{

        logout:function(){
        this.$store.dispatch('logout')
      }
  
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