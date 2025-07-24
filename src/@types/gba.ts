export type Nominal<T, U> = T & { [Symbol.species]?: U; __jsType?: T };

/**
 * 8bit number.
 */
export type Byte = Nominal<number, 'Byte'>;

/**
 * 16bit number.
 */
export type HalfWord = Nominal<number, 'HalfWord'>;

/**
 * 32bit number.
 */
export type Word = Nominal<number, 'Word'>;
