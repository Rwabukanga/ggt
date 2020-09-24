import  User from './components/User.vue';
import  Home from './components/Home.vue';
import Login from './components/User/Login.vue';
import Registration from './components/User/Registration.vue';
import Allmember from './components/User/Allmember.vue';
import Updateuser from './components/user/Updateuser.vue';
import Memberadd  from './components/user/Memberadd.vue';
import Memberlist from './components/user/Memberlist.vue';
import loginnn   from   './components/user/loginnn.vue';
import Dashboard from './components/user/Dashboard.vue';
import addingmembership from './components/user/addingmembership.vue';
import Alluserlist       from './components/user/Alluserlist.vue';
import ContactForm       from './components/user/ContactForm.vue';
import Dash              from './components/user/Dash.vue';
import Memberlistdash    from './components/user/Memberlistdash.vue';
import AllregistrationDash from './components/user/AllregistrationDash.vue';
import Router from 'vue-router';
import { guards }  from './router-guards';
import Vue from 'vue';
import NProgress from 'nprogress';


Vue.use(Router)


export const router = new Router({

    linkExactActiveClass: 'active',
    mode: 'history',

    routes : [
        {
         path:"/user",
         component:User
        },
        {
            path:"/home", 
            component:Home
        },
        {
            path:"/login", 
            component:Login
        },
        {
            path:"/reg", 
            component:Registration
        },
        {
            path:"/lg", 
            component:loginnn
        },
   
        {
            path:"/dashboardreg",
            beforeEnter: guards.isAdmin,
            component:Dashboard
        },

        {
            path:"/all", 
            component:Allmember
        },

        {
            path:'/edit/:uuid', 
            component:Updateuser
        },

        {
            path:'/addm',
            component:Memberadd
        },

        {
            path:'/list',
            component:Memberlist
        },

        {
            path:'/kyvmember',
            component:addingmembership
        },

        {
            path:'/listreg',
            component:Alluserlist
        },

        {
            path:'/contact',
            component:ContactForm
        },
        
        {
            path:'/',
            component:Dash
        },

        {
            path:'/memberlist',
            component:Memberlistdash
        },

        {
            path:'/reglist',
            component:AllregistrationDash
        }
       
    ]

})

router.beforeEach((to,from, next)=>{
    if(to.name){
        NProgress.start()
    }
 next()
})

router.afterEach( () =>{
NProgress.done()
})
