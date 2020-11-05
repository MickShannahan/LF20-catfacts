<template>
  <div class="Cat card border-0 col-4 p-2 bg-transparent text-light">
    <div class=" row justify-content-center">
      <div class="col-10 bg-primary rounded shadow-sm p-3">
        a cat fact
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Cat',
  props: [],
  setup(props) {
    const state = reactive({

    })

    return { state }
  }
}
</script>

<style scoped>
.Cat{
  transition: all .3s ease;
}
.Cat:hover{
  transform: scale(1.1,1.1);
}
</style>
