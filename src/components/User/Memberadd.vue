<template>
    <div class="container">
          <div class="card-panel p-sm-3 position-relative">
     <div class="card-header p-sm-2 position-relative">
      <h1>Registration</h1>
     </div>
        <form v-on:submit.prevent="addmember()">

<div class="form-group row">
      <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >First Name</label>
                 
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" v-model="memberr.firstname">
                </div>
      </div>
        <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" v-model="memberr.lastname">
              </div>
      </div>
            </div>

             <div class="form-group row">
                   <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" placeholder="email" v-model="memberr.email">
                </div>
                   </div>
            <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" placeholder="idnumber" v-model="memberr.idnumber">
              </div>
                   </div>
            </div>

            <div class="form-group row">
                  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                 <div class="col-auto">
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" placeholder="phonenumber" v-model="memberr.phonenumber">
                </div>
                  </div>
             <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                 <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dob" type="date" class="form-control" id="dob" placeholder="dateofbirth" v-model="memberr.dob">
                </div>
                  </div>
            </div>
            <div class="form-group row">
                  <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
                <div class="col-auto">
              <label>Gender</label>
              <select id="gender" name="gender" class="form-control" v-model="memberr.gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
            <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>Province</label>
              <select class="form-control"  id="province"   v-model="province" @change="fetchDistrict($event)">
                       
                        <option v-bind:key="province.id" v-for="province in provinces"  :value='province.id'>{{province.name}}</option>
                        
                      </select>
                    </div>
                  </div>
            </div>
            <div class="form-group row">
        <div class="col-xs-20 col-sm-12 col-sm-offset col-md-4 col-md-offset-3"> 
             <div class="col-auto">
              <label>District</label>
              <select id="district" name="district" class="form-control" v-model="memberr.district">
                      
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
       memberr:{},
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
        addmember(b){
            if(!this.memberr.firstname || !this.memberr.lastname || !this.memberr.email || !this.memberr.email || !this.memberr.dob || !this.memberr.phonenumber || !this.memberr.idnumber || !this.memberr.gender|| !this.memberr.district){
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
                    district: this.memberr.district
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
                this.$router.push({path:'/addm',query:{alert: response.data.description}});
                });
               /*  b.preventDefault(); */
            }
            /* b.preventDefault(); */
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
  background-color: #262b2f;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.card-header{
  text-align: center;
  background-color: lightslategrey;
  font-family: 'Times New Roman', Times, serif;
  font-size: x-large;
  font-style: normal;
  
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
  width: 85.5em ;
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

/* .min-container {
  margin: 0 auto;
} */

</style>