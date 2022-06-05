<script>
export default {
  name: "SerialPreview",
  data() {
    return {
      usedSerie: [],
      newSeason: false
    }
  },
  props: {
    id: Number,
    title: String,
    image: String,
    series: [Object]
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
              <h3>{{id}}. {{title }}</h3>
            </div>

            <div class="card-body">

              <select class="form-select" aria-label="Default select example" v-model="usedSerie">

                  <option v-for="(serie,key) in series" :key="key" :value="serie"> {{ serie.NameSeason }} </option>

              </select>


              <ul class="list-group overflow-scroll " style="height: 20rem;">
              <template v-for="serie in series">
                <div v-for="episodeX in serie.episodes">
                  <li v-if="episodeX.Season == usedSerie.IdSeason" class="list-group-item "> {{ usedSerie.NumberSeason }}x{{ episodeX.NumberEpisode }} - {{ episodeX.NameEpisode }} </li>

                </div>
              </template>
              </ul>

            </div>

          </div>

          <RouterLink class="btn bg-light text-dark" :to="`/serial/${id}`">Detail serialu/Upravit serial</RouterLink>
        </div>
      </div>

</template>


