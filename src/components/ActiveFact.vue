<template>
  <div class="ActiveFact">
    <!-- Modal -->
    <div class="modal fade bg-dark"
         id="catModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-xl dialog-center" role="document">
        <div class="modal-content bg-transparent border-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true text-light"><i class="fas fa-cross    "></i></span>
          </button>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row justify-content-center">
                <img :src="picture" class="img-fluid">
                <h4 class="text-light p-2">
                  {{ fact.text }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'ActiveFact',
  setup() {
    const state = reactive({

    })
    return { state, fact: computed(() => AppState.activeFact), picture: computed(() => AppState.catPicture) }
  }
}
</script>

<style scoped>
.row{
  max-height: 60vh;
}

</style>
