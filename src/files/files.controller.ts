import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { ApiUseTags, ApiConsumes, ApiImplicitFile, ApiImplicitParam } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { generateFileName, isImage } from './utils';

@ApiUseTags('files')
@Controller('files')
export class FilesController {
  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: generateFileName,
    }),
    fileFilter: isImage,
  }))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({ name: 'image', required: true })
  async uploadFile(@UploadedFile() file) {
    return file.filename;
  }

  @ApiImplicitParam({ name: 'imgpath' })
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
}
