<template>
    <div class="container">
       <div class="card-panel p-sm-3 position-relative">
          <div class="text-center">
      <!-- <img src="http://www.footballlogosandkits.com/LOGO+S.C.%20KIYOVU%20SPORT"> -->
      <h1 class="h2 mt-3">Registration</h1>
    </div>
        <form v-on:submit.prevent="addreg()">
        <div class="form-group row">
          <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >First Name</label>
                 
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" v-model="userr.firstname">
                </div>
          </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" v-model="userr.lastname">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" placeholder="email" v-model="userr.email">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" placeholder="idnumber" v-model="userr.idnumber">
              </div>
                </div>
            </div>

           
            <div class="form-group row">
               <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
               
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" placeholder="phonenumber" v-model="userr.phonenumber">
                </div>
             </div>
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">
                <div class="col-auto">
                 
                <label>Username</label>
                <input name="username" type="text" class="form-control" id="username" placeholder="username" v-model="userr.username">
              </div>
                </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >Password</label>
                 
                <input name="password" type="password" class="form-control" id="password" placeholder="password" v-model="userr.password">
                </div>
              </div>
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dateofbirth" type="date" class="form-control" id="dateofbirth" placeholder="dateofbirth" v-model="userr.dateofbirth">
                </div>
                </div>
            </div>
             <div class="form-group row">
                <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3">   
               <div class="col-auto">
              <label>Gender</label>
           
              <select id="gender" name="gender" class="form-control"  v-model="userr.gender">
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
              <select id="category" name="category" class="form-control" v-model="userr.category">
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
              <select id="province" name="province" class="form-control" v-model="province" @change="fetchDistrict($event)">
                        <option v-bind:key="province.id" v-for="province in provinces"  :value='province.id'>{{province.name}}</option>
                      </select>
                    </div>
                </div>
                 <div class="col-xs-20 col-sm-5 col-sm-offset col-md-4 col-md-offset-6">
                <div class="col-auto">
              <label>District</label>
              <select id="district" name="district" class="form-control" v-model="userr.district">
                        <option v-bind:key="district.id" v-for="district in districts" :value='district.id'>{{district.name}}</option>
                      </select>
                    </div>
            </div>
             </div>
             
       <button type="submit" class="btn btn-primary">Submit</button> 
        </form>
      </div>
    </div>
</template>
<script>
import axios from 'axios'

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
      }
  
    },
      created:function(){
      
        this.fetchProvince();
    }
}
</script>
<style scoped>
.card-panel {
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px;
  border-bottom: 10px solid transparent;
  transition: box-shadow 0.25s;
  padding: 20px;
  margin: 0.5rem 0 1rem;
  border-radius: 2px;
  background-color: dimgray;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

/* .form{
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
 
} */

.form-group {
  
  
  font-style: normal;
  font-family: 'Times New Roman', Times, serif;
  font-size: larger;
  width: 85em ;
}
button{
  margin-left: 510px;
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
.min-container .card-panel form .fa {
  top: 13px;
  right: 1rem;
}
@media (min-width: 768px) {
  .min-container {
    max-width: 650px;
  }
}

.min-container {
  margin: 0 auto;
}
</style>