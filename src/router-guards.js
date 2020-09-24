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
       }
}

