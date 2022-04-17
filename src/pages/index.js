import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="허예지다" />
      <Layout>
        <BannerModule
          title="WELCOME"
          subTitle="개발 / 사진 / 음악 위주의 끄적끄적 공간"
        />
        <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="사진첩 from heoyejida"
          introduction="곧 업뎃예정"
        />
        <LatestPosts
          title="음악추천 from heoyejida"
          introduction="주로 브릿팝 좋아하고요, chill-hop도 자주 듣습니다."
        />
      </Layout>
    </>
  )
}

export default Index
