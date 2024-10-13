const friends = [
  {
    name: "Сережа",
    comment: "Поболтаем?",
  },
  {
    name: "Петр",
    comment: "Давайте?",
  },
  {
    name: "Ольга",
    comment: "Ребята, как сходили в кино?",
  },
];

const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const commentInput = document.getElementById("comment-input");
const addCommentButton = document.getElementById("add-comment-button");

function renderFriends() {
  let friendsHtml = "";

  friends.forEach((friend) => {
    friendsHtml += `<li class="friend">
        <p>${friend.name}</p>
        <div class="comments">
          <p class="comment">${friend.comment}</p>
        </div>
      </li>`;
  });

  listElement.innerHTML = friendsHtml;
}

renderFriends();

addCommentButton.addEventListener("click", () => {
  const name = nameInputElement.value.trim();
  const comment = commentInput.value.trim();

  if (name && comment) {
    friends.push({
      name: name,
      comment: comment,
    });

    renderFriends();

    nameInputElement.value = "";
    commentInput.value = "";
  } else {
    alert("Пожалуйста, введите имя и комментарий");
  }
});
