const button = document.getElementById("btn");
const result = document.getElementById("age");
const input = document.getElementById("date");

// console.log(button)
const calculateAge = () => {
  let ageInput = input.value;
  // console.log(ageInput)
  if (ageInput === "") {
    alert("Please Enter Your age");
  } else {
    const age = getDate(ageInput);
    result.innerText = `${age} ${age > 1 ? "years" : "year"}`;
  }
};

const getDate = (age) => {
  const currentAge = new Date();
  //  console.log(currentAge);
  const birthAge = new Date(age);
  // console.log(birthAge);

  const ageYear = currentAge.getFullYear() - birthAge.getFullYear();
  const ageMonth = currentAge.getMonth() - birthAge.getMonth();
  // console.log(ageYear);
  if (ageMonth <= 0 && currentAge.getDate() < birthAge.getDate()) {
    ageYear--;
  }
  return ageYear;
};

button.addEventListener("click", calculateAge);
