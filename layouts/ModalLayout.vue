<template>
  <div class="container">
    <modal
      name="request-form-modal"
      click-to-close
      class="modal"
      :styles="{
        boxShadow: 'none',
        backgroundColor: 'transparent',
        padding: '0 10px',
      }"
      width="100%"
      height="auto"
    >
      <RequestDemoForm />
    </modal>

    <NavBar />
    <Nuxt />
    <FooterMain />
  </div>
</template>

<script>
import FooterMain from '../components/FooterMain.vue'
import RequestDemoForm from '../components/indexPage/RequestDemoForm.vue'
export default {
  name: 'ModalLayout',
  components: { FooterMain, RequestDemoForm },
}
</script>

<style lang="scss" scoped>
.container {
  @include font-family();
  @include padding-var();

  overflow-x: hidden;
}

.modal {
  z-index: 99999;
}
</style>
