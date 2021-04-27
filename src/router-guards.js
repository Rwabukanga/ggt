import { router } from './routes';
import { store } from './store';

export const guards = {

    isAuthenticated: (to, from, next) =>{
        if(store.state.auth != null){
            next();
        } else{
            next('/login')
        }
    },

    isAdmin :(to, from, next) => {
        if(store.state.auth != null  &&  store.state.auth.user.reg.category === "Admin"){
            next();
        }else{
            next("/login");
        }
       },
    isRisafocalpoint :(to, from, next) => {
        if(store.state.auth.user.reg.category === "Risafocalpoint"){
         next();
        }else{
            next("/login");
        }
    },

    isRisacontractManager :(to, from, next) => {
        if(store.state.auth.user.reg.category === "RisacontractManager"){
            next();
        }else{
            next("/login")
        }
    },

    isExternalinstitutionUser :(to, from, next) => {
        if(store.state.auth.user.reg.category === "ExternalinstitutionUser"){
            next();
        }else{
            next("/login");
        }
    },

    isLegal :(to, from, next) => {
        if(store.state.auth.user.reg.category === "Legal"){
            next();
        }else{
            next("/login");
        }
    },

    isRisafocalpointOrRisacontractManager: (to, from, next) =>{
        if(store.state.auth.user.reg.category === "Risafocalpoint" || store.state.auth.user.reg.category === "RisacontractManager"){
            next();
        }else{
            next("/login");
        }
    },

    isExternalinstitutionUserOrLegal: (to, from, next) =>{
        if(store.state.auth.user.reg.category === "ExternalinstitutionUser" || store.state.auth.user.reg.category === "Legal"){
            next();
        }else{
            next("/login");
        }
    },

    isRisafocalpointOrRisacontractManagerOrAdmin: (to, from, next) =>{
        if(store.state.auth.user.reg.category === "Risafocalpoint" || store.state.auth.user.reg.category === "RisacontractManager" || store.state.auth.user.reg.category === "Admin"){
            next();
        }else{
            next("/login");
        }
    },
}

