import { GameBoyAdvance } from './components/gameboy-advance.js';

function main(): number {
  const gba = new GameBoyAdvance();
  gba.powerOn();
  gba.loadROM(new Uint8Array([0x00, 0x01, 0x02, 0x03]));
  return gba.run();
}

process.exitCode = main();
