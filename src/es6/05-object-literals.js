//enached object literals

function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  }
}

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  }
}

console.log(newUser("santi", 34, "CL", 1));