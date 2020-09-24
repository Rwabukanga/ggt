<template>
<div class="container">
    <form>
          <div class="form-group row">
             <div class="col-auto">
                <label >First Name</label>
                 
                <input name="firstname" type="text" class="form-control" id="firstname" placeholder="firstname" v-model="userr.firstname">
                </div>
                <div class="col-auto">
                <label>Last Name</label>
                <input name="lastname" type="text" class="form-control" id="lastname" placeholder="lastname" v-model="userr.lastname">
              </div>
            </div>

            <div class="form-group row">
             <div class="col-auto">
                <label >E-mail</label>
                 
                <input name="email" type="text" class="form-control" id="email" placeholder="email" v-model="userr.email">
                </div>
                <div class="col-auto">
                <label>Idnumber</label>
                <input name="idnumber" type="text" class="form-control" id="idnumber" placeholder="idnumber" v-model="userr.idnumber">
              </div>
            </div>

           
            <div class="form-group row">
             <div class="col-auto">
                <label >PhoneNumber</label>
                 
                <input name="phonenumber" type="text" class="form-control" id="phonenumber" placeholder="phonenumber" v-model="userr.phonenumber">
                </div>
                <div class="col-auto">
                <label>Username</label>
                <input name="username" type="text" class="form-control" id="username" placeholder="username" v-model="userr.username">
              </div>
            </div>

            <div class="form-group row">
             <div class="col-auto">
                <label >Password</label>
                 
                <input name="password" type="password" class="form-control" id="password" placeholder="password" v-model="userr.password">
                </div>

                <div class="col-auto">
                <label >DateofBirth</label>
                 
                <input name="dateofbirth" type="date" class="form-control" id="dateofbirth" placeholder="dateofbirth" v-model="userr.dateofbirth">
                </div>
              
            </div>
             <div class="form-group row">
                   
               <div class="col-auto">
              <label>Gender</label>
              <select id="gender" name="gender" class="form-control" v-model="userr.gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                <div class="col-auto">
              <label>Category</label>
              <select id="category" name="category" class="form-control" v-model="userr.category">
                        <option value="">Select Category</option>
                        <option value="Admin">Admin</option>
                        <option value="Member">Member</option>
                      </select>
                    </div>
            </div>

       <button type="submit" class="btn btn-primary">Update</button> 
    </form>
</div>    
</template>
<script>
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
       idnumber:""
     }
        }
    },
    methods:{
        fetchuser(uuid){
            axios.get('http://localhost:2021/registr/find/'+uuid)
            .then(response =>{
                this.userr = response.data.OBJECT;
                console.log(this.userr);
            });
        },
        updateuser(d){
         if(!this.userr.firstname|| !this.userr.lastname|| !this.userr.email || !this.userr.dateofbirth|| !this.userr.phonenumber|| !this.userr.category|| !this.userr.gender|| !this.userr.username|| !this.userr.password|| !this.userr.idnumber){
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
            idnumber: this.userr.idnumber
          }
         
         axios.post('http://localhost:2021/registr/update/'+this.router.params.uuid, newusert)
       
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
                this.$router.push({path:'/',query:{alert: response.data.description}});
         });
        d.preventDefault();
        }
        d.preventDefault();
        }
    },
    created: function(){
        this.fetchuser(this.$route.params.uuid);
    }
}
</script>
<style scoped>

</style>