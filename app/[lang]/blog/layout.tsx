import Footer from "@/components/footer";
import Header from "@/components/header";
import { ValidLocale } from "@/lib/i18n/config";

export default async function PhotoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: ValidLocale }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
}
