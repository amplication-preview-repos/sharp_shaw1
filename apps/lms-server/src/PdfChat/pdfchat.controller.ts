import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PdfChatService } from "./pdfchat.service";

@swagger.ApiTags("pdfChats")
@common.Controller("pdfChats")
export class PdfChatController {
  constructor(protected readonly service: PdfChatService) {}
}
