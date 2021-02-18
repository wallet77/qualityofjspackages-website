const axios = require('axios')
export default class ReportsService {
  static async fetch() {
    const res = await axios.get(`${process.env.BASE_URL}data.json`)
    return res.data
  }
}
