import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { ReposService } from './repos.service'
import { Roles } from 'src/common/decorator/roles.decorator'
import { Role } from '@prisma/client'
@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Roles(Role.Tutor)
  @Post(':repoName')
  async createRepo(@Param('repoName') repoName: string) {
    return await this.reposService.createNewRepo(repoName)
  }

  @Roles(Role.Tutor)
  @Put(':id') //id: userId
  async addUserToRepo(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return await this.reposService.addUserToRepo(id, body)
  }

  @Get()
  async getAllRepos() {
    return await this.reposService.getAllRepos()
  }
}
