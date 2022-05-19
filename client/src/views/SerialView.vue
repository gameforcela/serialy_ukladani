<script>
import Serial from "@/components/Serial.vue";

export default {
  components: {Serial},
  data() {
    return {
      serials: [
        {
          id: 1,
          title: "Serial1",
          image: "https://picsum.photos/seed/picsum/500",
          series: ["serie1", "serie2"],
          episodes: [
            {serie: 1, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 2, episoda: "1", name: "Pilot2", air_date: "2015-11-15" },
            {serie: 2, episoda: "2", name: "Pilotxxx", air_date: "2016-11-15" },
            {serie: 2, episoda: "2", name: "Pilotzyyyyzz", air_date: "2020-11-15" }
          ]
        }
      ]
    }
  }
}
</script>

<template>

  <div class="position-relative row-cols-7 p-3 mb-2container-fluid" v-for="serial in serials">
    <div class="row">
    <Serial :title="serial.title" :image="serial.image" :series="serial.series" :episodes="serial.episodes" ></Serial>
    <RouterLink class="btn bg-dark text-light m-2" to="/">Zpět</RouterLink>
    </div>
  </div>

</template>

