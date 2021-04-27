/* import  User from './components/User.vue';
import  Home from './components/Home.vue'; */
import Login from './components/User/Login.vue';
import Registration from './components/User/Registration.vue';
import Allmember from './components/User/Allmember.vue';
import Updateuser from './components/user/Updateuser.vue';
import Memberadd  from './components/user/Memberadd.vue';
import Memberlist from './components/user/Memberlist.vue';
import loginnn   from   './components/user/loginnn.vue';
import Dashboard from './components/user/Dashboard.vue';
import addingmembership from './components/user/addingmembership.vue';
/* import Alluserlist       from './components/user/Alluserlist.vue';
import ContactForm       from './components/user/ContactForm.vue'; */
import Dash              from './components/user/Dash.vue';
/* import Memberlistdash    from './components/user/Memberlistdash.vue';
import AllregistrationDash from './components/user/AllregistrationDash.vue';
import CreateInstitution   from './components/user/CreateInstitution.vue';
import Userlist   from './components/user/Userlist.vue';
import ViewInstitution  from './components/user/ViewInstitution.vue'; */
/* import CreateRequest   from './components/user/CreateRequest.vue'; */
import RequestList   from './components/user/RequestList.vue';
/* import Createmeeting   from './components/user/Createmeeting.vue';
import ViewMeeting   from './components/user/ViewMeeting.vue'; */
import editMeeting   from './components/user/editMeeting.vue';
/* import editinstitution   from './components/user/editinstitution.vue';
import Viewusers   from './components/user/Viewusers.vue';
import RisafocalpointDashboard   from './components/user/RisafocalpointDashboard.vue';
import RisacontractmgrDashboard   from './components/user/RisacontractmgrDashboard.vue';
import Externalinstitutionuserdashboard   from './components/user/Externalinstitutionuserdashboard.vue';
import LegalDashboard   from './components/user/LegalDashboard.vue';
import Das   from './components/user/Das.vue';
import Userlistdashboard   from './components/user/Userlistdashboard.vue'; */
import Newform   from './components/user/Newform.vue';
import Institutioncrt   from './components/user/Institutioncrt.vue';
import MeetingCreation   from './components/user/MeetingCreation.vue';
import RequestCreation   from './components/user/RequestCreation.vue';
import Institutionedit   from './components/user/Institutionedit.vue';
import Meetingedit   from './components/user/Meetingedit.vue';
import RisafocalDash   from './components/user/RisafocalDash.vue';
import Risacontractmgrdash   from './components/user/Risacontractmgrdash.vue';
import Externalinstitutiondash   from './components/user/Externalinstitutiondash.vue';
import Legaldash   from './components/user/Legaldash.vue';
import Risadmindash   from './components/user/Risadmindash.vue';
import listcategory   from './components/user/listcategory.vue'; 
import Loginn   from './components/user/Loginn.vue';
/* import Risafocallist   from './components/user/Risafocallist.vue';
import Legallist   from './components/user/Legallist.vue';
import listcontrctmngr  from './components/user/listcontrctmngr.vue'; */
import Userslist  from './components/user/Userslist.vue';
import listusersdash  from './components/user/listusersdash.vue';
import Requestdash  from './components/user/Requestdash.vue';
import Addinstitution  from './components/user/Addinstitution.vue';
import Adminlist  from './components/user/Adminlist.vue';
import Editlistuser  from './components/user/Editlistuser.vue';
import Meetingdash  from './components/user/Meetingdash.vue';
import ListMeetingdash  from './components/user/ListMeetingdash.vue';
import Addcategorydash  from './components/user/Addcategorydash.vue';
import Categorylist  from './components/user/Categorylist.vue';
import Categoryedit  from './components/user/Categoryedit.vue';
import Documentdash  from './components/user/Documentdash.vue';

import Router from 'vue-router'
/* import { guards }  from './router-guards'; */
import Vue from 'vue'
import NProgress from 'nprogress';


Vue.use(Router)


