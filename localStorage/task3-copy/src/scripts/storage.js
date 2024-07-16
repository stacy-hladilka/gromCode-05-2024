export const getList = () => {
  return JSON.parse(localStorage.getItem("tasksList")) ?? [];
};

export const setList = (list) => {
  localStorage.setItem("tasksList", JSON.stringify(list));
};
