/**
 * react-form-utils — lightweight validation helpers
 */

export function validateEmail(email) {
  // BUG: regex is too permissive, allows invalid TLDs
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
}

export function validateMinLength(value, min) {
  if (typeof value !== "string") return false;
  return value.length >= min;
}

// TODO: add phone number validation
// TODO: add credit card format validation
