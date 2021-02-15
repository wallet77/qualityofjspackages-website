export default class ReportsService {
  static async fetch() {
    const data = require('../../public/data.json')

    return data
  }
}
