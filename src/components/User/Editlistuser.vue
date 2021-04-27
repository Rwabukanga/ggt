<template>
    <div class="container">
  	<!-- Main Wrapper -->
        <div class="main-wrapper">
		
			<!-- Header -->
            <div class="header">
			
				<!-- Logo -->
                <div class="header-left">
                    <a href="https://www.risa.rw/" class="logo">
						<img src="src/assets/img/risalogo.Jpg" alt="Logo">
					</a>
					<a href="https://www.risa.rw/" class="logo logo-small">
						<img src="src/assets/img/risalogo.Jpg" alt="Logo" width="20" height="20">
					</a>
                </div>
				<!-- /Logo -->
				
				<a href="javascript:void(0);" id="toggle_btn">
					<i class="fe fe-text-align-left"></i>
				</a>
				
				<!-- <div class="top-nav-search">
					<form>
						<input type="text" class="form-control" placeholder="Search here">
						<button class="btn" type="submit"><i class="fa fa-search"></i></button>
					</form>
				</div> -->
				
				<!-- Mobile Menu Toggle -->
				<a class="mobile_btn" id="mobile_btn">
					<i class="fa fa-bars"></i>
				</a>
				<!-- /Mobile Menu Toggle -->
				
				<!-- Header Right Menu -->
				<ul class="nav user-menu">

					<!-- Notifications -->
					<!-- <li class="nav-item dropdown noti-dropdown">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
						</a>
						<div class="dropdown-menu notifications">
							<div class="topnav-dropdown-header">
								<span class="notification-title">Notifications</span>
								<a href="javascript:void(0)" class="clear-noti"> Clear All </a>
							</div>
							<div class="noti-content">
								<ul class="notification-list">
									<li class="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="src/assets/img/doctors/doctor-thumb-01.jpg">
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
													<p class="noti-time"><span class="notification-time">4 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="src/assets/img/patients/patient1.jpg">
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
													<p class="noti-time"><span class="notification-time">6 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="src/assets/img/patients/patient2.jpg">
												</span>
												<div class="media-body">
												<p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
												<p class="noti-time"><span class="notification-time">8 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
									<li class="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="src/assets/img/patients/patient3.jpg">
												</span>
												<div class="media-body">
													<p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
													<p class="noti-time"><span class="notification-time">12 mins ago</span></p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="topnav-dropdown-footer">
								<a href="#">View all Notifications</a>
							</div>
						</div>
					</li> -->
					<!-- /Notifications -->
					
					<!-- User Menu -->
					<!-- <li class="nav-item dropdown has-arrow">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img class="rounded-circle" src="src/assets/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor"></span>
						</a>
						<div class="dropdown-menu">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img src="src/assets/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
								</div>
								<div class="user-text">
									<h6>Ryan Taylor</h6>
									<p class="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<a class="dropdown-item" href="profile.html">My Profile</a>
							<a class="dropdown-item" href="settings.html">Settings</a>
							<a class="dropdown-item" @click="logout">Logout</a> 
						</div>
					</li> -->
					<li class="nav-item">
                    <button type="submit" class="btn btn-danger btn-sm" @click="logout"> 
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="glyphicon glyphicon-log-out">Log out</span> 
                 </button> 
            </li>
					<!-- /User Menu -->
					
				</ul>
				<!-- /Header Right Menu -->
				
            </div>
			<!-- /Header -->
			
			<!-- Sidebar -->
            <div class="sidebar" id="sidebar">
                <div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
								<span>Main</span>
							</li>
							<!-- <li> 
								<a href="index.html"><i class="fe fe-home"></i> <span>Dashboard</span></a>
							</li> -->
							<br>
							<li> 
								<a href="/listad"><i class="fe fe-layout"></i> <span>Create Request</span></a>
							</li>
							<br>
							<li> 
								<a href="/listad"><i class="fe fe-users"></i> <span>Create Meeting</span></a>
							</li>
							<br>
							<li> 
								<a href="/formsave"><i class="fe fe-users"></i><span>Create Users</span></a>
							</li>
							<br>
							<!-- <li> 
								<a href="patient-list.html"><i class="fe fe-user"></i> <span>Patients</span></a>
							</li> -->
							
							<!-- <li> 
								<a href="reviews.html"><i class="fe fe-star-o"></i> <span>Report</span></a>
							</li> -->
						
							<!-- <li> 
								<a href="transactions-list.html"><i class="fe fe-activity"></i> <span>Transactions</span></a>
							</li> -->
							<!-- <li> 
								<a href="settings.html"><i class="fe fe-vector"></i> <span>Settings</span></a>
							</li> -->
							<li class="submenu">
								<a href="#"><i class="fe fe-document"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="invoice-report.html">Invoice Reports</a></li>
								</ul>
							</li>
						<!-- 	<li class="menu-title"> 
								<span>Pages</span>
							</li> -->
							<!-- <li class="submenu">
								<a href="#"><i class="fe fe-document"></i> <span> Blog </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="blog.html"> Blog </a></li>
									<li><a href="blog-details.html"> Blog Details</a></li>
									<li><a href="add-blog.html"> Add Blog </a></li>
									<li><a href="edit-blog.html"> Edit Blog </a></li>
								</ul>
							</li> -->
							<!-- <li><a href="product-list.html"><i class="fe fe-layout"></i> <span>Product List</span></a></li>
							<li><a href="pharmacy-list.html"><i class="fe fe-vector"></i> <span>Pharmacy List</span></a></li>
							<li> 
								<a href="profile.html"><i class="fe fe-user-plus"></i> <span>Profile</span></a>
							</li> -->
						<!-- 	<li class="submenu">
								<a href="#"><i class="fe fe-document"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="login.html"> Login </a></li>
									<li><a href="register.html"> Register </a></li>
									<li><a href="forgot-password.html"> Forgot Password </a></li>
									<li><a href="lock-screen.html"> Lock Screen </a></li>
								</ul>
							</li> -->
						<!-- 	<li class="submenu">
								<a href="#"><i class="fe fe-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="error-404.html">404 Error </a></li>
									<li><a href="error-500.html">500 Error </a></li>
								</ul>
							</li> -->
							<!-- <li> 
								<a href="blank-page.html"><i class="fe fe-file"></i> <span>Blank Page</span></a>
							</li> -->
						<!-- 	<li class="menu-title"> 
								<span>UI Interface</span>
							</li>
							<li> 
								<a href="components.html"><i class="fe fe-vector"></i> <span>Components</span></a>
							</li> -->
							<!-- <li class="submenu">
								<a href="#"><i class="fe fe-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="form-basic-inputs.html">Basic Inputs </a></li>
									<li><a href="form-input-groups.html">Input Groups </a></li>
									<li><a href="form-horizontal.html">Horizontal Form </a></li>
									<li><a class="active" href="form-vertical.html"> Vertical Form </a></li>
									<li><a href="form-mask.html"> Form Mask </a></li>
									<li><a href="form-validation.html"> Form Validation </a></li>
								</ul>
							</li> -->
							<!-- <li class="submenu">
								<a href="#"><i class="fe fe-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="tables-basic.html">Basic Tables </a></li>
									<li><a href="data-tables.html">Data Table </a></li>
								</ul>
							</li> -->
							<!-- <li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style="display: none;">
													<li><a href="javascript:void(0);">Level 3</a></li>
													<li><a href="javascript:void(0);">Level 3</a></li>
												</ul>
											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0);"> <span>Level 1</span></a>
									</li>
								</ul>
							</li> -->
						</ul>
					</div>
                </div>
            </div>
			<!-- /Sidebar -->
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
			
				<div class="content container-fluid">

					<!-- Page Header -->
					<div class="page-header">
						<div class="row">
							<div class="col">
								<h3 class="page-title">User Form</h3>
							
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Edit Users Form</h4>
								</div>
								<div class="card-body">
