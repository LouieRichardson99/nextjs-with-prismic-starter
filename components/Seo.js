import { NextSeo } from "next-seo"

export const Seo = ({ metaTitle, metaDescription, metaImage, url }) => {
  const absoluteUrl = `https://example.com${url ? url : ""}` // TODO: Change URL
  const siteName = "Example Site Name" // TODO: Change site name
  const twitter = {
    handle: "@example", // TODO: Change Twitter handle
    site: "@example", // TODO: Change Twitter site
  }

  const seoConfig = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      url: absoluteUrl,
      title: metaTitle,
      type: "website",
      description: metaDescription,
      images: [
        {
          url: metaImage?.url || "",
          alt: metaImage?.url || "",
          width: metaImage?.dimensions?.width || "",
          height: metaImage?.dimensions?.height || "",
        },
      ],
      site_name: siteName,
    },

    twitter: {
      handle: twitter.handle,
      site: twitter.site,
      cardType: "summary_large_image",
    },
    additionalLinkTags: [{ rel: "icon", href: "/favicon.png" }], // TODO: Make sure favicon url is correct
  }

  return <NextSeo {...seoConfig} />
}
