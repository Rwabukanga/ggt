<template>
    <div class="container">
         <input  class="form-control" placeholder="enter" v-model="filterInput">
        <table class="table table-stripped">
            <thead>
                <tr>
           <th>Name</th>   
           <th>E-mail</th>
           <th>PhoneNumber</th>
           <th>Registrant</th>
           <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="reg.id" v-for="reg in filterBy (regs,filterInput)">
              <td>{{reg.name}}</td>
              <td>{{reg.email}}</td>
              <td>{{reg.phonenumber}}</td>
              <td>{{reg.reg.firstname}}</td>   
             <!--    <td><button  class="btn btn-danger" type="submit" @click="deleteseller(branchuser.id)">Delete</button></td> -->
                <td><router-link class="btn btn-default" v-bind:to="'/editinst/'+reg.id">Update</router-link></td>
               <!--  <td><router-link class="btn btn-default" v-bind:to="'/addinst/'+reg.uuid">Add Institution</router-link></td> -->
                </tr>
            </tbody>
        </table>
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
            axios.get('http://localhost:2021/institution/all')
            .then(response => {
              this.regs  = response.data.OBJECT;
              console.log(this.regs);
              
            }).catch(response  =>{
             console.error(err);
            });

        },
        /* deleteseller(id){
            axios.delete('http://localhost:2002/branchuser/delete/'+id)
            .then(response => {
                this.$router.push({path:'/allseller',query:{alert:response.data.description}})
            });
        }, */
        filterBy(list, value){
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function(regs){
                return regs.name.indexOf(value)> -1;
            });
        },

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

</style>