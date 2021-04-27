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
						<img src="src/assets/img/risalogo.Jpg" alt="Logo" width="30" height="30">
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
							<!-- <li> 
								<a href="appointment-list.html"><i class="fe fe-layout"></i> <span>Appointments</span></a>
							</li> -->
							<br>
							<li> 
								<a href="/usdash"><i class="fe fe-star-o"></i><span>Create Meeting</span></a>
							</li>
							<br>
							<li> 
								<a href="/formsave"><i class="fe fe-user-plus"></i> <span>Create Users</span></a>
							</li>
							<br>
							<li> 
								<a href="/addins"><i class="fe fe-user"></i> <span>Create Institution</span></a>
							</li>
							<br>

							<li> 
								<a href="/rlist"><i class="fe fe-star-o"></i> <span>View Request</span></a>
							</li>
							<br>
							<li> 
								<a href="/addcat"><i class="fe fe-activity"></i> <span>Create Category</span></a>
							</li>
							<!-- <li> 
								<a href="settings.html"><i class="fe fe-vector"></i> <span>Settings</span></a>
							</li> -->
							<!-- <li class="submenu">
								<a href="#"><i class="fe fe-document"></i> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a href="invoice-report.html">Invoice Reports</a></li>
								</ul>
							</li> -->
							<!-- <li class="menu-title"> 
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
								<h3 class="page-title">Request Project</h3>
							
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Request Project</h4>
								</div>
								<div class="card-body">
<form class="navbar-form" v-on:submit.prevent="addreg()">

  <div class="form-group row">
          <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Project Title</label>
                 
                <input name="projecttitle" type="text" id="projecttitle" class="form-control"  placeholder="projecttitle" required v-model="projecttitle">
                </div>
          </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Project Description</label>
                <!-- <input name="projectdescription" type="text" id="projectdescription" class="form-control"  placeholder="projectdescription" required v-model="projectdescription"> -->
				  <textarea name="projectdescription" id="projectdescription" class="form-control" v-model="projectdescription" placeholder="Enter Description here ..."></textarea>
              </div>
                 </div> 
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Proposed Delivery timeLine</label>
                 
                <input name="proposeddeliverytimeline" type="text" id="proposeddeliverytimeline" class="form-control"  required placeholder="proposeddeliverytimeline" v-model="proposeddeliverytimeline">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Proposed Technologies</label>
             <!--    <input name="proposedtechnologies" type="text" id="proposedtechnologies" class="form-control"  required placeholder="proposedtechnologies" v-model="proposedtechnologies"> -->
			   <textarea name="proposedtechnologies" id="proposedtechnologies" class="form-control" v-model="proposedtechnologies" placeholder="Enter technologies here ..."></textarea>
              </div>
                </div>
            </div>

           
            <div class="form-group row">
               <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
               
                <label >Proposed Budgets</label>
                 
                <input name="proposedfinancialbudget" type="text" id="proposedfinancialbudget" class="form-control"  required placeholder="proposedfinancialbudget" v-model="proposedfinancialbudget">
                </div>
             </div>
            
			<div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
            <div class="col-auto">
            <label >Deliverables</label>
                 
            <input name="deliverables" type="text" id="deliverables" class="form-control" required placeholder="deliverables" v-model="deliverables">
            </div>
            </div>

            </div>

            <div class="form-group row">
           <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Request Date</label>
                 
                <input name="requestdate" type="date" class="form-control" id="requestdate" required placeholder="requestdate" v-model="requestdate">
                </div>
              </div>
            <!--     <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label >Deliverables</label>
                 
                <input name="deliverables" type="text" id="deliverables" class="form-control" required placeholder="deliverables" v-model="deliverables">
                </div>
                </div> -->

             <!-- <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Comment</label>
                 
                <input name="comment" type="text" id="comment" class="form-control"  required placeholder="comment" v-model="comment">
                </div>
              </div> -->
            <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
            <div class="col-auto">
			<label>Comment</label>
			  <textarea name="comment" id="comment" class="form-control" v-model="comment" placeholder="Enter text here..."></textarea>
			</div>
			</div>	

			 <!-- <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Institution</label>
              <select class="form-control"  id="institution" required  v-model="institution">
                       
                        <option v-bind:key="institution.id" v-for="institution in institutions"  :value='institution.id'>{{institution.name}}</option>
                        
                      </select>
                    </div>
                  </div>  -->
				  
            </div>

           <!--  <div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Comment</label>
                 
                <input name="comment" type="text" id="comment" class="form-control"  required placeholder="comment" v-model="comment">
                </div>
              </div>
            </div> -->
            <div class="form-group row">
            <!--  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Category</label>
              <select class="form-control"  id="category" required  v-model="userr.category">
                       
                        <option v-bind:key="category.id" v-for="category in categories"  :value='category.id'>{{category.name}}</option>
                        
                      </select>
                    </div>
                  </div> -->

