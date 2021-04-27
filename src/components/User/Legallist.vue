<template>
        <div class="container">
    <div class="input-group mb-3">
        <div class="input-group-prepend"> 
    <span class="input-group-text"><i class="fas fa-search"></i></span>
  </div>                
  <input class="form-control" type="search" v-model="filterInput">
</div>

    <table  class="table table-bordered center">
        <thead>
            <tr>
         <th>ID</th>
         <th>Firstname</th>
         <th>LastName</th>
         <th>E-mail</th>
         <th>IdNumber</th>
         <th>PhoneNumber</th>
         <th>Category</th>
         <th>DateOfBirth</th>
         <th>Gender</th>
        
       <!--   <th>Actions</th>   -->
            </tr>
        </thead>

        <tbody>
            <tr v-bind:key="regg.uuid" v-for="regg in filterBy(reggs, filterInput)">
                <td>{{regg.id}}</td>
                <td>{{regg.firstname}}</td>
                <td>{{regg.lastname}}</td>
                <td>{{regg.email}}</td>
                <td>{{regg.idnumber}}</td>
                <td>{{regg.phonenumber}}</td>
                <td>{{regg.category}}</td>
                <td>{{regg.dob}}</td>
                <td>{{regg.gender}}</td>
               
                <!-- <td><button class="btn btn-danger" type="submit" @click="deleteuser(userr.id)">Delete</button></td>
                <td><router-link class="btn btn-default" v-bind:to="'/edit/'+userr.uuid">Update</router-link></td> -->
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            reggs:[],
            alert:'',
            filterInput:''
        }
    },
    methods:{
          findreggs(){
         axios.get('http://localhost:2021/registr/category/Legal')
         .then(response =>{
             this.reggs = response.data.OBJECT;
             console.log(this.reggs);
         }).catch(err =>{
             console.error(err);
         });
        },

         filterBy(list, value){
            value = value.charAt(0).toUpperCase()+ value.slice(1);
            return list.filter(function(reggs){
                return reggs.firstname.indexOf(value)> -1;
            })
        }

        },

         created: function(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        }
        this.findreggs();
    },
    
}
</script>
<style scoped>

</style>