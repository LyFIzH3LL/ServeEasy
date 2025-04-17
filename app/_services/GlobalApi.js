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





const getAllBusinessLists = async () => {
  const query = gql`
query BusinessList {
businessLists {
  about
  address
  category {
    name
  }
  contactPerson
  email
  images {
    url
  }
  id
  name
}
}`


  const result = await request(MASTER_URL, query)

  return result


}




const getBusinessByCategory = async (category) => {


  const query = gql`
query MyQuery {
businessLists(where: {category: {name: "`+ category + `"}}) {
  about
  address
  category {
    name
  }
  contactPerson
  email
  id
  name
  images {
    url
  }
}
}`




  const result = await request(MASTER_URL, query)

  return result




}



const getBusinessById = async (id) => {

  const query = gql`
  query GetBusinessById {
  businessList(where: {id: "`+ id + `"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`


  const result = await request(MASTER_URL, query)

  return result



}




export default {
  getCategory,
  getAllBusinessLists,
  getBusinessByCategory,
  getBusinessById
}