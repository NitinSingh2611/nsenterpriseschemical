import { createFileRoute } from '@tanstack/react-router'
import { MarketingPage } from '../components/MarketingPage'
import { site } from '../data/site'

export const Route = createFileRoute('/')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${site.url}/` }],
    meta: [{ property: 'og:url', content: `${site.url}/` }],
  }),
  component: MarketingPage,
})
