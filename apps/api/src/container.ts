import type { DuckDBConnection } from '@duckdb/node-api';

export abstract class Container {
  private static _db: DuckDBConnection;

  private static _dataPath: string;

  public static init(db: DuckDBConnection, dataPath: string): void {
    // eslint-disable-next-line no-underscore-dangle
    Container._db = db;
    // eslint-disable-next-line no-underscore-dangle
    Container._dataPath = dataPath;
  }

  static get db() {
    // eslint-disable-next-line no-underscore-dangle
    return Container._db;
  }

  static get dataPath() {
    // eslint-disable-next-line no-underscore-dangle
    return Container._dataPath;
  }
}
