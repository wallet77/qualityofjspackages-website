const axios = require('axios')
export default class ReportsService {
  static async fetch() {
    const res = await axios.get("data.json")
    return res.data
  }
}