<form class="navbar-form" v-on:submit.prevent="updateuser()">

  <div class="form-group row">
          <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
             <div class="col-auto">
                <label >First Name</label>
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" required v-model="userr.firstname">
                </div>
          </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" required v-model="userr.lastname">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" required placeholder="email" v-model="userr.email">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" required placeholder="idnumber" v-model="userr.idnumber">
              </div>
                </div>
            </div>

           
            <div class="form-group row">
               <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
             <div class="col-auto">
               
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" required placeholder="phonenumber" v-model="userr.phonenumber">
                </div>
             </div>
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">
                <div class="col-auto">
                 
                <label>Username</label>
                <input name="username" type="text" class="form-control" id="username" required placeholder="username" v-model="userr.username">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
             <div class="col-auto">
                <label >Password</label>
                 
                <input name="password" type="password" class="form-control" id="password" required placeholder="password" v-model="userr.password">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3"> 
                <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dateofbirth" type="date" class="form-control" id="dateofbirth" required placeholder="dateofbirth" v-model="userr.dateofbirth">
                </div>
                </div>
            </div>
             <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">   
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
                 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">
                <div class="col-auto">
              <label>Category</label>
              <select id="category" name="category" class="form-control" required v-model="userr.category">
                        <option value="">Select Category</option>
                        <option value="Admin">Admin</option>
                        <option value="Risafocalpoint">Risa focal Point</option>
                        <option value="RisacontractManager">Risa Contract Manager</option>
                        <option value="ExternalinstitutionUser">External Institution User</option>
                        <option value="Legal">Legal</option>
                      </select>
                    </div>
            </div>
             </div>
             
             <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-6 col-md-offset-3">   
               <div class="col-auto">
              <label>Province</label>
              <select id="province" name="province"  class="form-control" required v-model="province" @change="fetchDistrict($event)">
                        <option v-bind:key="province.id" v-for="province in provinces"  :value='province.id'>{{province.name}}</option>
                      </select>
                    </div>
                </div>
                 <div class="col-xs-20 col-sm-5 col-sm-offset col-md-6 col-md-offset-6">
                <div class="col-auto">
              <label>District</label>
              <select id="district" name="district" class="form-control" required v-model="userr.district">
                        <option v-bind:key="district.id" v-for="district in districts" :value='district.id'>{{district.name}}</option>
                      </select>
                    </div>
            </div>
             </div>
             
       <button type="submit" class="btn btn-primary btn-sm">Update</button> 
