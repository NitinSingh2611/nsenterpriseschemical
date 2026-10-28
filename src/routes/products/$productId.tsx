import { createFileRoute, notFound } from '@tanstack/react-router'
import { findProduct } from '../../data/products'
import { site } from '../../data/site'
import { ProductPage } from '../../components/ProductPage'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => {
    const product = findProduct(params.productId)
    if (!product) throw notFound()
    return product
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          links: [
            { rel: 'canonical', href: `${site.url}/products/${loaderData.id}` },
          ],
          meta: [
            { property: 'og:url', content: `${site.url}/products/${loaderData.id}` },
            { title: `${loaderData.name} | N S ENTERPRISES Nagpur` },
            { name: 'description', content: loaderData.shortDescription },
            {
              property: 'og:title',
              content: `${loaderData.name} | N S ENTERPRISES Nagpur`,
            },
            {
              property: 'og:description',
              content: loaderData.shortDescription,
            },
          ],
        }
      : {},
  component: ProductRoute,
})

function ProductRoute() {
  const product = Route.useLoaderData()
  return <ProductPage key={product.id} product={product} />
}
