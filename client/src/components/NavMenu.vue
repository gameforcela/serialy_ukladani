<script>
export default {
  name: "NavMenu",
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
            {serie: 1, episoda: "6", name: "Pilot4", air_date: "2012-11-15" }
          ]
        },
        {
          id: 3,
          title: "Serial3",
          image: "https://picsum.photos/seed/picsum/500",
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

<template>

  <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasTop"><em class="bi bi-list fs-1"/></button>

  <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasStartLabel" class="text-light">Seznam serialu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body offset-1">
      <div v-for="serial in serials" >
          <RouterLink class="btn bg-dark text-light m-2" to="/serial">{{serial.title}}</RouterLink>
      </div>
      <div class="row"><i class="bi bi-plus-square"></i> <RouterLink class="btn btn-light " to="/new-serial">Nový serial</RouterLink></div>
    </div>
  </div>


</template>

