import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white">
      <Shell>
        <section className="flex-1 text-left text-sm leading-loose text-muted-foreground">
          <Icons.companyLogo className="h-28 w-28" aria-hidden="true" />
          <div
            id="footer-company-description"
            aria-labelledby="footer-company-description"
            className="text-stone-600"
          >
            <p>
              주식회사 {siteConfig.name} | 대표 {siteConfig.footer.ceo}
            </p>
            <p>{siteConfig.footer.address}</p>
            <p>{siteConfig.footer.email}</p>
          </div>

          <div className="mt-2 font-medium">
            ⓒ {siteConfig.footer.foundedYear}-{new Date().getFullYear()}{' '}
            Hanuldrone Inc.
          </div>
        </section>
      </Shell>
    </footer>
  );
}
