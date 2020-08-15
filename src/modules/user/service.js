export const getAllUsers = async () => {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  return data;
};