<div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Request Expertise</label>
              <select class="form-control"  id="expertise" required  v-model="expertise">
                       
                        <option v-bind:key="expertise.id" v-for="expertise in expertises"  :value='expertise.id'>{{expertise.name}}</option>
                        
                      </select>
                    </div>
                  </div>


			</div>
            <h1>Available Documents</h1>
			<br>
			 <div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="file">Software Requirement Specification</label>
              <input type="file" id="file" name="file" @change="onFileUpload">
                    </div>
                  </div>

             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
               <label for="needassessmentreport">Need Assessment Report</label>
              <input type="file" id="needassessmentreport" name="needassessmentreport" @change="onFileUpload">
                    </div>
                  </div>


			</div>

			 <div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="financialproposal">Financial Proposal</label>
              <input type="file" id="financialproposal" name="financialproposal" @change="onFileUpload">
                    </div>
                  </div>
			
			 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="technicalproposal">Technical Proposal</label>
              <input type="file" id="technicalproposal" name="technicalproposal" @change="onFileUpload">
                    </div>
                  </div>


			</div>


			 <div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="purchaseorder">Purchase Order</label>
              <input type="file" id="purchaseorder" name="purchaseorder" @change="onFileUpload">
                    </div>
                  </div>
			
			 <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="invoice">Invoice</label>
              <input type="file" id="invoice" name="invoice" @change="onFileUpload">
                    </div>
                  </div>


			</div>

			<div class="form-group row">
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="termsofreference">Terms of Reference</label>
              <input type="file" id="termsofreference" name="termsofreference" @change="onFileUpload">
                    </div>
                  </div>
			
			<div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Institution</label>
              <select class="form-control"  id="institution" required  v-model="institution">
                       
                        <option v-bind:key="institution.id" v-for="institution in institutions"  :value='institution.id'>{{institution.name}}</option>
                        
                      </select>
                    </div>
                  </div> 
			<!--  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label for="invoice">INVOICE</label>
              <input type="file" id="invoice" name="invoice" @change="onFileUpload">
                    </div>
                  </div> -->


			</div>
             
       <button type="submit" class="btn btn-primary btn-sm">Save</button> 
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
  name:'add',
    data(){
      return{
      userr:{},
    /*    provinces:[],
       province:0,
       districts:[],
       district:0, */
	   /* categories:[],
	   category:0, */
	   institutions:[],
	   institution:'',
	   expertises:[],
	   expertise:'',
	   FILE:null,
	   projecttitle:'',
	   projectdescription:'',
	   proposeddeliverytimeline:'',
	   proposedfinancialbudget:'',
	   proposedtechnologies:'',
	   proposedtechnologies:'',
	   comment:'',
	   deliverables:'',
	   requestdate:''
	   
	
	}
    },
	
     methods:{

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

	onFileUpload (event) {
    this.FILE = event.target.files[0]
    },

      addreg(){
		  const formData = new FormData()
	    
		  formData.append('file', this.FILE,this.FILE.file)
		  formData.append('needassessmentreport',this.FILE, this.FILE.needassessmentreport)
		  formData.append('financialproposal',this.FILE, this.FILE.financialproposal)
		  formData.append('technicalproposal',this.FILE, this.FILE.technicalproposal)
		  formData.append('purchaseorder', this.FILE, this.FILE.purchaseorder)
		  formData.append('invoice', this.FILE, this.FILE.invoice)
		  formData.append('termsofreference', this.FILE,this.FILE.termsofreference)
		  formData.append('projecttitle', this.projecttitle)
		  formData.append('projectdescription', this.projectdescription)
		  formData.append('proposeddeliverytimeline', this.proposeddeliverytimeline)
		  formData.append('proposedtechnologies', this.proposedtechnologies)
		  formData.append('proposedfinancialbudget', this.proposedfinancialbudget)
		  formData.append('requestdate', this.requestdate)
		  formData.append('deliverables', this.deliverables)
		  formData.append('comment', this.comment)
		  formData.append('category', this.category)
		  formData.append('institution', this.institution) 
		  formData.append('expertise', this.expertise) 
          formData.append('requestdate', this.requestdate) 
          axios.post('http://localhost:2021/request/uploadfile', formData, {

		  }).then((response)=>{
            console.log(response.data.OBJECT)
			this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
		  })
      },

	 /*  fecthCategory(){
	   axios.get("http://localhost:2021/category/all")
     .then(response =>{
         this.categories = response.data.OBJECT;
         console.log(this.categories);
     }).catch(response =>{
        //  console.error(err);
     });
	  }, */

	  fecthInstitution(){
	   axios.get("http://localhost:2021/institution/all")
       .then(response =>{
         this.institutions = response.data.OBJECT;
         console.log(this.institutions);
     }).catch(response =>{
        //  console.error(err);
     });
	  },

	   fecthexpertises(){
	   axios.get("http://localhost:2021/expertise/all")
       .then(response =>{
         this.expertises = response.data.OBJECT;
         console.log(this.expertises);
     }).catch(response =>{
        //  console.error(err);
     });
	  },

      logout:function(){
        this.$store.dispatch('logout')
      }
  
    },
    created:function(){
      
        /* this.fecthCategory(); */
		 this.fecthInstitution();
		 this.fecthexpertises();
    }
}
</script>
<style scoped>
h1{
	font-family: 'Times New Roman', Times, serif;
	font-display: initial;
	font-size: larger;
	font-weight: bolder;
	margin-left: 190px;
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