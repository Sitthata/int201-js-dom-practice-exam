const validateUsername = (username) => {
  if (!username || username.lenght <= 5) {
    return false;
  }
  const special = /[$@#%^&*()_+!]/;
  const upperLetters = /[A-Z]/;
  const number = /\d/;

  return (
    !special.test(username) &&
    upperLetters.test(username) &&
    number.test(username)
  );
};

const validateEmail = (email) => {
  if (!email) {
    return false;
  }
  const regex = /@.*\.com$/;

  return regex.test(email);
};

const validatePassword = (password) => {
  if (!password && password.length < 5) {
    return false;
  }

  const special = /[$@#%^&*()_+!]/;
  const upperLetters = /[A-Z]/;
  const lowerLetters = /[a-z]/;
  const number = /\d/;

  return (
    special.test(password) &&
    upperLetters.test(password) &&
    lowerLetters.test(password) &&
    number.test(password)
  );
};

export { validateEmail, validatePassword, validateUsername };
