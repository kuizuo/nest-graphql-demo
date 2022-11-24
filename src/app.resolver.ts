import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String) // 定义一个查询,并且返回字符类型
  hello() {
    return 'hello world';
  }
}
