<template>
  <div>
    <div class="text-h5">Customers</div>
    <div>
      <v-breadcrumbs :items="items" class="breadcrumb">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
              class="breadcrumb-item"
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {BreadCrumb} from '~/types/types';

defineProps<{
  items: {
    type: Array<BreadCrumb>,
    default: []
  }
}>()

</script>
<style lang="scss" scoped>
.breadcrumb {
  padding: 0 !important;

  .breadcrumb-item {
    ::v-deep a {
      color: #2196f3 !important;
    }
  }
}
</style>
