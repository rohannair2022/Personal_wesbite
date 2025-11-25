function getAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear();
}

window.onload = function () {
  const dob = new Date("2004-07-20");
  const age = getAge(dob);

  document.getElementById("ageText").innerHTML =
    `${age} | ` + document.getElementById("ageText").innerHTML;
};
