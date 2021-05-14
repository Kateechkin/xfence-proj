<template>
  <transition name="modal" @click="$emit('close')">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <p>Ваша заявка принята, наш менеджер свяжется с вами!</p>
            </slot>
          </div>

          <div class="modal-body">
            <input
              type="button"
              value="ок"
              class="button-5"
              @click="$emit('close')"
            />
          </div>
          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal-ok",
  props: {
    modal_ok: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>