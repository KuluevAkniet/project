import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name:  'dn7f6mlob',
      api_key: '141422768613622',
      api_secret: 'lA7POHUEwmvuLFdd8Z9FUp1sVk4',
    });
  },
};