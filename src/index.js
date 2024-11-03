/**
 * Class representing an Enum with a set of options.
 * @template {readonly string[]} Options
 */
class EnumDef {
  /**
   * @type {Options} Array of options for the enum.
   */
  options;

  /**
   * Creates an EnumDef instance.
   * @param {Options} options - The array of options for the enum.
   */
  constructor(options) {
    this.options = options;
  }

  /**
   * Generates a record object where each key and value is an option.
   * @type {{ [K in Options[number]]: K }}
   * @returns {{ [K in Options[number]]: K }} An object with each option as both key and value.
   */
  get records() {
    return this.options.reduce((acc, value) => {
      acc[value] = value;
      return acc;
    }, /** @type {{ [K in Options[number]]: K }} */ ({}));
  }
}

module.exports = EnumDef;
