import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import ChartWidgets from '@/app/shared/chart-widgets';
import { metaObject } from '@/config/site.config';
import ListingFilters from '@/app/shared/explore-listing/listing-filters';

export const metadata = {
  ...metaObject('Statistiques'),
};

const pageHeader = {
  title: 'Statistiques',
  breadcrumb: [
    {
      href: routes.campagnes.list,
      name: 'Home',
    },
    {
      name: 'Statistiques',
    },
    {
      name: 'Graphique',
    },
  ],
};

export default function ChartsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <a
            target="_blank"
            href="https://recharts.org/en-US"
            rel="nofollow noopener noreferrer"
            className="inline-flex w-full @lg:w-auto"
          >

          </a>
        </div>
      </PageHeader>
      <ListingFilters className="mb-6" />
      <ChartWidgets />
    </>
  );
}
