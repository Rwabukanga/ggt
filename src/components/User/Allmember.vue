<template>
<div class="container">
    <div class="input-group mb-3">
        <div class="input-group-prepend"> 
    <span class="input-group-text"><i class="fas fa-search"></i></span>
  </div>                
  <input class="form-control" type="search" v-model="filterInput">
</div>

    <table  class="table table-bordered ">
        <thead>
            <tr>
         <th>ID</th>
         <th>Firstname</th>
         <th>LastName</th>
         <th>E-mail</th>
         <th>IdNumber</th>
         <th>PhoneNumber</th>
         <!-- <th>UserName</th>
         <th>Password</th> -->
         <th>DateOfBirth</th>
         <th>Gender</th>
         <th>Category</th>   
       <!--   <th>Actions</th>   -->
            </tr>
        </thead>

        <tbody>
            <tr v-bind:key="userr.uuid" v-for="userr in filterBy(userrs, filterInput)">
                <td>{{userr.id}}</td>
                <td>{{userr.firstname}}</td>
                <td>{{userr.lastname}}</td>
                <td>{{userr.email}}</td>
                <td>{{userr.idnumber}}</td>
                <td>{{userr.phonenumber}}</td>
                <!-- <td>{{userr.username}}</td>
                <td>{{userr.password}}</td> -->
                <td>{{userr.dateofbirth}}</td>
                <td>{{userr.gender}}</td>
                <td>{{userr.category}}</td>
                <!-- <td><button class="btn btn-danger" type="submit" @click="deleteuser(userr.id)">Delete</button></td>
                <td><router-link class="btn btn-default" v-bind:to="'/edit/'+userr.uuid">Update</router-link></td> -->
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios';

export default{
    name:'all',
    data(){
        return{
            userrs:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
        finduserrs(){
         axios.get('http://localhost:2021/registr/all')
         .then(response =>{
             this.userrs = response.data.OBJECT;
             console.log(this.userrs);
         }).catch(err =>{
             console.error(err);
         });
        },
        deleteuser(id){
         axios.delete('http://localhost:2021/registr/delete/'+id)
         .then(response =>{
             this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
             this.$router.push({path:'/all',query:{alert:response.data.description}});
         });
        },

        filterBy(list, value){
            value = value.charAt(0).toUpperCase()+ value.slice(1);
            return list.filter(function(userrs){
                return userrs.firstname.indexOf(value)> -1;
            })
        }
    },

     created: function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        }
        this.finduserrs();
    },
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


</style>