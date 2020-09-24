<template>
    <div class="container">
        <datatable  :data="data" :titles="titles" :action-col="actionCol" :filters="filters" :table-props="tableProps" 
                :selection="false"
                v-on:delete="deleteuser">
          
        </datatable>
    </div>
</template>
<script>
import axios from 'axios'
import Datatable from './Datatable.vue'
import Vue from 'vue'

export default {
components:{
  datatable: Datatable
},

  data(){
      return{
         
          data:[],
          userrs:[],

          titles:[{
          prop:'firstname',
          label:'FirstName'
          },

          {
              prop:'lastname',
              label:'LastName'
          },

          {
               prop:'dateofbirth',
               label:'DOB'
          },

          {
               prop:'gender',
               label:'Gender'
          },

          {
              prop:'email',
              label:'E-mail'
          },

          {
              prop:'phonenumber',
              label:'PhoneNumber'
          },

          {
              prop:'category',
              label:'Category'
          },

          {
              prop:'idnumber',
              label:'ID Number'
          },


          ],

          filters:[
            {
               prop: 'firstname',
            }
          ],

          tableProps:{
          border: true,
          stripe: true,
          defaultSort: {
          prop:'firstname',
          order:'descending'
        }
          },
          actionCol:{
              buttons:[
               {
            id:1,
            label:"Delete",
            classes:" btn-sm btn-danger",
            event:"delete",
            icon:"fa fa-trash-o",
            tooltip:{
              placement:"top",
              title:"Delete"
            }
          },
              ]
          },

      }
  },
  methods:{
       finduserrs(){
         axios.get('http://localhost:2021/registr/all')
         .then(response =>{
             this.data =  response.data.OBJECT;
             this.userrs = response.data.OBJECT;
             console.log(this.userrs);
         }).catch(err =>{
             console.error(err);
         });
        },

        deleteuser: function(userr){
         axios.delete('http://localhost:2021/registr/delete/'+userr.id)
         .then(response =>{
             this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
             this.$router.push({path:'/list',query:{alert:response.data.description}});
         });
        }
  },

   created: function(){
    this.finduserrs();
    },
}
</script>
<style scoped>

</style>