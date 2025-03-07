import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CandidatesService } from './candidates.service';
import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('candidates')
@ApiTags('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}
  @Post()
  @ApiCreatedResponse({ type: Candidate })
  create(@Body() dto: CreateCandidateDto) {
    return this.candidatesService.create(dto);
  }

  @UseGuards(JwtGuard)
  @Get()
  @ApiOkResponse({ type: Candidate, isArray: true })
  findAll() {
    return this.candidatesService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOkResponse({ type: Candidate })
  findOne(@Param('id') id: string) {
    return this.candidatesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Candidate })
  update(@Param('id') id: string, @Body() dto: UpdateCandidateDto) {
    return this.candidatesService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: Candidate })
  remove(@Param('id') id: string) {
    return this.candidatesService.remove(id);
  }
}
