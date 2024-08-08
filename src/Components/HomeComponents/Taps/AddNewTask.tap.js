import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Box, TextField } from "@mui/material";
import TextInput from "../../Supcomponents/inputs/TextInput";
import DefaultSelect from "../../Supcomponents/inputs/DefaultSelect";
import DefaultTextArea from "../../Supcomponents/inputs/DefaultTextArea";
import InputWithIcon from "../../Supcomponents/inputs/InputWithIcon";
import DefaultBtn from "../../Supcomponents/Buttons/DefaultBtn";
import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";
import CreateTaskAction from "../../../redux/action/Task/CreateTask.action";
import GetDepartmentAction from "../../../redux/action/Department/GetDepartment.action";
import GetEmployeesDepartmentAction from "../../../redux/action/Employee/GetEmployeesDepartment.action";

const validationSchemaTask = Yup.object().shape({
  name: Yup.string().required("العنوان مطلوب"),
  description: Yup.string().required("الوصف مطلوب"),
  team: Yup.string().required("اختر الفريق مطلوب"),
  assignTo: Yup.string().required("اختيار الموظف مطلوب"),
  priority: Yup.string().required("اختر الاولوية مطلوب"),
  assignOn: Yup.date().required("موعد بدايه المهمه مطلوب"),
  deadline: Yup.date().required("اخر موعد تسليم مطلوب"),
  taskTimeHours: Yup.number()
    .typeError("يجب إدخال رقم صحيح")
    .required("وقت المهمه بالساعات مطلوب")
    .min(0, "يجب أن تكون الساعات 0 أو أكثر"),
  taskTimeMinutes: Yup.number()
    .typeError("يجب إدخال رقم صحيح")
    .required("وقت المهمه بالدقائق مطلوب")
    .min(0, "يجب أن تكون الدقائق 0 أو أكثر")
    .max(59, "يجب أن تكون الدقائق أقل من 60"),
});

function AddNewTaskTap(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetDepartmentAction({ page: 1 }));
  }, [dispatch]);

  const createTaskStatus = useSelector((state) => state.tasks.createStatus);
  const employees = useSelector((state) => state.employees.data);
  const department = useSelector((state) => state.departments.data);
  const priority = [
    { _id: "مهمة مستعجلة", name: "مهمة مستعجلة" },
    { _id: "مهمة يومية", name: "مهمة يومية" },
    { _id: "مهمة غير مستعجلة", name: "مهمة غير مستعجلة" },
  ];

  // const initialValues = {
  //   title: "",
  //   description: "",
  //   team: "",
  //   employee: "",
  //   priority: "",
  //   startDate: "",
  //   endDate: "",
  //   hours: "",
  //   minutes: "",
  // };

  const initialValues = {
    name: "",
    description: "",
    team: "",
    priority: "",
    deadline: "",
    assignTo: "",
    assignOn: "",
    taskTimeHours: "",
    taskTimeMinutes: "",
  };

  const handleSubmit = (values) => {
    console.log({ values });
    const hours = String(values.taskTimeHours).padStart(2, "0");
    const minutes = String(values.taskTimeMinutes).padStart(2, "0");
    const taskTime = `${hours}-${minutes}`;
    console.log({ taskTime });
    const submissionValues = {
      ...values,
      taskTime,
    };

    dispatch(CreateTaskAction(submissionValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaTask}
      onSubmit={handleSubmit}
    >
      {({ handleChange, setFieldValue, values, touched, errors }) => (
        <Box
          component={Form}
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
            "& .MuiGrid-item": {
              paddingTop: "16px",
              paddingBottom: "16px",
            },
            fontFamily: "Katibeh",
            fontSize: "22px",
          }}
        >
          <Typography
            variant="h4"
            className="title "
            sx={{
              marginBottom: "2rem",
              textAlign: "right",
              fontFamily: "Katibeh",
            }}
          >
            إنشاء مهمة
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field name="name">
                {({ field }) => (
                  <TextInput
                    {...field}
                    title="العنوان"
                    required
                    error={errors.name && touched.name && errors.name}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="description">
                {({ field }) => (
                  <DefaultTextArea
                    multiline
                    placeholder="الوصف"
                    style={{
                      width: "100%",
                      backgroundColor: "#A6CDD766",
                      borderRadius: "12px",
                    }}
                    rows={4}
                    {...field}
                    title="الوصف"
                    required
                    error={
                      errors.description &&
                      touched.description &&
                      errors.description
                    }
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="priority">
                {({ field }) => (
                  <DefaultSelect
                    {...field}
                    options={priority}
                    title="اختر الاولوية"
                    required
                    error={
                      errors.priority && touched.priority && errors.priority
                    }
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="team">
                {({ field }) => (
                  <DefaultSelect
                    {...field}
                    options={department}
                    onChange={(event) => {
                      const value = event.target.value;
                      setFieldValue("team", value);
                      dispatch(GetEmployeesDepartmentAction({ id: value }));
                    }}
                    title="اختر الفريق"
                    required
                    error={errors.team && touched.team && errors.team}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="assignTo">
                {({ field }) => (
                  <DefaultSelect
                    {...field}
                    options={employees}
                    title="اختيار الموظف"
                    required
                    error={
                      errors.assignTo && touched.assignTo && errors.assignTo
                    }
                    fullWidth
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12} md={3}>
              <Field name="taskTimeHours">
                {({ field, meta }) => (
                  <>
                    <TextInput
                      {...field}
                      iconClass="far fa-clock"
                      title="وقت المهمه بالساعات"
                      required
                      type="number"
                      error={meta.touched && meta.error}
                      fullWidth
                    />
                  </>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={3}>
              <Field name="taskTimeMinutes">
                {({ field, meta }) => (
                  <>
                    <TextInput
                      {...field}
                      iconClass="far fa-clock"
                      title="وقت المهمه بالدقائق"
                      required
                      type="number"
                      error={meta.touched && meta.error}
                      fullWidth
                    />
                  </>
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="assignOn">
                {({ field }) => (
                  <TextInput
                    {...field}
                    type="date"
                    title="موعد بدايه المهمه"
                    required
                    error={
                      errors.assignOn && touched.assignOn && errors.assignOn
                    }
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="deadline">
                {({ field }) => (
                  <TextInput
                    {...field}
                    type="date"
                    title="اخر موعد تسليم"
                    required
                    error={
                      errors.deadline && touched.deadline && errors.deadline
                    }
                    x
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          {createTaskStatus === "error" && (
            <Typography
              color="error"
              sx={{ marginTop: "1rem", textAlign: "center" }}
            >
              حدث خطأ أثناء إنشاء المهمة. يرجى المحاولة مرة أخرى.
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            <DefaultBtn title="حفظ مهمة" type="submit" />
          </Box>
        </Box>
      )}
    </Formik>
  );
}

export default AddNewTaskTap;
