import { AppState } from '../AppState'
import { api, pictureApi } from './AxiosService'

class FactService {
  async getFacts() {
    try {
      const res = await api.get('/facts')
      AppState.facts = res.data.all
      console.log(res.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  async getCatPicture() {
    try {
      const res = await pictureApi.get('search')
      console.log(res.data[0].url)
      AppState.catPicture = res.data[0].url
    } catch (error) {
      console.error(error)
    }
  }
}

export const factService = new FactService()
