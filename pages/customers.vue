<template>
  <div>
    <AdminTitle :items="breadcrumbItems"/>
    <v-divider class="my-6"></v-divider>
    Customer Page
  </div>
</template>
<script lang="ts" setup>
import {AdminTitle} from '#components'
import {BreadCrumb} from '~/types/types';

definePageMeta({
  name: 'Customers',
  layout: "admin-layout",
});

const breadcrumbItems: Array<BreadCrumb> = [
  {
    text: 'Dashboard',
    disabled: false,
    href: '',
  },
  {
    text: '',
    disabled: false,
    href: '',
  },
];
</script>