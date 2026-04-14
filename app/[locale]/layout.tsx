import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import CookieBanner from '@/components/cookie-banner';
import { getMessages } from '@/lib/i18n';
import CrispChat from '@/components/crisp-chat';
import Script from 'next/script';

type Locale = 'fr' | 'en';

const locales = ['fr', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  const navT = {
    home: messages.nav.home,
    signature: messages.nav.signature,
    realisations: messages.nav.realisations,
    films: messages.nav.films,
    faq: messages.nav.faq,
    contact: messages.nav.contact,
    reserver: messages.nav.reserver,
  };

  return (
    <html lang={locale}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18089402701"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18089402701');
          `}
        </Script>
      </head>
      <body className="bg-sorel-cream text-sorel-black antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale as Locale} t={navT} />
          <main>{children}</main>
          <Footer locale={locale as Locale} />
          <WhatsAppButton />
          <CrispChat />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
