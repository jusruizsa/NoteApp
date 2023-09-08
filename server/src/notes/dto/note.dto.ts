import { NoteStatus } from '../note.entity';
import { IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';

export class createNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  content: string;
}

export class updateNoteDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  content?: string;
  @IsString()
  @IsOptional()
  @IsIn([NoteStatus.ACTIVE, NoteStatus.ARCHIVED])
  status?: NoteStatus;
}
