<template>
  <div class="Cat card border-0 col-4 p-2 bg-transparent text-light">
    <div class=" row justify-content-center">
      <div class="col-10 bg-primary rounded shadow-sm p-3" @click="getBigFact">
        {{ factProp.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { factService } from '../services/CatService'
import $ from 'jquery'
import { AppState } from '../AppState'
export default {
  name: 'Cat',
  props: ['factProp'],
  setup(props) {
    const state = reactive({
      fact: props.factProp

    })
    function getBigFact() {
      factService.getCatPicture()
      AppState.activeFact = state.fact
      $('#catModal').modal('toggle')
    }
    return { state, getBigFact }
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