export const router = new Router({

    linkExactActiveClass: 'active',
    mode: 'history',

    routes : [
       /*  {
         path:"/user",
         component:User
        },
         */
       /*  {
            path:"/home", 
            component:Home
        }, */

       /* {
            path:'/login', 
            component:Login
        },  */

       /*  {
            path:"/reg", 
            component:Registration
        }, */

        /* {
            path:"/lg", 
            component:loginnn
        }, */
   
        /* {
            path:"/dashboardreg",
            beforeEnter: guards.isAdmin, 
            component:Dashboard
        }, */

       /*  {
            path:"/all", 
            component:Allmember
        }, */

      
 
       /*  {
            path:'/addm',
            component:Memberadd
        },
 */
      /*   {
            path:'/list',
            component:Memberlist
        }, */

        {
            path:'/kyvmember',
            component:addingmembership
        },

        /* {
            path:'/listreg',
            beforeEnter: guards.isAdmin, 
            component:Alluserlist
        }, */

      /*   {
            path:'/contact',
            component:ContactForm
        }, */
        
      /*   {
            path:'/',
            component:Dash
        }, */

       /*  {
            path:'/memberlist',
            component:Memberlistdash
        }, */

       /*  {
            path:'/reglist',
            component:AllregistrationDash
        }, */

       /*  {
            path:'/addinst',
            component:CreateInstitution
        },  */

        /* {
            path:'/userlist',
            beforeEnter: guards.isAdmin,
            component:Userlist
        },
 */
       /*  {
            path:'/listins',
            beforeEnter: guards.isRisafocalpointOrRisacontractManagerOrAdmin,
            component:ViewInstitution
        },
 */
       /*  {
            path:'/addreq/:uuid',
            component:CreateRequest
        }, */

        {
            path:'/rlist',
            component:RequestList
        },

        /* {
            path:'/savemeeting/:uuid',
            component:Createmeeting
        }, */

       /*  {
            path:'/listmeeting',
            beforeEnter: guards.isRisafocalpointOrRisacontractManager,
            component:ViewMeeting 
        },
 */
        {
            path:'/editmt/:id',
            component:editMeeting
        },

    /*     {
            path:'/editinst/:id',
            component:editinstitution
        }, */

       /*  {
            path:'/listus',
            beforeEnter: guards.isAdmin,
            component:Viewusers
        }, */

      /*   {
            path:'/rfpdash',
            beforeEnter: guards.isRisafocalpoint,
            component:RisafocalpointDashboard
        }, */

       /*  {
            path:'/rsmdash',
            beforeEnter: guards.isRisacontractManager, 
            component:RisacontractmgrDashboard
        }, */

        /* {
            path:'/extusdash',
            beforeEnter: guards.isExternalinstitutionUser,
            component:Externalinstitutionuserdashboard
        }, */

        /* {
            path:'/ldash',
            beforeEnter: guards. isLegal,
            component:LegalDashboard
        }, */

       /*  {
            path:'/dsh',
            component:Das
        }, */

        /* {
            path:'/userdash',
            component:Userlistdashboard
        }, */

        {
            path:'/formsave',
            component:Newform
        },

       /*  {
            path:'/userinstit/:uuid',
            component:Institutioncrt
        }, */

       /*  {
            path:'/createmeet/:uuid',
            component:MeetingCreation
        }, */

       /*  {
            path:'/createreq/:uuid',
            component:RequestCreation
        }, */

        /* {
            path:'/edit/:id',
            component:Institutionedit
        }, */

        {
            path:'/medit/:id',
            component:Meetingedit
        },

        /* {
            path:'/dashrisafocal',
            component:RisafocalDash
        }, */

      /*   {
            path:'/dashmgr',
            component:Risacontractmgrdash
        }, */

       /*  {
            path:'/dashinst',
            component:Externalinstitutiondash
        }, */

        /* {
            path:'/dashlg',
            component:Legaldash
        }, */

       /*  {
            path:'/admindash',
            beforeEnter: guards.isAdmin,
            component:Risadmindash
        }, */

        {
            path:'/log',
            component:Loginn
        },

        /* {
            path:'/listext',
            component:listcategory
        },
 */
        /* {
            path:'/focallist',
            component:Risafocallist
        },
 */
        /* {
            path:'/mnlist',
            component:listcontrctmngr
        }, */

        /* {
            path:'/legallist',
            component:Legallist
        }, */

       /*  {
            path:'/uslist',
            component:Userslist
        }, */

        {
            path:'/usdash',
            component:listusersdash
        },

        {
            path:'/request',
            component:Requestdash
        }, 

        {
            path:'/addins',
            component:Addinstitution
        },

       /*  {
            path:'/listad',
            component:Adminlist
        }, */

        {
            path:'/edit/:id', 
            component:Editlistuser
        },

        {
            path:'/savemeeting/:id', 
            component:Meetingdash
        }, 

        {
            path:'/listmeeting', 
            component:ListMeetingdash
        },

        {
            path:'/addcat', 
            component:Addcategorydash
        },

        {
            path:'/listcategory', 
            component:Categorylist
        },

        {
            path:'/editcategory/:id', 
            component:Categoryedit
        },

        {
            path:'/adddoc', 
            component:Documentdash
        },

       
        
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
