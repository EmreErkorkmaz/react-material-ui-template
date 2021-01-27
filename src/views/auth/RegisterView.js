import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Kayıt"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Geçersiz email adresi').max(255).required('Email zorunludur'),
                firstName: Yup.string().max(255).required('İsim zorunludur'),
                lastName: Yup.string().max(255).required('Soyisim zorunludur'),
                password: Yup.string().max(255).required('Parola zorunludur'),
                policy: Yup.boolean().oneOf([true], 'Kullanıcı sözleşmesini onaylayınız')
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Yeni hesap oluştur
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Email adresinizle yeni kayıt oluşturun
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="İsim"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Soyisim"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Adresi"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Parola"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Kullanıcı şartları ve koşulları
                    </Link>
                    {" 'nı okudum"}
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Kayıt Ol
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Kayıtlı Hesabınız var mı?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Giriş Yap
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
