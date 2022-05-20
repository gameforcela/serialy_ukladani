<script>
import Serial from "@/components/Serial.vue";

export default {
  components: {Serial},
  data() {
    return {
      serial: []
    }
  },
  async created() {
    const res = await fetch(`http://localhost:8000/serials/${this.$route.params.id}`,{method: 'GET'});
    this.serial = await res.json();
    console.log(this.serial);
  }

}
</script>

<template>
  <p class="text-light">ahoj</p>

    <div class="row">
    <Serial :title="serial.NameSerial" :image="serial.Image" :series="serial.seasons" :episodes="serial.episodes" ></Serial>
    <RouterLink class="btn bg-dark text-light m-2" to="/">Zpět</RouterLink>
    </div>


</template>

