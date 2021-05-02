export const symbols: { [key: string]: string } = {
  USD: "$",
  RUB: "₽",
  KZT: "₸",
  PLN: "zł",
  EUR: "€",
  CZK: "Kč",
};
export const getSymbol = (currency: string = ""): string =>
  !!currency.match(/usdt/i) ? "USDT" : symbols[currency] || currency;