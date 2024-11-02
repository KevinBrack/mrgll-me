import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MRGLL.ME',
  description: 'AI-powered WoW pet battle scenes',
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <div lang={locale}>{children}</div>;
}
