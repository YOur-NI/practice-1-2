// Тип банковской транзакции (пока без interface, используем type)
export type Transaction = {
  id: string;
  amount: number;
  type: "deposit" | "withdrawal";
};

// Напишите функцию-предикат isTransaction
// Она должна проверить:
// 1. Что data - это объект и не null
// 2. Что у data есть поля id, amount, type
// 3. Что id - это строка, amount - число, type - одна из двух строк
export function isTransaction(data: unknown): data is Transaction {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "amount" in data &&
    "type" in data &&
    typeof (data as any).id === "string" &&
    typeof (data as any).amount === "number" &&
    ((data as any).type === "deposit" || (data as any).type === "withdrawal")
  );
}

// Функция обработки. 
// Если data это транзакция - вернуть "Обработана транзакция на сумму <amount>"
// Иначе вернуть "Неизвестные данные"
export function processTransaction(data: unknown): string {
  if (isTransaction(data)) {
    return `Обработана транзакция на сумму ${data.amount}`;
  }
  return "Неизвестные данные";
}