<template>
  <Modal :modalStyle="'padding: 50px 73px;'" @closeModal="closeModal()">
    <template v-slot:modal-content>
      <div class="w-100 d-flex flex-column align-center">
        <Logo/>
        <h5 class="text-h5 mt-6">Log in</h5>
      </div>
      <v-form class="mt-6">
        <v-text-field
            v-model="form.email"
            ref="email"
            outlined
            label="Email address*"
            type="email"
            rows="1"
            row-height="15"
        ></v-text-field>
        <v-text-field
            v-model="form.password"
            ref="password"
            filled
            auto-grow
            outlined
            label="Password*"
            type="password"
            rows="1"
            row-height="15"
        ></v-text-field>
        <v-checkbox label="Remember me" color="primary"/>
        <v-btn
            class="mt-9 text-white"
            color="primary"
            block
            @click="login()"
            :loading="isLoading"
        >
          LOG IN
        </v-btn>
      </v-form>
      <div class="w-100 d-flex justify-space-between mt-8">
        <a href="#" class="text-info">Forgot password? </a>
        <a href="#" class="text-info">Don’t have an account? Sign Up</a>
      </div>
      <v-snackbar v-model="snackbar" top color="red accent-2" :timeout="5000">
        {{ capitalizeString(msg) }}
        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import {Modal, Logo} from '#components';
import {ref, reactive} from 'vue';
import {useIndexStore} from '~/store';
import {useRouter} from "#app";
import commonFunction from 'assets/scripts/common';
import {LoginForm} from '~/types/types';

const {capitalizeString} = commonFunction();
const indexStore = useIndexStore();
const router = useRouter();
const isLoading = ref(false);

//Login form
const form: LoginForm = reactive({
  email: null,
  password: null,
});
const msg = ref("");
const snackbar = ref(false);

async function login(): Promise<void> {
  if (!(form.email || "").match(/.+@.+/) || !form.password) {
    return;
  }

  try {
    await indexStore.login({
      email: this.form.email,
      password: this.form.password,
    });

    this.closeModal();
    await router.push({path: "/customers"});

  } catch (error) {
    this.snackbar = true;

    //TODO: show error message
    // if (error instanceof ValidationError) {
    //   console.log(error.response);
    //   this.msg = error.response?.data?.error;
    // }
  }
};

function closeModal(): void {
  indexStore.setLoginModalOpen(false);
};

</script>

<style lang="scss" scoped>
a {
  font-size: 14px;
}
</style>
