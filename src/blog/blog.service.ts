import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  create(createBlogInput: CreateBlogInput) {
    return this.blogRepository.save(createBlogInput);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: number) {
    return this.blogRepository.findOneBy({ id });
  }

  async update(id: number, updateBlogInput: UpdateBlogInput) {
    const blog = await this.blogRepository.findOneBy({ id });
    const item = { ...blog, ...updateBlogInput };
    return this.blogRepository.save(item);
  }

  async remove(id: number) {
    const blog = await this.blogRepository.findOneBy({ id });

    return this.blogRepository.remove(blog);
  }
}
