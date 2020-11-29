class ApiService{

    constructor() {
      this.baseUrl = `http://localhost:3000`;
      this.options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    }
      
  
    async getAllClubs(){
      const resp = await fetch(this.baseUrl+"/clubs")
      const data = await resp.json()
      return data
    }

    async postVenue(data) {
      const resp = await fetch(this.baseUrl+"/clubs", 
      {...this.options, body: JSON.stringify(data)})
      const response = await resp.json()
       return response
    }

    async postReview(data) {
      const resp = await fetch(this.baseUrl+"/reviews", 
      {...this.options, body: JSON.stringify(data)})
      const response = await resp.json()
      return response
    }

    async editReview(data) {
      const resp = await fetch(this.baseUrl+"/reviews/"+data.id, 
      {...this.options, method: 'PATCH', body: JSON.stringify(data)})
      const response = await resp.json()
      return response
    }
    
    async deleteClub(id) {
      const resp = await fetch(this.baseUrl+"/clubs/"+id, 
      {...this.options, method: 'DELETE'})
      const response = await resp.json()
      return response
    }
}