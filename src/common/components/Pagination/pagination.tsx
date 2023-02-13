import { Pagination, PaginationItem, Stack } from "@mui/material";
import styles from "./pagination.module.css";
export default function PaginationSize({ count, size, handleChange, page }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        size={size}
        onChange={handleChange}
        page={page}
        color="primary"
        classes={{ root: styles.pagination }}
        renderItem={(item) => {
          return (
            <PaginationItem {...item} classes={{ root: styles.pagination }} />
          );
        }}
      />
    </Stack>
  );
}
