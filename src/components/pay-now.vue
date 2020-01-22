<template>
  <div>
    <t-button variant="success" size="sm" @click="$refs.modal.show()">
      Pay now
    </t-button>
    <t-modal
      wrapper-class="w-full"
      overlay-class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-white-900 opacity-75"
      body-class="text-xl flex flex-col items-center justify-center p-6 flex-grow"
      show
      ref="modal"
    >
      <template v-slot:close>
        <t-button
          variant="tertiary"
          tertiary-class="border block text-black border-transparent"
          @click="$refs.modal.hide()"
        >
          Close
        </t-button>
      </template>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <t-input-group
          label="Fullname"
          feedback="Please enter your first and last name"
        >
          <t-input
            value=""
            placeholder="John Muller"
            type="text"
            size="sm"
            class="mb-4 w-full"
          />
        </t-input-group>
        <t-input-group
          label="Phone number"
          feedback="Phone number must be at least 6 characters long"
        >
          <t-input
            value=""
            placeholder="+255 682 424242"
            type="tel"
            size="sm"
            class="mb-4 w-full"
          />
        </t-input-group>
        <!-- <div class="mb-6">
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div> -->
        <div class="flex items-center justify-between">
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            @click="$refs.modal.hide()"
          >
            Go back
          </a>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="$refs.modal.hide()"
          >
            Pay now
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Waleti Pay. All rights reserved.
      </p>
    </t-modal>
  </div>
</template>
