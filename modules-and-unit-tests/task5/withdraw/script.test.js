import { withdraw } from "./script";

it("should withdraw amount from specified balance", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(["Ann", "John", "User"], balances, "John", 50);
  expect(result).toEqual(37);
  expect(balances).toEqual([1400, 37, -6]);
});

it("should withdraw amount from specified balance", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(["Ann", "John", "User"], balances, "User", 10);
  expect(result).toEqual(-1);
  expect(balances).toEqual([1400, 87, -6]);
});

it("should withdraw amount from specified balance", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(["Ann", "John", "User"], balances, "Ann", 1000);
  expect(result).toEqual(400);
  expect(balances).toEqual([400, 87, -6]);
});
