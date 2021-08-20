export const handleSubmit = (form, setFormValidate) => {
  if (!validateEmail(form.email)) {
    setFormValidate({ message: "Email format is invalid", isShow: true });
    return false;
  }
  if (Object.keys(form).some((key) => form[key] === "")) {
    setFormValidate({ message: "All fields must be entered", isShow: true });
    return false;
  }

  setFormValidate({ message: "", isShow: false });
  return true;
};

const validateEmail = (value) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(value);
};
