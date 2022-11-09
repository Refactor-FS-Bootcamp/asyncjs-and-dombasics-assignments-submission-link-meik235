document.getElementById("kgsInput").addEventListener("input", (event) => {
  let kgs = event.target.value;
  document.getElementById("lbsOutput").innerText = kgs * 2.205;
});

document.getElementById("feetInput").addEventListener("input", (event) => {
  let feet = event.target.value;
  document.getElementById("cmsOutput").innerText = feet * 30.48;
});
