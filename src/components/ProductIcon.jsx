import React from 'react';
import { 
  Smartphone, 
  Watch, 
  Laptop, 
  Tv, 
  Camera, 
  Headphones, 
  Wifi,
  Radio,
  PenTool
} from 'lucide-react';

const ProductIcon = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'smartphone':
    case 'mobile':
      return <Smartphone />;
    case 'watch':
      return <Watch />;
    case 'laptop':
      return <Laptop />;
    case 'tv':
      return <Tv />;
    case 'camera':
      return <Camera />;
    case 'headphones':
    case 'ear pods':
      return <Headphones />;
    case 'wireless charger':
      return <Wifi />;
    case 'perfume':
      return <Radio />;
    case 'touch':
      return <PenTool />;
    default:
      return <Smartphone />;
  }
};

export default ProductIcon;