// 1. Сужение через typeof
// Если value строка - вернуть "Строка: <value>", если число - "Число: <value>", 
// если boolean - "Логическое: <value>"
export function describeValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `Строка: ${value}`;
  }
  if (typeof value === "number") {
    return `Число: ${value}`;
  }
  return `Логическое: ${value}`;
}

// 2. Сужение через instanceof
// Если error это Error - вернуть error.message
// Иначе вернуть "Ошибка: <error>" (приведя error к строке)
export function formatError(error: Error | string): string {
  if (error instanceof Error) {
    return error.message;
  }
  return `Ошибка: ${error}`;
}

// 3. Сужение через оператор in
type Fish = { swim: () => string };
type Bird = { fly: () => string };

// Если у animal есть метод swim - вернуть "Плывет", иначе "Летит"
// Подсказка: используйте оператор "in" (например, "swim" in animal)
export function moveAnimal(animal: Fish | Bird): string {
  // Напишите код здесь
  if ("swim" in animal) {
    return "Плывет";
  }
  return "Летит";
}