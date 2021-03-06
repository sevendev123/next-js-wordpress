import authorPostFields from '@/lib/wordpress/_partials/authorPostFields'
import defaultPageData from '@/lib/wordpress/_partials/defaultPageData'
import featuredImagePostFields from '@/lib/wordpress/_partials/featuredImagePostFields'
import globalPostFields from '@/lib/wordpress/_partials/globalPostFields'
import seoPostFields from '@/lib/wordpress/_partials/seoPostFields'
import {gql} from '@apollo/client'

// Fragment: retrieve single page fields.
export const singlePageFragment = gql`
  fragment SinglePageFields on Page {
    ${globalPostFields}
    blocksJSON
    excerpt
    ${seoPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`

// Query: retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID(
    $id: ID!
    $idType: PageIdType = URI
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    ${defaultPageData}
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      isPostsPage
    }
  }
  ${singlePageFragment}
`

export default queryPageById
