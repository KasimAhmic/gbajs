import { CPU } from './cpu.js';
import { GPU } from './gpu.js';
import { Input } from './input.js';
import { RAM, RamType } from './ram.js';
import { ROM } from './rom.js';

export class GameBoyAdvance {
  private readonly internalRam: RAM;
  private readonly externalRam: RAM;
  private readonly rom: ROM;
  private readonly gpu: GPU;
  private readonly cpu: CPU;

  constructor() {
    this.internalRam = new RAM(RamType.Internal);
    this.externalRam = new RAM(RamType.External);
    this.rom = new ROM();
    this.gpu = new GPU();
    this.cpu = new CPU(this.internalRam, this.externalRam, this.rom, this.gpu);
  }

  powerOn(): void {
    console.log('Console powered on.');
  }

  run(): number {
    while (true) {
      for (let offset = 0; offset < this.rom.size; offset++) {
        console.log(this.rom.get(offset));
      }

      return 0;
    }
  }

  powerOff(): void {
    console.log('Console powered off.');
  }

  reset(): void {
    console.log('Console reset.');
  }

  loadROM(romData: Uint8Array): void {
    this.rom.load(romData);
    console.log('ROM loaded.');
  }

  handleInput(input: Input): void {
    console.log(`Handling input: ${input}`);
  }
}
