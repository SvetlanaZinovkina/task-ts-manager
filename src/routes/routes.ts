const routes = {
  mainPage: (): string => '/',
  createNote: (): string => '/create/note',
  getNote: (id: string): string => `/note/${id}`,
  editNote: (id: string): string => `/note/edit/${id}`,
  deleteNote: (id: string): string => `/note/${id}`,
};

export default routes;
