export default class Currency {  
  static async convert(from, to, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}/${amount}`);
      if (!response.ok && response.status != 404 && response.status != 403) {
        throw Error(response.status);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}