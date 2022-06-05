<template>

  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Nový seriál</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Název</label>
            <input v-model="serial.NameSerial" type="text" class="form-control" placeholder="Title"/>

            <label class="form-label">Image</label>
            <input v-model="serial.Image" type="text" class="form-control" placeholder="Image odkaz"/>
          </div>
        </div>
      </div>
    </div>

    <div class="card-footer row-cols-12">
    <button type="button" @click="send" class="btn btn-success col-1 p-2 m-2">Odeslat</button>
      <RouterLink class="btn btn-success col-1 p-2 m-2 float-end" to="/">Zpět <em class="bi bi-arrow-90deg-left"/></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSerial",
  data() {
    return {
      serial: {
        NameSerial: null,
        Image: null
      }
    }
  },
  methods: {
    async send() {
      try {
        console.log(this.serial);
        await fetch('http://localhost:8000/serials/serial',
            {
              method: 'POST',
              body: JSON.stringify(this.serial),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>


