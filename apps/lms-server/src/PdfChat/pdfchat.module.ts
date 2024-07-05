import { Module } from "@nestjs/common";
import { PdfChatService } from "./pdfchat.service";
import { PdfChatController } from "./pdfchat.controller";
import { PdfChatResolver } from "./pdfchat.resolver";

@Module({
  controllers: [PdfChatController],
  providers: [PdfChatService, PdfChatResolver],
  exports: [PdfChatService],
})
export class PdfChatModule {}
