'use client';

import React from 'react';
import ProductList from '@/components/Products/ProductList';
import ProductCard from '@/components/Products/ProductCard';
import ProductDetail from '@/components/Products/ProductDetail';
import ProductFeatures from '@/components/Products/ProductFeatures';
import ProductReviews from '@/components/Products/ProductReviews';
import ProductDescription from '@/components/Products/ProductDescription';
import ProductGallery from '@/components/Products/ProductGallery';
import ProductPricing from '@/components/Products/ProductPricing';
import ProductQuantitySelector from '@/components/Products/ProductQuantitySelector';
import ProductAddToCartButton from '@/components/Products/ProductAddToCartButton';
import ProductRelatedItems from '@/components/Products/ProductRelatedItems';
import ProductSpecifications from '@/components/Products/ProductSpecifications';
import ProductFAQs from '@/components/Products/ProductFAQs';
import ProductWarranty from '@/components/Products/ProductWarranty';
import ProductShippingInfo from '@/components/Products/ProductShippingInfo';
import ProductSizeGuide from '@/components/Products/ProductSizeGuide';
import ProductHome from '@/components/Products/ProductHome';

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-20 space-y-12">
      <ProductHome/>
      <ProductGallery />
      <ProductDetail />
      <ProductPricing />
      <ProductQuantitySelector />
      <ProductAddToCartButton />
      <ProductFeatures />
      <ProductDescription />
      <ProductSpecifications />
      <ProductSizeGuide />
      <ProductShippingInfo />
      <ProductWarranty />
      <ProductFAQs />
      <ProductReviews />
      <ProductRelatedItems />
      <ProductList />
      <ProductCard />
    </main>
  );
}
