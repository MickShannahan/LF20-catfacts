import { AppState } from '../AppState'
import { api } from './AxiosService'

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
}

export const factService = new FactService()
