const loadingText = document.getElementById("loading");
const usersContainer = document.querySelector(".user-cards-container");
const getUsersButton = document.getElementById("get-users-button");
const deleteUsersButton = document.getElementById("delete-users-button");
const template = document.getElementById("users-cards-template");

const usersKey = "users";
const storageUsers = localStorage.getItem(usersKey);

function renderUsers(users) {
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userClone = template.content.cloneNode(true);
    const card = userClone.querySelector(".user-card");
    card.dataset.id = user.id;

    userClone.querySelector(".user-number").textContent = `Пользователь номер: ${user.id}`;
    userClone.querySelector(".user-name").textContent = `Имя: ${user.name}`;
    userClone.querySelector(".user-surname").textContent = `Фамилия: ${user.surname}`;
    userClone.querySelector(".user-age").textContent = `Возраст: ${user.age}`;
    userClone.querySelector(".user-email").textContent = `Почта: ${user.email}`;
    usersContainer.append(userClone);
  });
}

function showLoading() {
  loadingText.style.display = "flex";
}

function hideLoading() {
  loadingText.style.display = "none";
}

function showError() {
  loadingText.textContent = "Ошибка при загрузке данных";
}

async function loadUsers() {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("./users.json");
    if (!response.ok) {
      throw new Error("Ошибка загрузки");
    }

    const data = await response.json();
    localStorage.setItem(usersKey, JSON.stringify(data.users));
    hideLoading();
    renderUsers(data.users);
  } catch (error) {
    loadingText.textContent = "Ошибка при загрузке данных";
  }
}

function init() {
  const usersFromStorage = localStorage.getItem(usersKey);
  if (!usersFromStorage) {
    loadUsers();
  } else {
    renderUsers(JSON.parse(usersFromStorage));
    hideLoading()
  }
}

init();

function deleteUser(id) {
  const users = JSON.parse(localStorage.getItem(usersKey));
  const updatedUsers = users.filter(user => user.id !== id);

  localStorage.setItem(usersKey, JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

usersContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete-user")) {
    return
  }
  const card = event.target.closest(".user-card");
  const userId = Number(card.dataset.id);

  deleteUser(userId);
});

getUsersButton.addEventListener("click", () => {
  const usersFromStorage = JSON.parse(localStorage.getItem(usersKey) || "[]");

  if (usersFromStorage.length > 0) {
    alert('Все пользователи отрисованы!')
  } else {
    showLoading();
    loadUsers();
  }
});

deleteUsersButton.addEventListener("click", () => {
  localStorage.removeItem(usersKey);
  usersContainer.innerHTML = "";
});