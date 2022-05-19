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
            <input type="text" class="form-control" placeholder="Title"/>
          </div>
        </div>
      </div>
    </div>

    <div class="card-footer row-cols-12">
    <button type="button"  class="btn btn-success col-1 p-2 m-2">Načíst IMDB</button>
    <button type="button"  class="btn btn-success col-1 p-2 m-2">Odeslat</button>
      <RouterLink class="btn btn-success col-1 p-2 m-2 float-end" to="/"><em class="bi bi-arrow-90deg-left"/></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSerial"
}
</script>

