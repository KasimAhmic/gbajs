export class ROM {
  private static readonly MAX_SIZE = 32 * 1024 * 1024; // 32 MB

  private readonly data: Uint8Array;

  private romSize: number;

  constructor() {
    this.data = new Uint8Array(ROM.MAX_SIZE);
    this.romSize = 0;
  }

  load(romData: Uint8Array): void {
    if (romData.length > ROM.MAX_SIZE) {
      throw new Error(`ROM data exceeds maximum size of ${ROM.MAX_SIZE} bytes.`);
    }

    this.data.set(romData);
    this.romSize = romData.length;
  }

  get(offset: number): number {
    if (offset < 0 || offset >= this.data.length) {
      throw new Error(`Offset ${offset} is out of bounds.`);
    }

    return this.data[offset];
  }

  get size(): number {
    return this.romSize;
  }
}
