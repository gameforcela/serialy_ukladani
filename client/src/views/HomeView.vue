<script>
import SerialPreview from "@/components/SerialPreview.vue";

export default {
  components: {SerialPreview},
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
        },
        {
          id: 2,
          title: "Serial2",
          image: "https://picsum.photos/seed/picsum/500",
          series: ["serie1"],
          episodes: [
            {serie: 1, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 1, episoda: "2", name: "Pilot1", air_date: "2012-11-15" },
            {serie: 1, episoda: "3", name: "Pilot2", air_date: "2012-11-15" },
            {serie: 1, episoda: "4", name: "Pilot3", air_date: "2012-11-15" },
            {serie: 1, episoda: "5", name: "Pilot4", air_date: "2012-11-15" },
            {serie: 1, episoda: "6", name: "Pilot4", air_date: "2012-11-15" },
            {serie: 1, episoda: "3", name: "Pilot2", air_date: "2012-11-15" },
            {serie: 1, episoda: "4", name: "Pilot3", air_date: "2012-11-15" },
            {serie: 1, episoda: "5", name: "Pilot4", air_date: "2012-11-15" },
            {serie: 1, episoda: "6", name: "Pilot4", air_date: "2012-11-15" },
            {serie: 1, episoda: "3", name: "Pilot2", air_date: "2012-11-15" },
            {serie: 1, episoda: "4", name: "Pilot3", air_date: "2012-11-15" },
            {serie: 1, episoda: "5", name: "Pilot4", air_date: "2012-11-15" },
            {serie: 1, episoda: "6", name: "Pilot4", air_date: "2012-11-15" }
          ]
        },
        {
          id: 3,
          title: "Serial3",
          image: "https://www.svetzeny.cz/sites/default/files/public/styles/media_image/public/2021-08/shutterstock1989186296.jpg?h=676ecee0&itok=_Tr15hzZ",
          series: ["serie1", "serie2", "serie3", "serie4", "serie5", "serie6", "serie7", "serie8", "serie9", "serie10", "serie11",
            "serie12"],
          episodes: [
            {serie: 1, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 2, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 3, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 4, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 5, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 6, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 7, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 8, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 9, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 10, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 11, episoda: "1", name: "Pilot", air_date: "2012-11-15" },
            {serie: 12, episoda: "1", name: "Pilot", air_date: "2012-11-15" }
          ]
        },
      ]
    }
  }
}

</script>

<template >
  <main>
    <div class="text-light container-fluid" >
      <div class="row">
        <template v-for="serial in serials">
        <div class="col-6">
          <SerialPreview :id="serial.id" :title="serial.title" :image="serial.image" :series="serial.series" :episodes="serial.episodes"></SerialPreview>
        </div>
        </template>
      </div>
    </div>

  </main>
</template>
