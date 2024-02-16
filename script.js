//https://random-data-api.com/api/v2/users

const userContainer = document.getElementById('user');
const clearHistoryButton = document.getElementById('clear');

async function fetchUsers() {
  const response = await fetch(
    'https://random-data-api.com/api/v2/users?size=10'
  );
  const users = await response.json();
  console.log(users);

  users.forEach((user) => {
    const userDetailsElement = document.createElement('div');
    userDetailsElement.classList.add('user-details');
    userDetailsElement.innerHTML = `
        <img src="${user.avatar}" alt="Avatar">
        <p><strong>First name:</strong> ${user.first_name}</p>
        <p><strong>Last name:</strong> ${user.last_name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Employment title:</strong> ${user.employment.title}</p>`;

    userContainer.appendChild(userDetailsElement);
  });
}

clearHistoryButton.addEventListener('click', () => {
  userContainer.innerHTML = '';
});
fetchUsers();
