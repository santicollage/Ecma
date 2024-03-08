function newUser(name, age, country){
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'Colombia';
  console.log(name, age, country);
}

newUser();
newUser('David', 15, 'Mexico');

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('David', 15, 'Mexico');