import { Button } from '@mui/material';
import styles from './page.module.scss';
import { Header } from '@/components/layout/Header';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log(locale);
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.customButton}>
          <Button variant="contained">Hello MRGLL.ME</Button>
        </div>
      </div>
    </main>
  );
}
