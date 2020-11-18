class ApiService{

    constructor() {
      this.baseUrl = `http://localhost:3000`;
    }
  
    async getAllClubs(){
      const resp = await fetch(this.baseUrl+"/clubs")
      const data = await resp.json()
      return data
    }