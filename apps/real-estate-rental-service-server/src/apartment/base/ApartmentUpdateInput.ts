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
import {
  IsBoolean,
  IsOptional,
  IsInt,
  IsString,
  IsNumber,
  IsEnum,
} from "class-validator";
import { EnumApartmentPropertyType } from "./EnumApartmentPropertyType";
import { EnumApartmentRentOrSale } from "./EnumApartmentRentOrSale";
import { EnumApartmentResidentialOrCommercial } from "./EnumApartmentResidentialOrCommercial";

@InputType()
class ApartmentUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  available?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bedrooms?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  companyOrAgent?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  furnishing?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  owner?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  propertyFeatures?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumApartmentPropertyType,
  })
  @IsEnum(EnumApartmentPropertyType)
  @IsOptional()
  @Field(() => EnumApartmentPropertyType, {
    nullable: true,
  })
  propertyType?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumApartmentRentOrSale,
  })
  @IsEnum(EnumApartmentRentOrSale)
  @IsOptional()
  @Field(() => EnumApartmentRentOrSale, {
    nullable: true,
  })
  rentOrSale?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumApartmentResidentialOrCommercial,
  })
  @IsEnum(EnumApartmentResidentialOrCommercial)
  @IsOptional()
  @Field(() => EnumApartmentResidentialOrCommercial, {
    nullable: true,
  })
  residentialOrCommercial?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ApartmentUpdateInput as ApartmentUpdateInput };
