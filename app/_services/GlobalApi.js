const { gql, request } = require("graphql-request")

const MASTER_URL = process.env.NEXT_PUBLIC_MASTER_URL


const getCategory = async () => {
    const query = gql`
    query Category {
  categories {
    bgcolor {
      hex
    }
    id
    name
    icon {
      url
    }
  }
}`

    const result = await request(MASTER_URL, query)

    return result

}

export default {
    getCategory
}