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


// Tabla in and out
export const inandouts = {
  es: {
    'language' : 'es-ES',
    'in-column': 'Entrada',
    'out-column': 'Salida',
    'total-column': 'Total',
    filter: 'Filtrar horas',
    'new-date': 'Fichaje manual',
    'new-date-automatic-clock-in': 'Fichaje entrada automático',
    'new-date-automatic-clock-out': 'Fichaje salida automático',
    'new-check-in': 'Fichar entrada',
    'new-check-out': 'Fichar salida',
    'edit': 'Editar',
    
    'new-table-description': 'Selecciona la fecha de entrada y salida para registrar tus horas.',
    'new-table-description-in': 'Selecciona la fecha y la hora de entrada.',
    'new-table-description-out': 'Selecciona la fecha y la hora de salida.',
    'new-table-name': 'Nombre',
    'new-table-desc': 'Descripción',

    'new-table-in-placeholder': 'Fecha de entrada',
    'new-table-out-placeholder': 'Fecha de salida',
    'new-table-hour-placeholder': '00:00',

    'error-in-date': 'La fecha de entrada no puede ser mayor que la fecha de salida',
    'error-out-date': 'La fecha de salida no puede ser menor que la fecha de entrada',
    'error-out-hour': 'La hora de salida no puede ser menor que la hora de entrada',
    'error-hour': 'Formato de hora no válido',

    'new-table-create': 'Fichar',
    'toast-loading': 'Estamos chequeando tu fichaje. Por favor, espera un momento.',
    'toast-success': 'Tu fichaje se ha almacenado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'language' : 'en-US',
    'day-column': 'Date',
    'in-column': 'In',
    'out-column': 'Out',
    'total-column': 'Total',
    filter: 'Filter hours',
    'new-date': 'Manual clock-in',
    'new-date-automatic-clock-in': 'Automatic clock-in',
    'new-date-automatic-clock-out': 'Automatic clock-out',
    'new-check-in': 'Clock-in',
    'new-check-out': 'Clock-out',
    'edit': 'Edit',
    
    'new-table-description': 'Select your clock-in and clock-out date to register your hours.',
    'new-table-description-in': 'Select your clock-in date and hour.',
    'new-table-description-out': 'Select your clock-out date and hour',
    'new-table-name': 'Name',
    'new-table-desc': 'Short description',

    'new-table-in-placeholder': 'Clock-in date',
    'new-table-out-placeholder': 'Clock-out date',
    'new-table-hour-placeholder': '00:00',
    
    'error-in-date': 'Clock-in date cannot be greater than clock-out date',
    'error-out-date': 'Clock-out date cannot be less than clock-in date',
    'error-out-hour': 'Clock-out hour cannot be less than clock-in hour',
    'error-hour': 'Invalid hour format',
    
    'new-table-create': 'Clock in/clock out',
    'toast-loading': 'We are validating your clock-in/clock-out. Please wait a moment.',
    'toast-success': 'Your clock-in/clock-out has been registered successfully.',
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
    'new-task-create': 'Crear'
  },
  en: {
    'tasks-column': 'Tasks',
    'assignees-column': 'Assignees',
    'label-column': 'Label',
    'status-column': 'Status',
    'estimated-column': 'Estimated',
    'end-date-column': 'End date',
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
    'new-task-create': 'Create'
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
