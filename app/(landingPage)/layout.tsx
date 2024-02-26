export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <span className="h-screen snap-y snap-mandatory overflow-auto">
        {children}
      </span>
    </>
  );
}
