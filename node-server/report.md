# ESLint Setup Report

## Steps Followed

1. **Initialize Node.js Project**
   - Created project directory
   - Ran `npm init` to create `package.json`

2. **Install ESLint**
   - Ran `npm install eslint --save-dev`
   - Installed additional packages: `globals` and `@eslint/js`

3. **Configure ESLint**
   - Created `eslint.config.js` using ES Module syntax
   - Added recommended rules from `@eslint/js`

4. **Modify Rules**
   - Set `semi` rule to require semicolons: `['error', 'always']`
   - Set `quotes` rule to require single quotes: `['error', 'single']`

5. **Lint Code**
   - Ran `npm run lint` to check for errors
   - Ran `npm run lint:fix` to auto-fix issues

---

## Issues Encountered

### Issue 1: ESLint Not Recognized
- **Error:** `'eslint' is not recognized as an internal or external command`
- **Solution:** Installed ESLint locally with `npm install eslint --save-dev`

### Issue 2: ES Module Error
- **Error:** `ReferenceError: module is not defined in ES module scope`
- **Cause:** Project uses ES Modules but config used CommonJS syntax
- **Solution:** Updated `eslint.config.js` to use `export default` instead of `module.exports`

### Issue 3: Quote Style Errors
- **Error:** 9 errors about using double quotes instead of single quotes
- **Solution:** Ran `npm run lint:fix` to auto-fix all errors

---

## How ESLint Helps Maintain Code Quality

- **Consistency:** Enforces the same coding style across all files
- **Error Prevention:** Catches bugs and mistakes before code runs
- **Auto-fix:** Automatically fixes many issues, saving time
- **Customizable:** Rules can be adjusted to fit project needs
- **Team Collaboration:** Makes code easier to read and maintain

---

## Screenshot

<img width="665" height="974" alt="eslintWorking" src="https://github.com/user-attachments/assets/b5b1b1c8-dff1-41b1-a76e-8e8a6c69f9b5" />

