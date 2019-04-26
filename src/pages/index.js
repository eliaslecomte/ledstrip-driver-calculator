import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CalculateWatts from "../components/calculate-watts";

const IndexPage = () => (
  <Layout>
    <SEO
      title="LED Strip Driver Calculator"
      keywords={[`ledstrip`, 'driver', 'calculator', `gatsby`, 'ws2812', 'smd5050']}
    />
    <CalculateWatts />
  </Layout>
)

export default IndexPage
