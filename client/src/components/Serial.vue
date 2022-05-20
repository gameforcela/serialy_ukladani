<script>
export  default {
  name: "Serial",
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
    series: [Object],
    episodes: [Object],
  }
}
</script>

<template>
  <p class="text-light">ahoj 2</p>
  <div class="card col-12 bg-dark">
    <div class="row">

      <div class="col-4">
        <img :src="image" class="card-img rounded mx-auto d-block img-fluid col-5 float-start">
      </div>
      <div class="col-8">

        <div class="card-title text-light">
          <h3>{{ title }}</h3>
        </div>


        <div v-if="newSeason==true" class="row">
          <label class="form-label col-2 text-light" >Nová serie: </label>
          <input type="text" class="col-4" placeholder="Title"/>
          <button class="col-1 btn btn-dark"><i class="bi bi-check text-success btn-lg"></i></button>
          <button v-on:click="newSeason=false" class="col-1 btn btn-dark text-light"><i class="bi bi-x text-danger btn-lg"></i></button>
        </div>

        <div class="card-body">

          <div class="input-group">
            <div v-if="newSeason==false">
              <button type="button" class="input-group-text btn btn-light text-dark " v-on:click="newSeason=true"><i class="bi bi-plus-square"></i></button>
            </div>
          <select class="form-select" aria-label="Default select example" v-model="usedSerie">
            <option v-for="(serie,key) in series" :key="key" :value="key+1"> {{ serie }} </option>
          </select>
            <button type="button" class="input-group-text btn btn-light text-dark " v-on:click="newSeason=true"><i class="bi bi-pencil"></i></button>
            <button type="button" class="input-group-text btn btn-light text-dark " v-on:click="newSeason=true"><i class="bi bi-trash"></i></button>
          </div>

          <template v-for="episodeX in episodes" >
            <p v-if="episodeX.serie == usedSerie" class="text-light m-2"> {{ episodeX.serie }}x{{ episodeX.episoda }} - {{ episodeX.name }} </p>
            <button v-if="episodeX.serie == usedSerie" type="button"  v-on:click="newSeason=true"><i class="bi bi-pencil "></i></button>
            <button v-if="episodeX.serie == usedSerie" type="button"  v-on:click="newSeason=true"><i class="bi bi-trash"></i></button>
          </template>
        </div>
        <button type="button" class="m-2 p-0 row float-start text-light btn btn-dark "><i class="bi bi-plus-square"></i>Přidat epizodu</button>
      </div>

      <RouterLink class="btn bg-light text-dark m-2" to="/serial">Detail serialu/Upravit serial</RouterLink>

    </div>
  </div>
</template>

