import {defineStore} from 'pinia'
import {LoginRes} from '~/types/types';

export const useIndexStore = defineStore({
    id: 'index-store',
    state: () => {
        return {
            token: null,
            isLoginModalOpen: false,
            isSideMenuOpen: false,
            editedUser: []
        }
    },
    actions: {
        async login({email, password}): Promise<LoginRes> {
            const res: LoginRes = await $fetch('/api/v1/admin/login', {
                method: "POST",
                body: {
                    email,
                    password
                },
            });
            this.token = res.data.token;
            return res
        },
        async logout(): Promise<{}> {
            const res = await $fetch('/api/v1/admin/logout', {
                method: "GET",
            });

            this.token = null;

            return res
        },
        setLoginModalOpen(val): void {
            this.isLoginModalOpen = val;
        },
        toggleSideMenu(): void {
            this.isSideMenuOpen = !this.isSideMenuOpen
        },
    },
    getters: {
        isLogin(state): boolean {
            return state.token && state.token !== null;
        }
    },
})