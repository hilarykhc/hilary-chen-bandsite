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
      console.error("Failed to retrieve info: ", error);
    }
  }

  // post new comments ---------------------------------------///////
  async postComment() {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const newComment = response.data;
      console.log(newComment);

      function renderAllComments(allComments) {
        commentsContainer.innerHTML = "";

        allComments.forEach((comment) => {
          createCommentsCard(comment);
        });
      }
      // parents container
      const commentsFormEl = document.getElementById("form");
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = `${comment.name}`;
        const comment = `${comment.comment}`;
        const currentDate = new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });

        const newComment = {
          name: name,
          date: currentDate,
          text: comment,
          headshot: "grey circular object",
        };

        comments.unshift(newComment);
        renderAllComments(comments);

        commentsFormEl.reset();
      });

      console.log(postCommentRes);
    } catch (error) {
      console.error("Both name and comment must be included", error);
    }
  }
}

const apiKey = "ba1c9125-0dc0-4640-bd25-7cae703a705d";
const bandSiteApi = new BandSiteApi(apiKey);

async function displayComments() {
  try {
    await bandSiteApi.getComments();
  } catch (error) {
    console.error("Error", error);
  }
}

async function renderAllComments() {
  try {
    await bandSiteApi.postComment();
  } catch (error) {
    console.error("Error", error);
  }
}

displayComments();
postComment();

// adding comment
/*
async postComment () {
  try {
    const postCommentRes = await axios.post(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );
    const newComment = response.data;
    console.log(newComment);

    function renderAllComments(allComments) {
      commentsContainer.innerHTML = "";

      allComments.forEach((comment) => {
        createCommentsCard(comment);
      });
    }
    // parents container
    const commentsFormEl = document.getElementById("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = `${comment.name}`;
      const comment = `${comment.comment}`;
      const currentDate = new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });

      const newComment = {
        name: name,
        date: currentDate,
        text: comment,
        headshot: "grey circular object",
      };

      comments.unshift(newComment);
      renderAllComments(comments);

      commentsFormEl.reset();
    });

    console.log(postCommentRes);
  } catch (error) {
    console.error("Both name and comment must be included", error);
  }
};

postComment();
*/

/*
//add comments
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const postCommentRes = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );

      console.log("SUCCESSFUL", postCommentRes.data);

     
    } catch (error) {
      console.error("ERROR", error);
    }
  }


}

function renderAllComments(allComments) {
  commentsContainer.innerHTML = "";

  allComments.forEach((comment) => {
    createCommentsCard(comment);
  });
}

const bandSiteApi = new BandSiteApi("ba1c9125-0dc0-4640-bd25-7cae703a705d");

renderAllComments(comments);

const commentsFormEl = document.getElementById("form");
commentsFormEl.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const commentText = document.getElementById("comment").value;
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const newComment = {
    name: name,
    date: currentDate,
    text: commentText,
    headshot: "grey circular object",
  };

  await bandSiteApi.postComment(newComment);

  
  comments.unshift(newComment);
  renderAllComments(comments);

  commentsFormEl.reset();
});

*/
