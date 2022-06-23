import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
    id: 'index-store',
    state: () => {
        return {
            token:  null,
            isLoginModalOpen: false,
            isSideMenuOpen: false,
            editedUser: []
        }
    },
    actions: {
        async login({email, password}){
            const res = await $fetch('/api/v1/admin/login',{
                            method: "POST",
                            headers: {
                                'Access-Control-Allow-Credentials': true,
                            },
                            body: {
                                email,
                                password
                            },
                        });
            this.token = res.data.token;
            return res
        },
        async logout(){
            const res = await $fetch('/api/v1/admin/logout',{
                method: "GET",
                headers: {
                    'Access-Control-Allow-Credentials': true,
                }
            });

            this.token = null;

            return res
        },
        setLoginModalOpen(val){
            this.isLoginModalOpen = val;
        },
        toggleSideMenu: ()=>{
            this.isSideMenuOpen = !this.isSideMenuOpen

        },
    },
    getters: {
        isLogin(state){
            return state.token && state.token !== null;
        }
    },
})