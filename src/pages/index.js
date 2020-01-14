import React from "react"
import { graphql } from 'gatsby'

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"


export default ({ data }) => {
    console.log(data)
    return (
        <PrimaryLayout column="col-xs-6">

            {
                data.allWordpressPost.nodes.map((node) => (
                    <Post 
                    title={node.title}
                    excerpt={node.excerpt}
                    image={node.featured_media.source_url}
                    alt={node.featured_media.slug}
                    readMore={node.slug}
                    />
                ))
            }                             
        </PrimaryLayout>   
    )
}
    

export const query = graphql`
{
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
          slug
        }
      }
    }
  }
`