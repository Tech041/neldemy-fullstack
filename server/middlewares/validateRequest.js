export const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err.errors) {
        const formatted = err.errors.map((e) => ({
          field: e.path.join("."),
          code: e.code,
          message: e.message,
        }));
        return res.status(400).json({ errors: formatted });
      }

      // Optional fallback for unexpected error formats
      try {
        const parsed = JSON.parse(err.message);
        return res.status(400).json({ errors: parsed });
      } catch {
        return res.status(400).json({ message: err.message });
      }
    }
  };
};
