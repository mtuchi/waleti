<template>
  <div>
    <t-button variant="success" size="sm" @click="$refs.modal.show()">Pay now</t-button>
    <t-modal ref="modal">hello world</t-modal>
  </div>
</template>
