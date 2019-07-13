const Toggleable = require('./Toggleable.js');

class Command extends Toggleable {
  /**
   * @description Create a new command
   * @param {string} name - The name of the command
   * @param {object} options - The options for this command
   * @param {Array<string>} [options.aliases] - Aliases of this command
   * @param {string} [options.info] - Information about this command
   * @param {string} [options.usage] - Usage of this command
   * @param {boolean} [options.guildOnly] - Whether the command can only be used inside a guild
   * @param {Array<string>} [options.contributors] - List of github users who contributed to the command
   */
  constructor(name, options) {
    super();

    this.name = name;

    this.aliases = options.aliases || [];

    if (!Array.isArray(this.aliases)) {
      throw new TypeError('Aliases must be an array');
    }
    if (this.aliases) {
      this.aliases.forEach(alias => {
        if (typeof alias !== 'string') {
          throw new TypeError('Aliases array must contain strings only');
        }
      });
    }

    if (!(typeof options.info === 'string')) {
      throw new TypeError('Info must be a string');
    }
    this.info = options.info || 'None';

    if (!(typeof options.usage === 'string')) {
      throw new TypeError('Usage must be a string');
    }
    this.usage = options.usage || name;

    if (!(typeof options.guildOnly === 'boolean')) {
      throw new TypeError('Guild only must be a boolean');
    }
    this.guildOnly = options.guildOnly || true;

    this.contributors = options.contributors || [];
  }

  /**
   * @description Method that runs when the command is executed
   */
  run() {
    throw new Error(`Command '${this.name}' is missing run method`);
  }
}

module.exports = Command;
