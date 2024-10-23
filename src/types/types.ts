export type Note = {
  id: string;
  title: string;
  content: string;
  tag?: string;
  createdAt: number;
  updatedAt: number;
};

export type Tag = {
  id: string;
  name: string;
};

export interface State {
  notes: {
    notes: Note[];
    tags: Tag[];
    filter: string;
    sortBy: string;
  };
}
