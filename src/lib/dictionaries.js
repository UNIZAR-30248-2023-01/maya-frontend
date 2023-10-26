// COMMON: Add here the dictionaries for the common components

export const navigation = {
  es: {
    overview: 'resumen',
    projects: 'proyectos',
    teams: 'equipos',
    staff: 'personal',
    workSpaces: 'lugares de trabajo',
    'in-and-outs': 'fichajes',
    tickets: 'tickets'
  },
  en: {
    overview: 'overview',
    projects: 'projects',
    teams: 'teams',
    staff: 'staff',
    workSpaces: 'workspaces',
    'in-and-outs': 'in-and-outs',
    tickets: 'tickets'
  }
}

export const search = {
  es: {
    'not-found': 'No hay resultados',
    'search-placeholder': 'Buscar...'
  },
  en: {
    'not-found': 'No results',
    'search-placeholder': 'Search...'
  }
}

export const table = {
  es: {
    'selected-rows': (selected, total) => `${selected} de ${total} fila(s) seleccionadas.`,
    'rows-per-page': 'Filas por página:',
    'page-of': (page, pages) => `Página ${page} de ${pages}`,
    'first-page': 'Ir a la primera página',
    'last-page': 'Ir a la última página',
    'next-page': 'Ir a la página siguiente',
    'previous-page': 'Ir a la página anterior',
    'clear-filters': 'Limpiar'
  },
  en: {
    'selected-rows': (selected, total) => `${selected} of ${total} row(s) selected.`,
    'rows-per-page': 'Rows per page:',
    'page-of': (page, pages) => `Page ${page} of ${pages}`,
    'first-page': 'Go to first page',
    'last-page': 'Go to last page',
    'next-page': 'Go to next page',
    'previous-page': 'Go to previous page',
    'clear-filters': 'Clear'
  }
}

// PAGES: Add here the dictionaries for each page

export const projects = {
  es: {
    'name-column': 'Nombre',
    'description-column': 'Descripción',
    status: 'Estado',
    visibility: 'Visibilidad',
    open: 'Abierto',
    closed: 'Cerrado',
    public: 'público',
    private: 'privado',
    filter: 'Filtrar proyectos',
    'new-project': 'nuevo proyecto',
    'new-table': 'nueva tabla',
    'new-table-description': 'Los proyectos son una herramienta personalizable y flexible para planificar y realizar un seguimiento de su trabajo.',
    'new-table-name': 'Nombre',
    'new-table-desc': 'Descripción',
    'new-table-name-placeholder': 'El proyecto de John Doe',
    'new-table-desc-placeholder': 'Una breve descripción sobre tu proyecto.',
    'new-table-create': 'Crear',
    'toast-loading': 'Estamos creando tu proyecto. Por favor, espera un momento.',
    'toast-success': 'Tu proyecto se ha creado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'name-column': 'Name',
    'description-column': 'Description',
    status: 'Status',
    visibility: 'Visibility',
    open: 'Open',
    closed: 'Close',
    public: 'public',
    private: 'private',
    filter: 'Filter projects',
    'new-project': 'new project',
    'new-table': 'new table',
    'new-table-description': 'Projects are a customizable, flexible tool for planning and tracking your work.',
    'new-table-name': 'Name',
    'new-table-desc': 'Short description',
    'new-table-name-placeholder': 'John Doe&apos; project',
    'new-table-desc-placeholder': 'A short description about this project.',
    'new-table-create': 'Create',
    'toast-loading': 'We are creating your project. Please wait a moment.',
    'toast-success': 'Your project has been created successfully.',
    'toast-error': 'Something went wrong. Please try again.'
  }
}

export const tasks = {
  es: {
    'tasks-column': 'Tarea',
    'assignees-column': 'Asignados',
    filter: 'Filtrar por tarea',
    assignees: 'Asignados',
    label: 'Etiqueta',
    status: 'Estado',
    new: 'nueva',
    block: 'bloqueada',
    done: 'completada',
    'in progress': 'en progreso',
    enhancement: 'mejora',
    'data model': 'modelo de datos',
    documentation: 'documentación',
    bug: 'error',
    testing: 'test',
    ui: 'UI',
    'new-task': 'nueva tarea',
    'new-table-description':
      'Las tareas son una forma de comunicar lo que vas a hacer al resto de tu equipo.',
    'new-task-create': 'Crear',
    'name-column': 'Nombre',
    'description-column': 'Descripción',
    'label-column': 'Etiqueta',
    'status-column': 'Estado',
    'estimated-column': 'Estimado',
    'end-date-column': 'Fecha de finalización',
    'new-task-name-placeholder': 'Tarea inicial',
    'new-task-description-placeholder': 'Introduce la descripción de tu tarea',
    'new-task-label-placeholder': '---',
    'new-task-status-placeholder': '---',
    'new-task-estimated-placeholder': 'Tiempo estimado de la tarea en horas'
  },
  en: {
    'tasks-column': 'Tasks',
    'assignees-column': 'Assignees',
    filter: 'Filter by task',
    assignees: 'Assignees',
    label: 'Label',
    status: 'Status',
    new: 'new',
    block: 'block',
    done: 'done',
    'in progress': 'in progress',
    enhancement: 'enhancement',
    'data model': 'data model',
    documentation: 'vdocumentation',
    bug: 'bug',
    testing: 'testing',
    ui: 'UI',
    'new-task': 'new task',
    'new-table-description':
      'Tasks are a way of communicating what you are going to do to the rest of your team.',
    'new-task-create': 'Create',
    'name-column': 'Name',
    'description-column': 'Description',
    'label-column': 'Label',
    'status-column': 'Status',
    'estimated-column': 'Estimated time',
    'end-date-column': 'Deadline',
    'new-task-name-placeholder': 'Initial task',
    'new-task-description-placeholder': 'Type the description of your task',
    'new-task-label-placeholder': '---',
    'new-task-status-placeholder': '---',
    'new-task-estimated-placeholder': 'Estimate time in hours'
  }
}

export const people = {
  es: {
    'member-column': 'Miembros',
    filter: 'Filtrar por nombre de usuario',
    role: 'Roles',
    'new-person': 'reclutar',
    'new-table-description': 'Añade personas a tu proyecto para mejorar tu equipo.',
    'new-person-create': 'invitar'
  },
  en: {
    'member-column': 'Members',
    filter: 'Filter people by username',
    role: 'Roles',
    'new-person': 'recruit',
    'new-table-description': 'Add people to your project to improve your team.',
    'new-person-create': 'invite'
  }
}

export const teams = {
  es: {
    'team-column': 'Equipos',
    'member-column': 'Miembros',
    filter: 'Filtrar por nombre de equipo',
    'new-team': 'nuevo equipo',
    'new-table-description': 'Los equipos son una forma de organizar a las personas que trabajan en tu proyecto.',
    'new-team-create': 'Crear'
  },
  en: {
    'team-column': 'Teams',
    'member-column': 'Members',
    filter: 'Filter by team name',
    'new-team': 'new team',
    'new-table-description': 'Teams are a way of organizing the people working on your project.',
    'new-team-create': 'Create'
  }
}
