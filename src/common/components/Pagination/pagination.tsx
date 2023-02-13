import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./pagination.module.css"
export default function PaginationSize({ count, size, handleChange, page }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        size={size}
        onChange={handleChange}
        page={page}
        color="primary"
        classes={{ul: styles.pagination}}
      />
    </Stack>
  );
}
