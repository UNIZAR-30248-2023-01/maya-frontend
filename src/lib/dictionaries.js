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

export const table = {
  es: {
    'selected-rows': (selected, total) => `${selected} de ${total} fila(s) seleccionadas.`,
    'rows-per-page': 'Filas por página:',
    'page-of': (page, pages) => `Página ${page} de ${pages}`,
    'first-page': 'Ir a la primera página',
    'last-page': 'Ir a la última página',
    'next-page': 'Ir a la página siguiente',
    'previous-page': 'Ir a la página anterior',
    'clear-filters': 'Limpiar',
    'no-results': 'No se han encontrado resultados'
  },
  en: {
    'selected-rows': (selected, total) => `${selected} of ${total} row(s) selected.`,
    'rows-per-page': 'Rows per page:',
    'page-of': (page, pages) => `Page ${page} of ${pages}`,
    'first-page': 'Go to first page',
    'last-page': 'Go to last page',
    'next-page': 'Go to next page',
    'previous-page': 'Go to previous page',
    'clear-filters': 'Clear',
    'no-results': 'No results found'
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
    'label-column': 'Etiqueta',
    'status-column': 'Estado',
    'estimated-column': 'Estimado',
    'end-date-column': 'Fecha de finalización',
    'description-column': 'Descripción',
    'new-task-desc-placeholder': 'Ayuda a tu equipo a entender lo que quieres hacer con esta tarea.',
    filter: 'Filtrar por tarea',
    assignees: 'Asignados',
    label: 'Etiqueta',
    status: 'Estado',
    new: 'nueva',
    block: 'bloqueada',
    done: 'completada',
    'in progress': 'en progreso',
    'new-task': 'nueva tarea',
    'new-table-description': 'Las tareas son una forma de comunicar lo que vas a hacer al resto de tu equipo.',
    'new-task-create': 'Crear',
    'new-table-name-placeholder': 'Comprar leche',
    'end-date-placeholder': 'Fecha de finalización',
    'toast-loading': 'Estamos creando tu tarea. Por favor, espera un momento.',
    'toast-success': 'Tu tarea se ha creado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'tasks-column': 'Tasks',
    'assignees-column': 'Assignees',
    'label-column': 'Label',
    'status-column': 'Status',
    'estimated-column': 'Estimated',
    'end-date-column': 'End date',
    'description-column': 'Description',
    'new-task-desc-placeholder': 'Help your team understand what you want to do with this task.',
    filter: 'Filter by task',
    assignees: 'Assignees',
    label: 'Label',
    status: 'Status',
    new: 'new',
    block: 'block',
    done: 'done',
    'in progress': 'in progress',
    'new-task': 'new task',
    'new-table-description': 'Tasks are a way of communicating what you are going to do to the rest of your team.',
    'new-task-create': 'Create',
    'new-table-name-placeholder': 'Buy milk',
    'end-date-placeholder': 'End date',
    'toast-loading': 'We are creating your tasks. Please wait a moment.',
    'toast-success': 'Your tasks has been created successfully.',
    'toast-error': 'Something went wrong. Please try again.'
  }
}

export const people = {
  es: {
    'member-column': 'Miembros',
    filter: 'Filtrar por nombre de usuario',
    role: 'Roles',
    'new-person': 'reclutar',
    'new-table-description': 'Añade personas a tu proyecto para mejorar tu equipo.',
    'new-person-create': 'invitar',
    'invite-member': 'Recluta personal',
    'invite-member-description': 'Añade miembros a tu proyecto para mejorar tu equipo.',
    invite: 'Añadir miembros',
    search: 'Buscar miembros',
    'invite-member-send': 'reclutar'
  },
  en: {
    'member-column': 'Members',
    filter: 'Filter people by username',
    role: 'Roles',
    'new-person': 'recruit',
    'new-table-description': 'Add people to your project to improve your team.',
    'new-person-create': 'invite',
    'invite-member': 'Recruit people',
    'invite-member-description': 'Add members to your project to improve your team.',
    invite: 'Add members',
    search: 'Search members',
    'invite-member-send': 'recruit'
  }
}

export const teams = {
  es: {
    'team-column': 'Equipos',
    'member-column': 'Miembros',
    'name-column': 'Nombre',
    'description-column': 'Descripción',
    'new-team-name-placeholder': 'Repartidores',
    'new-team-desc-placeholder': 'Ayuda a tu equipo a entender el propósito de este equipo',
    public: 'público',
    private: 'privado',
    filter: 'Filtrar por nombre de equipo',
    'new-team': 'nuevo equipo',
    'new-team-member-placeholder': 'Elige a tu equipo',
    'new-table-description': 'Los equipos son una forma de organizar a las personas que trabajan en tu proyecto.',
    'new-team-create': 'Crear',
    'toast-loading': 'Estamos creando tu equipo. Por favor, espera un momento.',
    'toast-success': 'Tu equipo se ha creado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'team-column': 'Teams',
    'member-column': 'Members',
    'name-column': 'Name',
    'description-column': 'Description',
    'new-team-name-placeholder': 'Delivery',
    'new-team-desc-placeholder': 'Help your team understand the purpose of this team',
    public: 'public',
    private: 'private',
    filter: 'Filter by team name',
    'new-team': 'new team',
    'new-team-member-placeholder': 'Choose your team',
    'new-table-description': 'Teams are a way of organizing the people working on your project.',
    'new-team-create': 'Create',
    'toast-loading': 'We are creating your team. Please wait a moment.',
    'toast-success': 'Your team has been created successfully.',
    'toast-error': 'Something went wrong. Please try again.'
  }
}

export const labels = {
  es: {
    enhancement: 'mejora',
    bug: 'error',
    documentation: 'documentación',
    duplicate: 'duplicado',
    'good first issue': 'buen primer problema',
    'help wanted': 'se necesita ayuda',
    invalid: 'inválido',
    question: 'pregunta',
    testing: 'pruebas',
    wontfix: 'no se arreglará'
  },
  en: {
    enhancement: 'enhancement',
    bug: 'bug',
    documentation: 'documentation',
    duplicate: 'duplicate',
    'good first issue': 'good first issue',
    'help wanted': 'help wanted',
    invalid: 'invalid',
    question: 'question',
    testing: 'testing',
    wontfix: 'wontfix'
  }
}

export const status = {
  es: {
    new: 'nueva',
    block: 'bloqueada',
    done: 'completada',
    'in progress': 'en progreso'
  },
  en: {
    new: 'new',
    block: 'block',
    done: 'done',
    'in progress': 'in progress'
  }
}

export const auth = {
  es: {
    'signin-loading': 'Estamos iniciando sesión. Por favor, espera un momento.',
    'signin-success': 'Has iniciado sesión correctamente.',
    'signin-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'signup-loading': 'Estamos registrando tu cuenta. Por favor, espera un momento.',
    'signup-success': 'Tu cuenta se ha registrado correctamente.',
    'signup-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'signin-loading': 'We are signing in. Please wait a moment.',
    'signin-success': 'You have signed in successfully.',
    'signin-error': 'Something went wrong. Please try again.',
    'signup-loading': 'We are creating your account. Please wait a moment.',
    'signup-success': 'Your account has been created successfully.',
    'signup-error': 'Something went wrong. Please try again.'
  }
}
