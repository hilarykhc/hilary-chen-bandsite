class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey; //"ba1c9125-0dc0-4640-bd25-7cae703a705d"
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  postComment(comment) {
    const url = `${this.baseUrl}/comments?api_key=${this.apiKey}`;
  }
}

//getComments()
