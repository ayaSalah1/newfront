import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Box } from "@mui/material";
import TextInput from "../inputs/TextInput";
import DefaultFileInput from "../inputs/DefaultFileInput";
import DefaultSelect from "../inputs/DefaultSelect";
import DefaultBtn from "../Buttons/DefaultBtn";
import GetCategoriesAction from "../../../redux/action/Category/GetCategories.action";
import GetDepartmentAction from "../../../redux/action/Department/GetDepartment.action";
import CreateEmployeeAction from "../../../redux/action/Employee/CreateEmployees.action";
import { ErrorMessage, Form, Formik, Field } from "formik";
import { validationSchemaEmployee } from "../../../validationSchema";

import "./NewEmployeeForm.css";

function NewEmployeeForm(props) {
  const empTypeOptions = [
    { _id: "دوام بالساعة", name: "دوام بالساعة" },
    { _id: "بالمهام", name: "بالمهام" },
    { _id: "فريلانسر", name: "فريلانسر" },
  ];

  const rolesOptions = [
    { _id: "مستخدم", name: "مستخدم" },
    { _id: "مدير", name: "مدير" },
    { _id: "ناشر", name: "ناشر" },
    { _id: "ناشر محترف", name: "ناشر محترف" },
    { _id: "ناشر محترف رافع", name: "ناشر محترف رافع" },
    { _id: "ناشر وكاتب محتوى", name: "ناشر وكاتب محتوى" },
    { _id: "كاتب محتوى", name: "كاتب محتوى" },
    { _id: "مسؤول", name: "مسؤول" },
  ];

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const departments = useSelector((state) => state.departments.data);

  const createEmployeeStatus = useSelector(
    (state) => state.employees.createStatus
  );

  const [selectedFile, setSelectedFile] = useState(null);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [freelanceValue, setFreelanceValue] = useState("");

  useEffect(() => {
    dispatch(GetCategoriesAction({ page: 1 }));
    dispatch(GetDepartmentAction({ page: 1 }));
  }, [dispatch]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    Department: "",
    type: "",
    holidays: "",
    weekEnd: 0,
    role: "",
  };

  const handleSubmit = (values) => {
    const categoryValue =
      categoriesArray && categoriesArray.length > 0
        ? categoriesArray[0].value
        : null;

    dispatch(
      CreateEmployeeAction({
        ...values,
        Category: categoryValue,
        image: selectedFile,
      })
    );
  };

  const onChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategoriesArray(event);
  };

  const weekDays = [
    { _id: 0, name: "الأحد" },
    { _id: 1, name: "الاثنين" },
    { _id: 2, name: "الثلاثاء" },
    { _id: 3, name: "الأربعاء" },
    { _id: 4, name: "الخميس" },
    { _id: 5, name: "الجمعة" },
    { _id: 6, name: "السبت" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaEmployee}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, touched, errors }) => (
        <Box
          component={Form}
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
          }}
          className="page"
        >
          {props.title && (
            <Typography
              variant="h4"
              sx={{ marginBottom: "2rem", textAlign: "right" }}
              className="header"
            >
              إضافه موظف
            </Typography>
          )}
          <Grid container spacing={40}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Field name="name">
                    {({ field }) => (
                      <TextInput
                        {...field}
                        title="الاسم"
                        required
                        error={errors.name && touched.name && errors.name}
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="email">
                    {({ field }) => (
                      <TextInput
                        {...field}
                        title="الايميل"
                        required
                        error={errors.email && touched.email && errors.email}
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="password">
                    {({ field }) => (
                      <TextInput
                        type="password"
                        {...field}
                        title="كلمة المرور"
                        required
                        error={
                          errors.password && touched.password && errors.password
                        }
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="passwordConfirm">
                    {({ field }) => (
                      <TextInput
                        type="password"
                        {...field}
                        title="تأكيد كلمة المرور"
                        required
                        error={
                          errors.passwordConfirm &&
                          touched.passwordConfirm &&
                          errors.passwordConfirm
                        }
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <DefaultFileInput
                    name="image"
                    onChange={onChangeFile}
                    title="صورة الملف الشخصي (اختياري)"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Field name="role">
                    {({ field }) => (
                      <DefaultSelect
                        {...field}
                        options={rolesOptions}
                        title="الصلاحيات"
                        required
                        error={errors.role && touched.role && errors.role}
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="type">
                    {({ field }) => (
                      <DefaultSelect
                        {...field}
                        options={empTypeOptions}
                        title="نوع الموظف"
                        onChange={(e) => {
                          handleChange(e);
                          setFreelanceValue(e.target.value);
                        }}
                        required
                        error={errors.type && touched.type && errors.type}
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  {freelanceValue !== "فريلانسر" && (
                    <Field name="holidays">
                      {({ field }) => (
                        <TextInput
                          {...field}
                          title="أيام الإجازة السنوية"
                          required
                          error={
                            errors.holidays &&
                            touched.holidays &&
                            errors.holidays
                          }
                          fullWidth
                        />
                      )}
                    </Field>
                  )}
                </Grid>
                <Grid item>
                  <Field name="Department">
                    {({ field }) => (
                      <DefaultSelect
                        {...field}
                        options={departments}
                        title="فريق الموظف"
                        required
                        error={
                          errors.Department &&
                          touched.Department &&
                          errors.Department
                        }
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="weekEnd">
                    {({ field }) => (
                      <DefaultSelect
                        {...field}
                        options={weekDays}
                        title="اختر يوم الاجازة الاسبوعي"
                        required
                        error={
                          errors.weekEnd && touched.weekEnd && errors.weekEnd
                        }
                        fullWidth
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {createEmployeeStatus === "error" && (
            <Typography
              color="error"
              sx={{ marginTop: "1rem", textAlign: "center" }}
            >
              حدث خطأ أثناء إنشاء الموظف. يرجى المحاولة مرة أخرى.
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            <DefaultBtn title="اضافة موظف" type="submit" />
          </Box>
        </Box>
      )}
    </Formik>
  );
}
export default NewEmployeeForm;
