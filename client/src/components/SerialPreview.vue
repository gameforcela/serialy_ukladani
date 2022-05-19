<script>
export default {
  name: "SerialPreview",
  data() {
    return {
      usedSerie: 1,
      newSeason: false
    }
  },
  props: {
    id: Number,
    title: String,
    image: String,
    series: [String],
    episodes: [Object],
  },
}
</script>

<template>

      <div class="card bg-dark">
        <div class="row">
          <div class="col-4">
            <img :src="image" class="card-img rounded mx-auto d-block img-fluid col-5 float-start">
          </div>
          <div class="col-8">
            <div class="card-title">
              <h3>{{ title }}</h3>
            </div>

            <div class="card-body">
              <select class="form-select" aria-label="Default select example" v-model="usedSerie">

                  <option v-for="(serie,key) in series" :key="key" :value="key+1"> {{ serie }} </option>

              </select>

              <ul class="list-group overflow-scroll " style="height: 20rem;">
              <template v-for="episodeX in episodes">
                  <li v-if="episodeX.serie == usedSerie" class="list-group-item "> {{ episodeX.serie }}x{{ episodeX.episoda }} - {{ episodeX.name }} </li>
              </template>
              </ul>
            </div>
          </div>

          <RouterLink class="btn bg-light text-dark" to="/serial">Detail serialu/Upravit serial</RouterLink>
        </div>
      </div>

</template>


