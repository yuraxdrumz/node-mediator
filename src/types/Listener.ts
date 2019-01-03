export type Listener = {
  (...values: any[]): Promise<any> | void
}
