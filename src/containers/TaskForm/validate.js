const validate = (values) => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = "vui long nhap tieu de";
  } else if (title.trim() && title.length < 5) {
    errors.title = "tieu de phai co tu 5 ky tu";
  }
  return errors;
};

export default validate;
