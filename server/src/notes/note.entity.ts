export enum NoteStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export class Note {
  id: string;
  title: string;
  content: string;
  status: NoteStatus;
}
