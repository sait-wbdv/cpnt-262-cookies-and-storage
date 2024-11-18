// Cookies
function saveCookie() {
  const data = document.getElementById('cookieData').value;
  document.cookie = `myCookie=${data}; max-age=300`;
  document.getElementById('cookieData').value = '';
}

function viewCookies() {
  const cookies = document.cookie;
  document.getElementById('cookieDisplay').innerText =
    cookies || 'No data stored.';
}

function clearCookies() {
  document.cookie = 'myCookie=; max-age=0';
  document.getElementById('cookieDisplay').innerText = 'No data stored.';
}

// Local Storage
function saveLocalStorage() {
  const data = document.getElementById('localData').value;
  localStorage.setItem('myLocalData', data);
  document.getElementById('localData').value = '';
}

function viewLocalStorage() {
  const data = localStorage.getItem('myLocalData');
  document.getElementById('localDisplay').innerText = data || 'No data stored.';
}

function clearLocalStorage() {
  localStorage.removeItem('myLocalData');
  document.getElementById('localDisplay').innerText = 'No data stored.';
}

// Session Storage
function saveSessionStorage() {
  const data = document.getElementById('sessionData').value;
  sessionStorage.setItem('mySessionData', data);
  document.getElementById('sessionData').value = '';
}

function viewSessionStorage() {
  const data = sessionStorage.getItem('mySessionData');
  document.getElementById('sessionDisplay').innerText =
    data || 'No data stored.';
}

function clearSessionStorage() {
  sessionStorage.removeItem('mySessionData');
  document.getElementById('sessionDisplay').innerText = 'No data stored.';
}

// .then().then()
// const form = document.getElementById('weatherForm');
// const weatherResult = document.getElementById('weatherResult');
// const API_KEY = '3d2b693dfdbc2488ca9b78203549692d';

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const city = document.getElementById('city').value;
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) throw new Error('City not found');
//       return response.json();
//     })
//     .then((data) => {
//       weatherResult.innerHTML = `
//         <h2>Weather in ${data.name}</h2>
//         <p>Temperature: ${data.main.temp}°C</p>
//         <p>Condition: ${data.weather[0].description}</p>
//       `;
//     })
//     .catch((error) => {
//       weatherResult.innerHTML = `<p>${error.message}</p>`;
//     });
// });

// async/await
const form = document.getElementById('weatherForm');
const weatherResult = document.getElementById('weatherResult');
const API_KEY = `__API_KEY__`;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    weatherResult.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p> ${error.message}</p>`;
  }
});
