// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateS3Object = `subscription OnCreateS3Object {
  onCreateS3Object {
    bucket
    region
    key
  }
}
`;
export const onUpdateS3Object = `subscription OnUpdateS3Object {
  onUpdateS3Object {
    bucket
    region
    key
  }
}
`;
export const onDeleteS3Object = `subscription OnDeleteS3Object {
  onDeleteS3Object {
    bucket
    region
    key
  }
}
`;
export const onCreateCompany = `subscription OnCreateCompany {
  onCreateCompany {
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
export const onUpdateCompany = `subscription OnUpdateCompany {
  onUpdateCompany {
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
export const onDeleteCompany = `subscription OnDeleteCompany {
  onDeleteCompany {
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
export const onCreateBlockchainBlock = `subscription OnCreateBlockchainBlock {
  onCreateBlockchainBlock {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const onUpdateBlockchainBlock = `subscription OnUpdateBlockchainBlock {
  onUpdateBlockchainBlock {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const onDeleteBlockchainBlock = `subscription OnDeleteBlockchainBlock {
  onDeleteBlockchainBlock {
    id
    marketplaceSignatureOnDeal
    previousHashOnDeal
    hashOnDeal
    nonce
  }
}
`;
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
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
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
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
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
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
export const onCreateOption = `subscription OnCreateOption {
  onCreateOption {
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
export const onUpdateOption = `subscription OnUpdateOption {
  onUpdateOption {
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
export const onDeleteOption = `subscription OnDeleteOption {
  onDeleteOption {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateProductFeedback = `subscription OnCreateProductFeedback {
  onCreateProductFeedback {
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
export const onUpdateProductFeedback = `subscription OnUpdateProductFeedback {
  onUpdateProductFeedback {
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
export const onDeleteProductFeedback = `subscription OnDeleteProductFeedback {
  onDeleteProductFeedback {
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
export const onCreateCreditSaleRule = `subscription OnCreateCreditSaleRule {
  onCreateCreditSaleRule {
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
export const onUpdateCreditSaleRule = `subscription OnUpdateCreditSaleRule {
  onUpdateCreditSaleRule {
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
export const onDeleteCreditSaleRule = `subscription OnDeleteCreditSaleRule {
  onDeleteCreditSaleRule {
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
export const onCreateBestOptionRule = `subscription OnCreateBestOptionRule {
  onCreateBestOptionRule {
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
export const onUpdateBestOptionRule = `subscription OnUpdateBestOptionRule {
  onUpdateBestOptionRule {
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
export const onDeleteBestOptionRule = `subscription OnDeleteBestOptionRule {
  onDeleteBestOptionRule {
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
