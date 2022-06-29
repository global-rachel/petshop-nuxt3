<template>
  <v-app>
    <Header/>
    <v-main>
      <div class="main-wrapper">
        <slot/>
      </div>
    </v-main>
    <Login v-if="indexStore.isLoginModalOpen"/>
  </v-app>
</template>

<script lang="ts" setup>
import {Header, Login} from '#components';
import {useIndexStore} from '~/store';

const indexStore = useIndexStore();

function login(): void {
  indexStore.setLoginModalOpen(true);
}

</script>
<style lang="scss" scoped>
@import "../assets/common.scss";

.navigation-wrapper {
  padding-top: $headerHeight;

  ::v-deep .v-list {
    padding: 0;
  }
}

.main-wrapper {
  padding: 24px 40px;

  &--mobile {
    padding: 24px 40px 24px calc(40px + #{$sideNavWidth});
  }
}

.white--text {
  color: white;
}
</style>
