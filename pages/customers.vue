<template>
  <div>
    <AdminTitle :items="breadcrumbItems" />
    <v-divider class="my-6"></v-divider>
    Customer Page
  </div>
</template>
<script lang="ts" setup>
// import {AdminTitle} from "#components"

definePageMeta({
  name: 'Customers',
  layout: "admin-layout",
});

const breadcrumbItems = [
  {
    text: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    text: "",
    disabled: false,
    href: "",
  },
];

</script>