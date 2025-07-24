import { GPU } from './gpu.js';
import { RAM } from './ram.js';
import { ROM } from './rom.js';

// https://problemkaputt.de/gbatek.htm#armcpuoverview

enum State {
  ARM = 0,
  THUMB,
}

enum Register {
  R0 = 0,
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R8_fiq,
  R9,
  R9_fiq,
  R10,
  R10_fiq,
  R11,
  R11_fiq,
  R12,
  R12_fiq,
  R13,
  R13_fiq,
  R13_svc,
  R13_abt,
  R13_irq,
  R13_und,
  R14,
  R14_fiq,
  R14_svc,
  R14_abt,
  R14_irq,
  R14_und,
  R15,
  CPSR,
  SPSR_fiq,
  SPSR_svc,
  SPSR_abt,
  SPSR_irq,
  SPSR_und,
}

enum Condition {
  EQ = 0, // Equal (zero) (same)
  NE, // Not equal (non-zero) (different)
  CS, // Carry set (unsigned higher or same)
  CC, // Carry clear (unsigned lower)
  MI, // Minus (signed negative)
  PL, // Plus (signed positive or zero)
  VS, // Overflow (signed overflow)
  VC, // No overflow (signed no overflow)
  HI, // Unsigned higher
  LS, // Unsigned lower or same
  GE, // Signed greater than or equal
  LT, // Signed less than
  GT, // Signed greater than
  LE, // Signed less than or equal
  AL, // Always
  NV, // Never (reserved)
}

enum Flag {
  M0 = 0, // Mode bits
  M1 = 1, // Mode bits
  M2 = 2, // Mode bits
  M3 = 3, // Mode bits
  M4 = 4, // Mode bits
  T = 5, // Thumb state (0 = ARM state, 1 = Thumb state)
  F = 6, // FIQ disable (0 = enabled, 1 = disabled)
  I = 7, // IRQ disable (0 = enabled, 1 = disabled)
  A = 8, // Asynchronous abort disable (0 = enabled, 1 = disabled)
  E = 9, // Endianness (0 = little-endian, 1 = big-endian)
  J = 24, // Jazelle state (ARM/Thumb state)
  Q = 27, // Sticky overflow flag
  V = 28, // Overflow flag
  C = 29, // Carry flag
  Z = 30, // Zero flag
  N = 31, // Negative flag
}

// TODO: Define the instruction set
enum Instruction {}

export class CPU {
  private readonly internalRam: RAM;
  private readonly externalRam: RAM;
  private readonly rom: ROM;
  private readonly gpu: GPU;

  private readonly registers: Uint32Array = new Uint32Array(37);

  constructor(internalRam: RAM, externalRam: RAM, rom: ROM, gpu: GPU) {
    this.internalRam = internalRam;
    this.externalRam = externalRam;
    this.rom = rom;
    this.gpu = gpu;
  }

  private get sp(): number {
    return this.registers[Register.R13];
  }

  private get lr(): number {
    return this.registers[Register.R14];
  }

  private get pc(): number {
    return this.registers[Register.R15];
  }
}
