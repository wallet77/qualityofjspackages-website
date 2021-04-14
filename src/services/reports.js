const axios = require('axios')
export default class ReportsService {
  static async fetch(report) {
    const res = await axios.get(`${process.env.BASE_URL}data/${report}.json`)
    return res.data
  }
}
