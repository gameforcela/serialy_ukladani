<script>
export default {
  name: "Serial",
  data() {
    return {
      usedSerie: [],
      newSeason: false,
      newEpisode: false,
      editSerial: false,
      serialPatch: {
        NameSerial: null,
        Image: null,
      },
      season:{
        NameSeason: null,
        Serial: null,
        NumberSeason: null
      },
      episode:{
        Season: null,
        NumberEpisode: null,
        NameEpisode: null
      },
      serial: []
    }
  },
  async created() {
    await this.resetData();
  },
  methods: {
    async patchSerial(serialToPatch){
      try{
        if(this.serialPatch.NameSerial == null){
          this.serialPatch.NameSerial = this.serial.NameSerial;
        }
        if(this.serialPatch.Image == null){
          this.serialPatch.Image = this.serial.Image;
        }
        console.log(this.serialPatch);
        const res = await fetch(`http://localhost:8000/serials/serial/${serialToPatch}`,
            {method: 'PATCH',
                body: JSON.stringify(this.serialPatch),
                headers:{
                'Content-type':'application/json'
                }
               });
        console.log(res);
        alert("Edited!")
      }catch (e){
        alert(e)
      }
      this.editSerial=false;
      await this.resetData();
    },
    async deleteEpisode(episodeToDelete){
      try{
        const res = await fetch(`http://localhost:8000/serials/episode/${episodeToDelete}`,{method: 'DELETE'});
        console.log(res);
        alert("Deleted!")
      }catch (e){
        alert(e)
      }
      await this.resetData();
    },
    async deleteSeason(seasonToDelete){
      try{
      const res = await fetch(`http://localhost:8000/serials/season/${seasonToDelete}`,{method: 'DELETE'});
      console.log(res);
      alert("Deleted!")
    }catch (e){
      alert(e)
    }
    await this.resetData();
    },
    async deleteSerial(serialToDelete){
      try{
        const res = await fetch(`http://localhost:8000/serials/serial/${serialToDelete}`,{method: 'DELETE'});
        console.log(res);
        alert("Deleted!")
      }catch (e){
        alert(e)
      }
      await this.$router.push('/');
    },
    async resetData(){
      const res = await fetch(`http://localhost:8000/serials/${this.$route.params.id}`,{method: 'GET'});
      this.serial = await res.json();
      console.log(this.serial);
    },
    async sendSeason() {
      try {
        this.season.Serial = this.serial.IdSerial;
        console.log(this.season);
        await fetch('http://localhost:8000/serials/season',
            {
              method: 'POST',
              body: JSON.stringify(this.season),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
      await this.resetData();
    },
    async sendEpisode() {
      try {
        this.episode.Season = this.usedSerie.IdSeason;
        console.log(this.episode);
        await fetch('http://localhost:8000/serials/episode',
            {
              method: 'POST',
              body: JSON.stringify(this.episode),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
      await this.resetData();
    }
  }


}
</script>

<template>

  <div class="card col-12 bg-dark">
    <div class="row">

      <div class="col-4 text-center">
        <img v-if="editSerial==false" :src="serial.Image" class="card-img rounded mx-auto d-block img-fluid col-5 float-start">
        <input v-if="editSerial==true" v-model="serialPatch.Image" type="text" class="form-control" :placeholder="serial.Image"/>
        <button v-if="editSerial==true" type="button" class="input-group-text btn btn-light text-dark" v-on:click="editSerial=false">Zrušit</button>

      </div>
      <div class="col-8">

        <div class="card-title text-light col-3">
          <h3 v-if="editSerial==false">{{serial.IdSerial}}. {{ serial.NameSerial }}</h3>
          <input v-if="editSerial==true" v-model="serialPatch.NameSerial" type="text" class="form-control" :placeholder="serial.NameSerial"/>
          <button v-if="editSerial==true" type="button" class="input-group-text btn btn-light text-dark" @click="patchSerial(serial.IdSerial)"> Odeslat</button>
          <button type="button" class="input-group-text btn btn-light text-dark " @click="deleteSerial(serial.IdSerial)"><i class="bi bi-trash"></i></button>
          <button v-if="editSerial==false" type="button" class="input-group-text btn btn-light text-dark " v-on:click="editSerial=true"><i class="bi bi-pencil"></i></button>
        </div>


        <div v-if="newSeason==true" class="row">
          <label class="form-label col-2 text-center text-light" >Nová serie: </label>
          <input type="text" v-model="season.NameSeason" class="col-3" placeholder="Název serie"/>
          <input type="number" v-model="season.NumberSeason" class="col-1" placeholder="Číslo serie"/>
          <button class="col-1 btn btn-dark" @click="sendSeason" v-on:click="newSeason=false"><i class="bi bi-check text-success btn-lg"></i></button>
          <button v-on:click="newSeason=false" class="col-1 btn btn-dark text-light"><i class="bi bi-x text-danger btn-lg"></i></button>
        </div>

        <div class="card-body">

          <div class="input-group">
            <div v-if="newSeason==false">
              <button type="button" class="input-group-text btn btn-light text-dark " v-on:click="newSeason=true"><i class="bi bi-plus-square"></i></button>
            </div>
            <select class="form-select" aria-label="Default select example" v-model="usedSerie">
              <option v-for="serie in serial.seasons" :value="serie"> {{ serie.NameSeason }} </option>
            </select>
            <!--<button type="button" class="input-group-text btn btn-light text-dark " v-on:click="newSeason=true"><i class="bi bi-pencil"></i></button> -->
            <button type="button" class="input-group-text btn btn-light text-dark " @click="deleteSeason(usedSerie.IdSeason)"><i class="bi bi-trash"></i></button>
          </div>

          <ul class="list-group overflow-scroll " style="height: 20rem;">
            <template v-for="serie in serial.seasons">
              <div v-for="episodeX in serie.episodes">
                <div v-if="episodeX.Season == usedSerie.IdSeason"  class="input-group">
                <li class="list-group-item col-11" > {{usedSerie.NumberSeason}}x{{ episodeX.NumberEpisode }} - {{ episodeX.NameEpisode }} </li>
                  <button type="button" class="input-group-text btn btn-light text-dark " @click="deleteEpisode(episodeX.IdEpisode)"><i class="bi bi-trash"></i></button>
                </div>
              </div>
            </template>
          </ul>
        </div>
        <div v-if="newEpisode==false">
          <button type="button" class="m-2 p-0 row float-start text-light btn btn-dark" v-on:click="newEpisode=true"><i class="bi bi-plus-square"></i>Přidat epizodu</button>
        </div>
        <div v-if="newEpisode==true" class="row">
          <label class="form-label col-2 text-center text-light" >Nová episoda: </label>
          <input type="text" v-model="episode.NameEpisode" class="col-3" placeholder="Název epizody"/>
          <input type="number" v-model="episode.NumberEpisode" class="col-1" placeholder="Číslo epizody"/>
          <button class="col-1 btn btn-dark" @click="sendEpisode" v-on:click="newEpisode=false"><i class="bi bi-check text-success btn-lg"></i></button>
          <button v-on:click="newEpisode=false" class="col-1 btn btn-dark text-light"><i class="bi bi-x text-danger btn-lg"></i></button>
        </div>


      </div>
      <RouterLink class="btn btn-dark text-light m-2" to="/">Zpět</RouterLink>
    </div>
  </div>

</template>

