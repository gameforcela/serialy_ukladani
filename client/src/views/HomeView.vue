<script>
import SerialPreview from "@/components/SerialPreview.vue";

export default {
  components: {SerialPreview},
  data() {
    return {
      serials: []
    }
  },
  async created() {
    const res = await fetch('http://localhost:8000/serials', {method: 'GET'});
    console.log(res);
    this.serials = await res.json();
  }
}

</script>

<template >
  <main>
    <div class="text-light container-fluid" >
      <div class="row">
        <template v-for="serial in serials">

        <div class="col-6">
          <SerialPreview :id="serial.IdSerial" :title="serial.NameSerial" :image="serial.Image" :series="serial.seasons" :episodes="serial.seasons.episodes"></SerialPreview>
        </div>
        </template>
      </div>
    </div>

  </main>
</template>
