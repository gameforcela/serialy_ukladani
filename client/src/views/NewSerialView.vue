<template>
  <div class="row">
    <div class="col-8 offset-2">
      <NewSerial></NewSerial>
    </div>
  </div>
</template>

<script>
import NewSerial from '@/components/NewSerial.vue';

export default {
  name: "NewSerialView",
  components: {NewSerial}
}
</script>
