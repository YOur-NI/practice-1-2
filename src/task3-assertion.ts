// Тип конфигурации приложения
export type AppConfig = {
  apiUrl: string;
  timeout: number;
};

// Напишите Assertion Function assertValidConfig
// Если данные не соответствуют AppConfig - бросить Error("Invalid config")
// Используйте синтаксис: asserts data is AppConfig
export function assertValidConfig(data: unknown): asserts data is AppConfig {
  if (
    typeof data !== "object" ||
    data === null ||
    !("apiUrl" in data) ||
    !("timeout" in data) ||
    typeof (data as any).apiUrl !== "string" ||
    typeof (data as any).timeout !== "number"
  ) {
    throw new Error("Invalid config");
  }
}

// Функция инициализации.
// Сначала вызывает assertValidConfig(config).
// Если проверка прошла - вернуть "API: <apiUrl>, Timeout: <timeout>"
export function initApp(config: unknown): string {
  assertValidConfig(config);
  return `API: ${config.apiUrl}, Timeout: ${config.timeout}`;
}