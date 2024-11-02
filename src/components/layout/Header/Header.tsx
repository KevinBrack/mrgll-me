import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './Header.module.scss';

export function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" component="div">
          MRGLL.ME
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
