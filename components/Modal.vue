<template>
  <div class="modal" v-show="modelValue">
    <div class="modal-background" @click.self="closeModal()">
      <v-card class="modal-area" rounded="6px" :style="modalStyle">
        <h5 class="text-h5">{{ title }}</h5>
        <v-icon class="x-button" size="14px" @click.prevent="closeModal()">
          mdi-close
        </v-icon>
        <div class="modal-content">
          <slot name="modal-content"/>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isSuccess = ref(false);
const isLoading = ref(false);
const modelValue = ref(true);

defineProps<{
  modalStyle?: String,
  title?: Number
}>();

const emit = defineEmits(['closeModal']);

function closeModal():void {
  emit("closeModal");
}

</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100%;
}

.modal-background {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-area {
  width: 542px;
  min-height: 600px;
  margin: 5% auto;
  position: relative;
  border-radius: 6px !important;
  max-height: calc(100vh - 10%);
  overflow: scroll;

  .x-button {
    position: absolute;
    top: 30px;
    right: 30px;
  }
}
</style>
