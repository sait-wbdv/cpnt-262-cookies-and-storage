// Cookies
function saveCookie() {
  const data = document.getElementById("cookieData").value;
  document.cookie = `myCookie=${data}; max-age=300`;
  document.getElementById("cookieData").value = '';
}

function viewCookies() {
  const cookies = document.cookie;
  document.getElementById("cookieDisplay").innerText = cookies || "No data stored.";
}

function clearCookies() {
  document.cookie = "myCookie=; max-age=0";
  document.getElementById("cookieDisplay").innerText = "No data stored.";
}

// Local Storage
function saveLocalStorage() {
  const data = document.getElementById("localData").value;
  localStorage.setItem("myLocalData", data);
  document.getElementById("localData").value = '';
}

function viewLocalStorage() {
  const data = localStorage.getItem("myLocalData");
  document.getElementById("localDisplay").innerText = data || "No data stored.";
}

function clearLocalStorage() {
  localStorage.removeItem("myLocalData");
  document.getElementById("localDisplay").innerText = "No data stored.";
}

// Session Storage
function saveSessionStorage() {
  const data = document.getElementById("sessionData").value;
  sessionStorage.setItem("mySessionData", data);
  document.getElementById("sessionData").value = '';
}

function viewSessionStorage() {
  const data = sessionStorage.getItem("mySessionData");
  document.getElementById("sessionDisplay").innerText = data || "No data stored.";
}

function clearSessionStorage() {
  sessionStorage.removeItem("mySessionData");
  document.getElementById("sessionDisplay").innerText = "No data stored.";
}
