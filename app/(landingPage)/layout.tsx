import { SiteHeader } from '@/components/layouts/site-header';

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <span className="h-screen snap-y snap-mandatory overflow-auto">
        {children}
      </span>
    </>
  );
}
