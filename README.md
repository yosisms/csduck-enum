# @csduck/enum

**@csduck/enum** is a utility library that provides a way to create and use enums in JavaScript and TypeScript. It allows you to define enums with a simple and readable syntax and provides a set of utility functions to work with them. This library is part of the **csduck libraries collection**.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Installation

You can install this library using npm or yarn:

```shell
npm install @csduck/enum
# or
yarn add @csduck/enum
```

## Usage
You can define an enum using the `EnumDef` class.

Example:

```javascript
const EColors = new EnumDef(["RED", "BLUE", "GREEN", "YELLOW"]);
```

After you defined an enum, you can use the `Enum` class to work with it.

### Methods

#### `Enum.options: string[]`
Returns an array of all the enum options.

```javascript
const EColors = new EnumDef(["RED", "BLUE", "GREEN", "YELLOW"]);

console.log(EColors.options);
// Result: ["RED", "BLUE", "GREEN", "YELLOW"]
```

#### `Enum.records: Record<string, string>`
Returns an object with the enum options as keys and values.

```javascript
const EColors = new EnumDef(["RED", "BLUE", "GREEN", "YELLOW"]);

console.log(EColors.records);
// Result: { RED: "RED", BLUE: "BLUE", GREEN: "GREEN", YELLOW: "YELLOW" }

const myColor = EColors.RED;
```

## Contribution
Contributions and bug reports are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/yosisms/csduck-enum).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
