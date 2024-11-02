import { Button } from '@mui/material';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.customButton}>
        <Button variant="contained">Hello MRGLL.ME</Button>
      </div>
    </main>
  );
}
