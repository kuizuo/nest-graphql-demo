import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  @Field()
  title: string;

  @Field()
  content: string;
}
