// Используем тип Transaction из прошлого задания (или скопируйте его сюда)
export type Transaction = {
  id: string;
  amount: number;
  type: "deposit" | "withdrawal";
};

// 1. Напишите предикат isTransaction (можно скопировать из task2)
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

// 2. Напишите функцию parseTransactions
// Принимает массив unknown[]
// Возвращает объект { valid: Transaction[], errors: string[] }
// Логика: пройтись по массиву. Если isTransaction(item) - добавить в valid.
// Иначе - добавить строку "Invalid item: <item>" в errors.
export function parseTransactions(rawData: unknown[]): { valid: Transaction[]; errors: string[] } {
  const valid: Transaction[] = [];
  const errors: string[] = [];
  for (const item of rawData) {
    if (isTransaction(item)) {
      valid.push(item);
    } else {
      errors.push(`Invalid item: ${JSON.stringify(item)}`);
    }
  }
  return { valid, errors };
}

// 3. Напишите функцию calculateBalance
// Принимает массив валидных транзакций.
// deposit прибавляет amount, withdrawal вычитает.
export function calculateBalance(transactions: Transaction[]): number {
  let balance = 0;
  for (const transaction of transactions) {
    if (transaction.type === "deposit") {
      balance += transaction.amount;
    } else if (transaction.type === "withdrawal") {
      balance -= transaction.amount;
    }
  }
  return balance;
}