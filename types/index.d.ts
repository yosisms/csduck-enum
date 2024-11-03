export = EnumDef;
/**
 * Class representing an Enum with a set of options.
 * @template {readonly string[]} Options
 */
declare class EnumDef<const Options extends readonly string[]> {
  /**
   * Creates an EnumDef instance.
   * @param {Options} options - The array of options for the enum.
   */
  constructor(options: Options);
  /**
   * @type {Options} Array of options for the enum.
   */
  options: Options;
  /**
   * Generates a record object where each key and value is an option.
   * @type {{ [K in Options[number]]: K }}
   * @returns {{ [K in Options[number]]: K }} An object with each option as both key and value.
   */
  get records(): { [K in Options[number]]: K };
}
