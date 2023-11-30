const validateUsername = (username) => {
  if (!username || username.length <= 5) return false;
  const special = /[$#%^&*()_+!]/;
  const upper = /[A-Z]/;
  const number = /[0-9]/;
  return (
    !special.test(username) && upper.test(username) && number.test(username)
  );
};

const validateEmail = (email) => {
  if (!email || email.length <= 5) return false;
  const emailRegex = /@.*\.com$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  if (!password || password.length <= 8) return false;
  const special = /[$#%^&*()_+!]/;
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const number = /[0-9]/;
  return (
    special.test(password) &&
    upper.test(password) &&
    lower.test(password) &&
    number.test(password)
  );
};

export { validateEmail, validatePassword, validateUsername };


