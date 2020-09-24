import Vue from 'vue';
import Vuex from 'vuex';
import createdPersistatedState from 'vuex-persistedstate';
import SecureLs from 'secure-ls';
import axios from 'axios';
import { router } from './routes';

var ls = new SecureLs({ isCompression: false});

Vue.use(Vuex);
/* myStorage = window.sessionStorage; */
/* var myStorage = window.sessionStorage;
let field = document.getElementById("field"); */

/* window.onload=function(){var grayscale = document.getElementById('grayscale');
console.log(grayscale.value)

grayscale.onchange = function(){
    console.log(grayscale.value)
}
} */

export const store = new Vuex.Store({

    plugins : [

        createdPersistatedState({
            storage :{
                 getItem: key => ls.get(key),
                 setItem: (key, value) => ls.set(key, value),
                 removeItem: key => ls.remove(key),
                

            }
        }) 
    ],

    state: {
        backend_url: 'http://localhost:2021',
        auth:null,
    },


    getters: {
        getBackendUrl: state =>{
            return state.backend_url;
        },
        getUsername: state =>{

            let username = "Unknown";
            
            if(state.auth === null){
                username = "not logged in";
            }else if(state.auth.user.reg.category === "Admin"){

                username = state.auth.user.username;

            }
            else{
                
                username = state.auth.firstname;
            }
           
            return username;
        }
    },
   
    mutations: {
        mutateAuth: (state,data) =>{

            state.auth = data
        },
        mutateCredentials: (state, data) =>{

            state.auth.credentials = data
        }
    },
            
    actions :{
        login: (context, creds) =>{
            //alert("hello")
            console.log(creds);
            axios({
               method: "POST",
               url: context.state.backend_url + "/ussss/login",
               data: creds,
               
              /*  headers :{
                   'authorization': 'Bearer' + creds.access_token
               } */
            })
            
            .then(response =>{
              
                if(response.data.code == 200){
                    response.data.OBJECT.credentials = creds;
                    context.commit('mutateAuth', response.data.OBJECT);
                       console.log(response.data.OBJECT);
                    /* if(response.data.OBJECT.user.reg.category == "Admin"){ */
                        router.push('/dashboardreg');
                    // }else {
                    //     router.push('/login');
                    // }
                   

                }
            })

            .catch(err =>{
               console.error(err);
            })
        },
        logout: context=>{
            context.commit('mutateAuth', null);
            localStorage.clear();
            router.push("/login");
        },
        signUp: (context, credentials) => {
            axios.post(context.state.backend_url + "/registr/saveuser", credentials)
            .then(res =>{
                if(res.data.code === 200){
                 context.commit('mutateAuth', res.data.OBJECT);
                 router.push("/dashboardreg")
                } else{
                    alert.error(res.data.description);
                }
            })
            .catch(err =>{
                alert.error(err);
            })
        },
    }
})

/* if(sessionStorage.getItem("autosave")){
    field.value = sessionStorage.getItem("autosave");
} */




store.subscribe((mutation,state) => {
    if(mutation.type === "idleVue/IDLE-CHANGED" && mutation.payload === true){
        store.dispatch('logout')
    } else if(mutation.type === "mutateAuth" && mutation.payload !== null){

        var expiry = state.auth.credentials.expires_in*1000;

        console.log("expires in"+ expiry)
       /*  setInterval(() => {
            store.dispatch('login')
        }, (state.auth.credentials.expires_in*1000)); */
    }
  });

   /* if(sessionStorage.getItem("autosave")){

    field.value = sessionStorage.getItem("autosave");
      
    } */
    /* field.addEventListener("change", function() {
        // And save the results into the session storage object
    sessionStorage.setItem("autosave", field.value);
    });   */