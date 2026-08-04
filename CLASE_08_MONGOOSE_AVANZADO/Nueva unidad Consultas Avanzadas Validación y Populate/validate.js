// Validaciones

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateData(data) {
  // Validar que el nombre no esté vacío
  if (
    !data.name ||
    (data.name.trim() === "" &&
      data.name.length < 3 &&
      !data.email &&
      !REGEX_EMAIL.test(data.email))
  ) {
    throw new Error("El nombre es obligatorio.");
  }
}
