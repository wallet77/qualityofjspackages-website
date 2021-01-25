import axios from "axios";

export default class ReportsService {
  static async fetch() {
    return axios
      .get(`${process.env.VUE_APP_PUBLIC_API_URL}/report`)
      .then(r => {
        if (r.data) {
          return r.data.data;
        }
        return null;
      })
      .catch(() => null);
  }
}
