import * as graphql from "@nestjs/graphql";
import { PdfChatService } from "./pdfchat.service";

export class PdfChatResolver {
  constructor(protected readonly service: PdfChatService) {}
}
