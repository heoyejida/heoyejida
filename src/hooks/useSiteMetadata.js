import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            developerName
            instagramUsername
          }
        }
      }
    `
  )

  return site.siteMetadata
}
