// eslint-disable
// this is an auto generated file. This will be overwritten

export const getS3Object = `query GetS3Object($id: ID!) {
  getS3Object(id: $id) {
    bucket
    region
    key
  }
}
`;
export const listS3Objects = `query ListS3Objects(
  $filter: ModelS3ObjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      bucket
      region
      key
    }
    nextToken
  }
}
`;
export const getCompany = `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    locationZipCode
    creditRating
    yearsOfOperation
    orders {
      items {
        id
        volume
        time2deliver
      }
      nextToken
    }
    optionsOffered {
      items {
        id
      }
      nextToken
    }
    feedbacksOnProducedProduct {
      items {
        id
        product
        orderNo
        productRating
        author
      }
      nextToken
    }
  }
}
`;
export const listCompanys = `query ListCompanys(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBlockchainBlock = `query GetBlockchainBlock($id: ID!) {
  getBlockchainBlock(id: $id) {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const listBlockchainBlocks = `query ListBlockchainBlocks(
  $filter: ModelBlockchainBlockFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlockchainBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      marketplaceSignatureOnDeal
      previousHashOnDeal
      hashOnDeal
      nonce
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    price
    offeredBy
    optionOffered {
      id
      status
      products {
        nextToken
      }
      offeredBy {
        id
        name
        locationZipCode
        yearsOfOperation
      }
    }
    productImage {
      bucket
      region
      key
    }
    available
    orderedVolume
    productRating
    status
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
      offeredBy
      optionOffered {
        id
      }
      productImage {
        bucket
        region
        key
      }
      available
      orderedVolume
      productRating
      status
    }
    nextToken
  }
}
`;
export const getOption = `query GetOption($id: ID!) {
  getOption(id: $id) {
    id
    status
    products {
      items {
        id
        name
        price
        offeredBy
        available
        orderedVolume
        productRating
      }
      nextToken
    }
    offeredBy {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
  }
}
`;
export const listOptions = `query ListOptions(
  $filter: ModelOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      products {
        nextToken
      }
      offeredBy {
        id
        name
        locationZipCode
        yearsOfOperation
      }
    }
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    orderingCo {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
    optionDetails {
      id
      status
      products {
        nextToken
      }
      offeredBy {
        id
        name
        locationZipCode
        yearsOfOperation
      }
    }
    status
    volume
    time2deliver
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderingCo {
        id
        name
        locationZipCode
        yearsOfOperation
      }
      optionDetails {
        id
      }
      status
      volume
      time2deliver
    }
    nextToken
  }
}
`;
export const getProductFeedback = `query GetProductFeedback($id: ID!) {
  getProductFeedback(id: $id) {
    id
    product
    orderNo
    productRating
    author
    producer {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
  }
}
`;
export const listProductFeedbacks = `query ListProductFeedbacks(
  $filter: ModelProductFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      product
      orderNo
      productRating
      author
      producer {
        id
        name
        locationZipCode
        yearsOfOperation
      }
    }
    nextToken
  }
}
`;
export const getCreditSaleRule = `query GetCreditSaleRule($id: ID!) {
  getCreditSaleRule(id: $id) {
    id
    setBy {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
    limitForAAA
    limitForAA
    limitForA
    limitForBBB
    limitForBB
    limitForB
  }
}
`;
export const listCreditSaleRules = `query ListCreditSaleRules(
  $filter: ModelCreditSaleRuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listCreditSaleRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      setBy {
        id
        name
        locationZipCode
        yearsOfOperation
      }
      limitForAAA
      limitForAA
      limitForA
      limitForBBB
      limitForBB
      limitForB
    }
    nextToken
  }
}
`;
export const getBestOptionRule = `query GetBestOptionRule($id: ID!) {
  getBestOptionRule(id: $id) {
    id
    setBy {
      id
      name
      locationZipCode
      creditRating
      yearsOfOperation
      orders {
        nextToken
      }
      optionsOffered {
        nextToken
      }
      feedbacksOnProducedProduct {
        nextToken
      }
    }
    bestOptionType
    minProductRating
  }
}
`;
export const listBestOptionRules = `query ListBestOptionRules(
  $filter: ModelBestOptionRuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listBestOptionRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      setBy {
        id
        name
        locationZipCode
        yearsOfOperation
      }
      bestOptionType
      minProductRating
    }
    nextToken
  }
}
`;
