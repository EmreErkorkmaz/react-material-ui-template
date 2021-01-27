import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Bildirimleri Yönet"
          title="Bildirimler"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Bildirimler
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Email"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Bildirim Göster"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="SMS Bildirimleri"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Telefon Aramaları"
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Messages
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bildirim Göster"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Telefon Aramaları"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Kaydet
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
