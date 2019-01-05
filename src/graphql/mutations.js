// eslint-disable
// this is an auto generated file. This will be overwritten

export const createS3Object = `mutation CreateS3Object($input: CreateS3ObjectInput!) {
  createS3Object(input: $input) {
    bucket
    region
    key
  }
}
`;
export const updateS3Object = `mutation UpdateS3Object($input: UpdateS3ObjectInput!) {
  updateS3Object(input: $input) {
    bucket
    region
    key
  }
}
`;
export const deleteS3Object = `mutation DeleteS3Object($input: DeleteS3ObjectInput!) {
  deleteS3Object(input: $input) {
    bucket
    region
    key
  }
}
`;
export const createCompany = `mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
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
export const updateCompany = `mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input) {
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
export const deleteCompany = `mutation DeleteCompany($input: DeleteCompanyInput!) {
  deleteCompany(input: $input) {
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
export const createBlockchainBlock = `mutation CreateBlockchainBlock($input: CreateBlockchainBlockInput!) {
  createBlockchainBlock(input: $input) {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const updateBlockchainBlock = `mutation UpdateBlockchainBlock($input: UpdateBlockchainBlockInput!) {
  updateBlockchainBlock(input: $input) {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const deleteBlockchainBlock = `mutation DeleteBlockchainBlock($input: DeleteBlockchainBlockInput!) {
  deleteBlockchainBlock(input: $input) {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
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
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
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
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
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
export const createOption = `mutation CreateOption($input: CreateOptionInput!) {
  createOption(input: $input) {
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
export const updateOption = `mutation UpdateOption($input: UpdateOptionInput!) {
  updateOption(input: $input) {
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
export const deleteOption = `mutation DeleteOption($input: DeleteOptionInput!) {
  deleteOption(input: $input) {
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
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
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
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
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
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
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
export const createProductFeedback = `mutation CreateProductFeedback($input: CreateProductFeedbackInput!) {
  createProductFeedback(input: $input) {
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
export const updateProductFeedback = `mutation UpdateProductFeedback($input: UpdateProductFeedbackInput!) {
  updateProductFeedback(input: $input) {
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
export const deleteProductFeedback = `mutation DeleteProductFeedback($input: DeleteProductFeedbackInput!) {
  deleteProductFeedback(input: $input) {
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
export const createCreditSaleRule = `mutation CreateCreditSaleRule($input: CreateCreditSaleRuleInput!) {
  createCreditSaleRule(input: $input) {
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
export const updateCreditSaleRule = `mutation UpdateCreditSaleRule($input: UpdateCreditSaleRuleInput!) {
  updateCreditSaleRule(input: $input) {
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
export const deleteCreditSaleRule = `mutation DeleteCreditSaleRule($input: DeleteCreditSaleRuleInput!) {
  deleteCreditSaleRule(input: $input) {
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
export const createBestOptionRule = `mutation CreateBestOptionRule($input: CreateBestOptionRuleInput!) {
  createBestOptionRule(input: $input) {
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
export const updateBestOptionRule = `mutation UpdateBestOptionRule($input: UpdateBestOptionRuleInput!) {
  updateBestOptionRule(input: $input) {
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
export const deleteBestOptionRule = `mutation DeleteBestOptionRule($input: DeleteBestOptionRuleInput!) {
  deleteBestOptionRule(input: $input) {
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
