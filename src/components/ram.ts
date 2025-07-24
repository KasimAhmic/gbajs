export enum RamType {
  Internal,
  External,
}

export class RAM {
  private static readonly INTERNAL_RAM_SIZE = 32 * 1024; // 32 KB
  private static readonly EXTERNAL_RAM_SIZE = 256 * 1024; // 256 KB

  private readonly data: Uint8Array;

  constructor(type: RamType) {
    this.data = new Uint8Array(type === RamType.Internal ? RAM.INTERNAL_RAM_SIZE : RAM.EXTERNAL_RAM_SIZE);
  }
}
