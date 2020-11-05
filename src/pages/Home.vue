<template>
  <div class="home container-fluid">
    <div class="row bg-light p-3">
      <h2 class="pl-3">
        Catuurrday
      </h2>
    </div>
    <div class="row p-5">
      <CatComponent v-for="fact in facts" :key="fact" :fact-prop="fact" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { factService } from '../services/CatService'
import CatComponent from '../components/CatComponent'
export default {
  name: 'Home',
  components: { CatComponent },
  setup() {
    onMounted(() =>
      factService.getFacts())
    return {
      facts: computed(() => AppState.facts)
    }
  }
}
</script>
