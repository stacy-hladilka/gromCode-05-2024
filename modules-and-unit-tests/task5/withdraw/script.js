export const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  if (balances[indexOfClient] > amount) {
    return (balances[indexOfClient] -= amount);
  } else {
    return -1;
  }
};
