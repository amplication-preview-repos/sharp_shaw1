/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPersonalAssistanceAssistanceType } from "./EnumPersonalAssistanceAssistanceType";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PersonalAssistanceUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumPersonalAssistanceAssistanceType,
  })
  @IsEnum(EnumPersonalAssistanceAssistanceType)
  @IsOptional()
  @Field(() => EnumPersonalAssistanceAssistanceType, {
    nullable: true,
  })
  assistanceType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details?: string | null;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput | null;
}

export { PersonalAssistanceUpdateInput as PersonalAssistanceUpdateInput };
