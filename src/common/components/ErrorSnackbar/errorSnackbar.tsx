import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import styles from "./error.snackbar.module.css"
const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function ErrorComponent() {

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Alert className={styles["error-snackbar"]} severity="error">There are no products that match this filter criteria.</Alert>
    </Stack>
  );
}