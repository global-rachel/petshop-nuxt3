<template>
  <client-only>
    <v-app-bar
        app
        color="primary"
        flat
        :height="80"
        class="header"
        :z-index="999"
    >
      <v-container
          class="py-0 fill-height d-flex justify-space-between"
          color="primary"
      >
        <div class="d-flex align-center">
          <img
              src="../assets/img/logo.svg"
              alt=""
              style="width: 31px; height: 29px"
          />
          <img
              src=".././assets/img/logo-text.svg"
              alt=""
              style="margin-left: 13px; width: 74px; height: 20px"
          />
        </div>

        <div class="d-flex align-center">
          <v-btn v-for="link in links" :key="link.name" text color="white" link="link.url">
            {{ link.name.toUpperCase() }}
            <v-icon v-if="link.sublinks">mdi-menu-down</v-icon>
          </v-btn>
        </div>

        <div>
          <v-btn
              v-if="!isLogin"
              outlined
              color="white"
              @click="login()"
              height="48"
          >
            LOGIN
          </v-btn>
          <v-btn
              v-if="indexStore.isLogin"
              outlined
              color="white"
              @click="logout()"
              height="48"
          >
            LOGOUT
          </v-btn>
          <v-avatar
              v-if="indexStore.isLogin"
              size="48"
              outlined
              color="white"
              class="ml-4 avatar"
          >
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
          </v-avatar>
        </div>
      </v-container>
    </v-app-bar>
  </client-only>
</template>
<script lang="ts" setup>
import {useIndexStore} from '~/store';
import {computed} from 'vue';
import {useRouter} from '#app';
import {Link} from '~/types/types';

const router = useRouter();

const links: Array<Link> = [
  {name: 'products', url: '/', sublinks: [{}, {}, {}]},
  {name: 'promotions', url: '/'},
  {name: 'blog', url: '/'},
];

const indexStore = useIndexStore();

function openSideMenu(): void {
  indexStore.toggleSideMenu();
};

function login(): void {
  indexStore.setLoginModalOpen(true);
};

async function logout(): Promise<void> {
  await indexStore.logout();
  await router.push({path: '/'});
};

const isLogin = computed(() => {
  return indexStore.token && indexStore.token !== null;
});

</script>
<style lang="scss" scoped>
.avatar {
  border: 1px solid;
}

.header {
  z-index: 999 !important;
}
</style>
