import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { createNoteDto, updateNoteDto } from './dto/note.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  helloworld() {
    return this.notesService.getAllNotes();
  }

  @Post()
  createNote(@Body() newNote: createNoteDto) {
    return this.notesService.createNote(newNote.title, newNote.content);
  }

  @Patch(':id')
  updateNote(@Param('id') id: string, @Body() updateFields: updateNoteDto) {
    return this.notesService.updateNote(id, updateFields);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: string) {
    this.notesService.deletenote(id);
  }
}
