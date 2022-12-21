import { Injectable } from '@nestjs/common';
import { PdfHelper } from 'src/shared/pdf-generator';
import { FileData } from './dto/create-create-document-qr.dto';
import * as QRCode from 'qrcode'
@Injectable()
export class CreateDocumentQrService {

  private pdfHelper: PdfHelper;

  async generatePdf(info: FileData): Promise<any> {
    return this.pdfHelper.createPDF(info);
  }

  async generateQr(){
    try {
      console.log(await QRCode.toDataURL('www.google.com'))
    } catch (err) {
      console.error(err)
    }
  }
  

}
