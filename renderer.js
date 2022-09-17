const info = document.getElementById('info');

const functiony = async () => {
  const response = await window.versions.ping();
  info.innerText = "PING! YOU GOT " + response + "'D!!!!";
}

functiony();
