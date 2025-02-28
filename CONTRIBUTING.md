# Contributing to Dullahan VS Code Theme

Thank you for your interest in contributing to Dullahan VS Code Theme! This document outlines how the theme is structured and how you can contribute.

## Project Structure

The project has been refactored to use a modular approach for generating theme files:

```
dullahan-vscode-theme/
├── .github/                  # GitHub-specific files
├── .vscode/                  # VS Code settings
├── assets/                   # Theme assets
├── src/                      # Source files
│   ├── colors/               # UI color definitions
│   ├── token-colors/         # Syntax highlighting definitions
│   ├── semantic-colors/      # Semantic token coloring
│   ├── generate-theme.js     # Theme generation script
│   └── index.js              # Main build script
├── themes/                   # Generated theme files (output)
└── ...                       # Other project files
```

## Development Workflow

1. **Install Dependencies**

   ```bash
   bun install
   ```

2. **Make Changes**

   - To modify UI colors, edit files in the `src/colors/` directory
   - To modify syntax highlighting, edit files in the `src/token-colors/` directory
   - To modify semantic tokens, edit files in the `src/semantic-colors/` directory

3. **Build Themes**

   ```bash
   bun run build
   ```

   This will generate the theme JSON files in the `themes/` directory.

4. **Test Your Changes**

   - Press F5 in VS Code to launch a new VS Code instance with your theme
   - In the new window, select one of the Dullahan themes
   - Verify your changes

5. **Package for Testing**
   ```bash
   bun run package
   ```
   This creates a `.vsix` file that you can install in VS Code.

## Creating a New Theme Variant

To create a new theme variant:

1. Create new color files in each directory:

   - `src/colors/my-variant.js`
   - `src/token-colors/my-variant.js`
   - `src/semantic-colors/my-variant.js`

2. Update the index.js files to export your new theme

3. Update the main build script (`src/index.js`) to generate your theme

4. Update `package.json` to include your new theme in the `contributes.themes` section

## Publishing

To publish a new version:

1. Update the version in `package.json`
2. Run `npm run build` to generate the latest themes
3. Run `npm run publish` to publish to the VS Code Marketplace

## Pull Requests

When submitting a pull request:

1. Make sure your code follows the project's style
2. Include screenshots of your changes
3. Explain why your changes are needed
4. Make sure the themes build correctly
