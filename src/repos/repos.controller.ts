import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { ReposService } from './repos.service';
import { CurrentUser } from '../common/dtos/current-user.decorator'
import { GetScoreListDto, ScoreDtoBuilder } from './dtos/score.dto';
import { CommonResponseDto } from 'src/common/dtos/common-response.dto';


@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

    //교수자만 가능
  @Get(':id')
  async getScores(@Param('id', ParseIntPipe) id: number) {
    const scores = await this.reposService.getScoreList(id)
        const contents = scores.map((score) => {
      return new ScoreDtoBuilder().setScoreInfo(score).build()
        })

        return new CommonResponseDto(new GetScoreListDto(contents))
    }

    //교수자만 가능
    @Post(':id')
    async createRepo(@Param('id') id: string) {
        return newRepoUrl = await this.reposService.createNewRepo(id);
    }

    @Post(':id')
    async getRepo(@Param('id', ParseIntPipe) id: number, @Req() req) {

    }
}
