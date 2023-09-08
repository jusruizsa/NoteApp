import { Injectable } from '@nestjs/common';
import { Note, NoteStatus } from './note.entity';
import { v4 } from 'uuid';
import { updateNoteDto } from './dto/note.dto';

@Injectable()
export class NotesService {
  private notes: Note[] = [
    {
      id: '1',
      title: 'first note',
      content: 'this is my first note',
      status: NoteStatus.ACTIVE,
    },
  ];
  getAllNotes() {
    return this.notes;
  }
  createNote(title: string, content: string) {
    const note: Note = {
      id: v4(),
      title: 'Second note',
      content: 'This is my second note',
      status: NoteStatus.ACTIVE,
    };
    this.notes.push(note);
    return note;
  }
  getNoteById(id: string) {
    return this.notes.find((note) => note.id === id);
  }
  updateNote(id: string, updateFields: updateNoteDto) {
    const note = this.getNoteById(id);
    const newNote = Object.assign(note, updateFields);
    this.notes = this.notes.map((note) => (note.id === id ? newNote : note));
    return newNote;
  }
  deletenote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
