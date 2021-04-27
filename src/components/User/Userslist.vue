<template>
      <div class="container mt-5">
    <h2 class="mb-3">Registrant List ({{reggs.length}})</h2>
    <div class="row">
     
      <div class="col-md-4" >
        <datatable-component :options="options"  :actions="actions" :data="reggs" :columns="columns" id="userslist"
        v-on:delete="deleteuser">
        </datatable-component>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DataTable from './DataTable.vue'


export default {
  name: "reggs",
  components: {
    "datatable-component": DataTable
  },
  data() {
    return {
      reggs: [],
     
      options:'',
       
      actions:'',
      data:'',
      columns:[{
        title:'firstname',
        reggs:'firstname'
      },

      {
       title:'Lastname',
        reggs:'lastname'

      },

      {
        title:'email',
        reggs:'email'
        
      },

      {
      title:'idnumber',
      reggs:'idnumber'
        
      },

      {
      title:'category',
      reggs:'category'
       
      },

      {
      title:'dateofbirth',
      reggs:'dateofbirth'
        
      }
      
      ],

      actions:[
        {
          id:1,
          btnText:"delete",
          btnClass:"btn btn-white text-danger btn-sm",
          event:"delete",
          iconClass: "fas fa-trash",
          btnFn: (id) => {
          console.log(id);
          },
          btnParamName: "delete",
          },
           
        ],
      extra_options: {},
    };
  },
  methods:{
          findreggs(){
         axios.get('http://localhost:2021/registr/all')
         .then(response =>{
             this.reggs = response.data.OBJECT;
             console.log(this.reggs);
         }).catch(err =>{
             console.error(err);
         });
        },

         deleteuser: function(reg){
            axios.delete('http://localhost:2021/registr/delete/'+reg.id)
            .then(response => {
              this.$swal({
                    type: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    toast: "true",
                    timer: 5000,
                    text: response.data.description
                });
                this.$router.push({path:'/uslist',query:{alert:response.data.description}})
            });
        },

         /* filterBy(list, value){
            value = value.charAt(0).toUpperCase()+ value.slice(1);
            return list.filter(function(reggs){
                return reggs.firstname.indexOf(value)> -1;
            })
        } */

        },

      created()/* : function() */{
       /*  if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        } */
        this.findreggs();
    },
}
  
</script>
<style scoped>
.datatable-component{
  color: black;
  background-color: black;
}
reggs{
  color: black;
  background-color: black;
}
.title{
  background-color: black;
  color: black;
}
</style>