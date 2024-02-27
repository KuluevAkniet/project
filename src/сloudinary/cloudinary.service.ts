import { v2, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { Injectable } from '@nestjs/common';
import { Readable } from 'typeorm/platform/PlatformTools';

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });

      toStream(file.buffer).pipe(upload);
    });
  }
}
