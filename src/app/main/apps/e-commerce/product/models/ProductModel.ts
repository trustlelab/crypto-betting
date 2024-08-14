import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { EcommerceProduct } from '../../ECommerceApi';

/**
 * The product model.
 */
const ProductModel = (data: PartialDeep<EcommerceProduct>) =>
	_.defaults(data || {}, {
		id: _.uniqueId('product-'),
		name: '',
		handle: '',
		description: '',
		categories: [],
		tags: [],
		featuredImageId: '',
		images: [],
		priceTaxExcl: 0,
		priceTaxIncl: 0,
		taxRate: 0,
		comparedPrice: 0,
		quantity: 0,
		sku: '',
		width: '',
		height: '',
		depth: '',
		weight: '',
		extraShippingFee: 0,
		price: '',
		active: true,
		image: '',
		total: ''
	});

export default ProductModel;
