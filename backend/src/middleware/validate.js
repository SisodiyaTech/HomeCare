const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse({ body: req.body });

  if (!result.success) {
    // Zod v4 uses result.error.issues (not .errors)
    const issues = result.error.issues || [];
    const message = issues.length > 0 ? issues[0].message : "Validation failed";
    return res.status(400).json({ success: false, message });
  }

  next();
};

export default validate;
