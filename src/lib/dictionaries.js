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

export const landing = {
  es: {
    title: 'Gestionar tu trabajo nunca fue tan fácil',
    description: 'Administra proyectos, tareas, reserva espacios de trabajo y registra tus horas de entrada y salida con total confianza. Optimiza tu flujo de trabajo y maximiza la eficiencia.',
    start: 'Empezar ahora',
    demo: 'Ver demo',
    'cta-title': 'Aumenta tu productividad.',
    'cta-description': 'Empieza a usar nuestra app hoy mismo.Empieza a usar nuestra app hoy mismo.',
    'cta-action': 'Empezar ahora',
    'cta-action-2': 'entrar',
    'logo-cloud-title': 'Las empresas más innovadoras del mundo usan nuestra app',
    'features-pre-1': 'Trabaja mas rápido',
    'features-title-1': 'Optimiza tu rendimiento laboral',
    'features-description-1': 'Potencia tu productividad con nuestras herramientas de gestión laboral de vanguardia.',
    'features-pre-2': 'Todo lo que necesitas',
    'features-title-2': '¿No tienes tiempo? No hay problema.',
    'features-description-2': 'Con nuestra herramienta te ayudamos a ahorrar tiempo en la gestión de los proyectos de tu empresa para que puedas dedicarlo a lo que realmente importa.',
    'all-right-reserved': 'Todos los derechos reservados',
    'stats-pre': 'Nuestra trayectoria',
    'stats-title': 'Probado por miles de empresas en todo el mundo',
    'stats-description': 'Hemos ayudado a miles de empresas a mejorar su flujo de trabajo y aumentar su productividad.',
    'feat-1': 'Empresas en la plataforma',
    'feat-2': 'Tiempo estimado ahorrado',
    'feat-3': 'Garantía de tiempo de actividad',
    'feat-4': 'Proyectos rastreados',
    'feat-1-title': 'Rastrea tu trabajo',
    'feat-1-description': 'Rastrea tu trabajo y gestiona tus proyectos con nuestras herramientas de vanguardia.',
    'feat-2-title': 'Ahorra tiempo',
    'feat-2-description': 'No pierdas más tiempo gestionando tus proyectos. Con nuestra herramienta puedes ahorrar tiempo y dedicarlo a lo que realmente importa.',
    'feat-3-title': 'Reserva tu sitio',
    'feat-3-description': 'Olvídate de la antigua forma de reservar tu espacio de trabajo. Con nuestra herramienta puedes reservar tu espacio de trabajo en unos pocos clics.'
  },
  en: {
    title: 'Manage your work has never been so easy',
    description: 'Manage projects, tasks, book workspaces and record your in-and-outs with total confidence. Optimize your workflow and maximize efficiency.',
    start: 'Start now',
    demo: 'Live demo',
    'cta-title': 'Boost your productivity.',
    'cta-description': 'Start using our app today.',
    'cta-action': 'Get started',
    'cta-action-2': 'Log in',
    'logo-cloud-title': 'The world\'s most innovative companies use our app',
    'features-pre-1': 'Work faster',
    'features-title-1': 'Optimize your work performance',
    'features-description-1': 'Boost your productivity with our cutting-edge work management tools.',
    'features-pre-2': 'Everything you need',
    'features-title-2': 'No time? No problem.',
    'features-description-2': 'With our tool we help you to save time in the management of your company\'s projects so that you can dedicate it to what really matters.',
    'all-right-reserved': 'All rights reserved',
    'stats-pre': 'Our track record',
    'stats-title': 'Trusted by thousands of companies worldwide',
    'stats-description': 'We have helped thousands of companies to improve their workflow and increase their productivity.',
    'feat-1': 'Companies on the platform',
    'feat-2': 'Estimated time saved',
    'feat-3': 'Uptime guarantee',
    'feat-4': 'Projects tracked',
    'feat-1-title': 'Track your work',
    'feat-1-description': 'Track your work and manage your projects with our cutting-edge tools.',
    'feat-2-title': 'Save Time',
    'feat-2-description': 'Waste no more time managing your projects. With our tool you can save time and dedicate it to what really matters.',
    'feat-3-title': 'Book your workspace',
    'feat-3-description': 'Forget about the old way of booking your workspace. With our tool you can book your workspace in a few clicks.'
  }
}
