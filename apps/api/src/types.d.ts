declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: string;
      APP_HOST: string;
      APP_PORT: number;
      DATA_PATH: string;
    }
  }
}

export {};
