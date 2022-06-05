<script>
export default {
  name: "NavMenu",
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

<template>

  <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasTop"><em class="bi bi-list fs-1"/></button>

  <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasStartLabel" class="text-light">Seznam serialu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body offset-1">
      <div v-for="serial in serials" >
          <RouterLink class="btn bg-dark text-light m-2" :to="`/serial/${serial.IdSerial}`">{{serial.NameSerial}}</RouterLink>
      </div>
      <div class="row"><i class="bi bi-plus-square"></i> <RouterLink class="btn btn-light " to="/new-serial">Nový serial</RouterLink></div>
    </div>
  </div>


</template>

