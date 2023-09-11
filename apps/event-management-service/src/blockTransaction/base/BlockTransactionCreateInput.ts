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
import { BlockWhereUniqueInput } from "../../block/base/BlockWhereUniqueInput";
import { ValidateNested, IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

@InputType()
class BlockTransactionCreateInput {
  @ApiProperty({
    required: true,
    type: () => BlockWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlockWhereUniqueInput)
  @Field(() => BlockWhereUniqueInput)
  block!: BlockWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  index?: number | null;

  @ApiProperty({
    required: true,
    type: () => TransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionWhereUniqueInput)
  @Field(() => TransactionWhereUniqueInput)
  transaction!: TransactionWhereUniqueInput;
}

export { BlockTransactionCreateInput as BlockTransactionCreateInput };