</form>
								</div>
							</div>
						</div>
						
					</div>
					
					
				
					
				</div>
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->  
</div>
</template>
<script>
import axios from 'axios';

export default {
    name:'update',

    data(){
        return {
     userr:{
       firstname:"",
       lastname:"",
       email:"",
       dateofbirth:"",
       phonenumber:"",
       category:"",
       gender:"",
       username:"",
       password:"",
       idnumber:"",
	   district:""
     },
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

    fetchuser(id){

            axios.get('http://localhost:2021/registr/find/' +id)
            .then(response =>{
                this.userr = response.data.OBJECT;
                console.log(this.userr);
            });
        },
        updateuser(d){
         if(!this.userr.firstname|| !this.userr.lastname|| !this.userr.email || !this.userr.dateofbirth|| !this.userr.phonenumber|| !this.userr.category|| !this.userr.gender|| !this.userr.username|| !this.userr.password|| !this.userr.idnumber||!this.userr.district){
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
			district:this.userr.district
          }
         
         axios.put('http://localhost:2021/registr/update/'+this.$route.params.id, newusert)
       
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
                this.$router.push({path:'/usdash',query:{alert: response.data.description}});
         });
       /*  d.preventDefault(); */
        }
     /*    d.preventDefault(); */
        },

		 logout:function(){
        this.$store.dispatch('logout')
      }
    },
    created: function(){
        this.fetchuser(this.$route.params.id);
		this.fetchProvince();
    },

	 /*  created:function(){
      
        this.fetchProvince();
    } */
}
</script>
<style scoped>
h1{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: medium;
}

button{
    margin-left: 240px;
    padding-left: 2em;
    padding-right: 2em;
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: medium;
	background-size: auto;
	
}

label{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: medium;
	font-style: normal;
	font-weight: bolder;
	background-position: center;
	
}
h3{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: larger;
	font-language-override: normal;
	font-weight: bold;
	height: fit-content;
	margin-left: 300px;
    padding-left: 2em;
    padding-right: 2em;
}

h4{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: medium;
	font-language-override: normal;
	font-weight: bolder;
	height: fit-content;
	margin-left: 280px;
    padding-left: 2em; 
    padding-right: 2em;
}

a{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: larger;
	font-style: initial;
	font-variant-caps: normal;
}
</style>