class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const displayComments = response.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      // parents container
      const commentsContainer = document.querySelector(
        ".display-comments__container"
      );

      // commentsContainer.innerHTML = ""; ---------> need this?------------- for the postComment section---//

      displayComments.forEach((comment) => {
        const sectionEl = document.createElement("section");
        sectionEl.classList.add("display-comments");
        commentsContainer.appendChild(sectionEl);

        const listEl = document.createElement("ul");
        listEl.classList.add("display-comments__list");
        listEl.setAttribute("id", "comments-list");
        sectionEl.appendChild(listEl);

        const cardEl = document.createElement("div");
        cardEl.classList.add("display-comments__card");
        cardEl.setAttribute("id", "comments-list-1");
        listEl.appendChild(cardEl);

        const imgEl = document.createElement("div");
        imgEl.classList.add("comments__img--none");
        cardEl.appendChild(imgEl);

        const contentEl = document.createElement("div");
        contentEl.classList.add("display-comments__content");
        cardEl.appendChild(contentEl);

        const nameDateEl = document.createElement("div");
        nameDateEl.classList.add("display-comments__name-date");
        contentEl.appendChild(nameDateEl);

        const nameEl = document.createElement("p");
        nameEl.classList.add("display-comments__name");
        nameEl.textContent = `${comment.name}`;
        nameDateEl.appendChild(nameEl);

        const dateEl = document.createElement("p");
        dateEl.classList.add("display-comments__date");
        dateEl.textContent = `${new Date().toLocaleDateString({
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })}`;
        nameDateEl.appendChild(dateEl);

        // add <div>
        // add    <p class="display-comments__text"></p>
        const divEl = document.createElement("div");
        contentEl.appendChild(divEl);

        const textEl = document.createElement("p");
        textEl.classList.add("display-comments__text");
        textEl.textContent = `${comment.comment}`;
        divEl.appendChild(textEl);
      });

      console.log(displayComments);
    } catch (error) {
      console.error("Failed to display comment", error);
    }
  }
}

const apiKey = "6748bc1f-abe2-40ad-8213-f950811ead8f";
const bandSiteApi = new BandSiteApi(apiKey);

async function displayComments() {
  try {
    await bandSiteApi.getComments();
  } catch (error) {
    console.error("Error", error);
  }
}

displayComments();

//POST request
