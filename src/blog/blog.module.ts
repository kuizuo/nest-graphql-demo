import { Module } from '@nestjs/common';
import { Blog } from './entities/blog.entity';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  providers: [BlogResolver, BlogService],
})
export class BlogModule {}
