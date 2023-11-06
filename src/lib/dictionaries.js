// COMMON: Add here the dictionaries for the common components

export const common = {
  es: {
    delete: 'Borrar',
    cancel: 'Cancelar',
    edit: 'Editar',
    create: 'Crear',
    save: 'Guardar cambios'
  },
  en: {
    delete: 'Delete',
    cancel: 'Cancel',
    edit: 'Edit',
    create: 'Create',
    save: 'Save changes'
  }
}

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
    'tasks-tab': 'Tareas',
    'settings-tab': 'Configuración',
    'tasks-column': 'Tarea',
    'assignees-column': 'Asignados',
    filter: 'Filtrar por tarea',
    assignees: 'Asignados',
    label: 'Etiqueta',
    status: 'Estado',
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
    'new-task-description-placeholder': 'Las tareas son una forma de comunicar lo que vas a hacer al resto de tu equipo.',
    'new-task-label-placeholder': '---',
    'new-task-status-placeholder': '---',
    'new-end-date-placeholder': 'Fecha de finalización',
    'new-task-estimated-placeholder': 'Tiempo estimado de la tarea en horas',
    'toast-loading': 'Estamos creando tu tarea. Por favor, espera un momento.',
    'toast-success': 'Tu tarea se ha creado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'tasks-tab': 'Tasks',
    'settings-tab': 'Settings',
    'tasks-column': 'Tasks',
    'assignees-column': 'Assignees',
    filter: 'Filter by task',
    assignees: 'Assignees',
    label: 'Label',
    status: 'Status',
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
    'new-task-description-placeholder': 'Help your team understand what you want to do with this task.',
    'new-task-label-placeholder': '---',
    'new-task-status-placeholder': '---',
    'new-end-date-placeholder': 'End date',
    'new-task-estimated-placeholder': 'Estimate time in hours',
    'toast-loading': 'We are creating your tasks. Please wait a moment.',
    'toast-success': 'Your tasks has been created successfully.',
    'toast-error': 'Something went wrong. Please try again.'
  }
}

export const people = {
  es: {
    'members-tab': 'Miembros',
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
    'invite-member-send': 'reclutar',
    'manage-member-title': 'Gestionar %s',
    'manage-member-description': 'Modifica la información de un usuario en este proyecto.',
    'manage-member-submit': 'Cambiar rol',
    'manage-member-delete-title': 'Eliminar del proyecto',
    'manage-member-delete-description': 'Retira el permiso de un usuario a este proyecto.',
    'toast-loading': 'Estamos añadiendo a los nuevos miembros. Por favor, espera un momento.',
    'toast-success': 'Se han añadido los nuevos miembros correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-role-loading': 'Estamos modificando la información del miembro. Por favor, espera un momento.',
    'toast-role-success': 'Se ha modificado la información correctamente.',
    'toast-remove-loading': 'Estamos eliminando al miembro del proyecto. Por favor, espera un momento.',
    'toast-remove-success': 'Se ha eliminado el miembro correctamente.'
  },
  en: {
    'members-tab': 'Members',
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
    'invite-member-send': 'recruit',
    'manage-member-title': 'Manage %s',
    'manage-member-description': 'Modify the info of a user in this project',
    'manage-member-submit': 'Change role',
    'manage-member-delete-title': 'Remove from this project',
    'manage-member-delete-description': 'Remove the access of a user to this project',
    'toast-loading': 'We are adding new members. Please wait a moment.',
    'toast-success': 'New members added successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-role-loading': 'We are modifying the info of this member. Please wait a moment.',
    'toast-role-success': 'Member info updated successfully.',
    'toast-remove-loading': 'We are removing this member from the project. Please wait a moment.',
    'toast-remove-success': 'Member removed successfully.'
  }
}

export const teams = {
  es: {
    'team-tab': 'Equipos',
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
    'team-tab': 'Teams',
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
    'data model': 'modelo de datos',
    documentation: 'documentación',
    bug: 'error',
    testing: 'test',
    ui: 'UI'
  },
  en: {
    enhancement: 'enhancement',
    'data model': 'data model',
    documentation: 'vdocumentation',
    bug: 'bug',
    testing: 'testing',
    ui: 'UI'
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

export const roles = {
  es: {
    owner: 'Propietario',
    developer: 'Desarrollador',
    member: 'Miembro',
    'scrum master': 'Scrum Master',
    tester: 'QA',
    designer: 'Diseñador'
  },
  en: {
    owner: 'Owner',
    developer: 'Developer',
    member: 'Member',
    'scrum master': 'Scrum Master',
    tester: 'QA',
    designer: 'Designer'
  }
}

export const confirmation = {
  es: {
    'confirmation-title': '¿Estás completamente seguro?',
    'confirmation-desc-edit': 'Esto modificará y cambiará tus datos de nuestra base de datos',
    'confirmation-desc-delete': 'Esta acción no se puede deshacer. Se eliminará permanentemente de nuestra base de datos.',
    'confirmation-delete': 'Si, eliminar',
    'confirmation-edit-task': 'Si, modificar tarea',
    'confirmation-delete-task': 'Si, eliminar tarea'
  },
  en: {
    'confirmation-title': 'Are you absolutely sure?',
    'confirmation-desc-edit': 'This will modify and change your data from our servers.',
    'confirmation-desc-delete': 'This action cannot be undone. This will permanently delete this from our servers.',
    'confirmation-delete': 'Yes, delete',
    'confirmation-edit-task': 'Yes, edit task',
    'confirmation-delete-task': 'Yes, delete task'
  }
}

export const projectSettings = {
  es: {
    name: 'Nombre del proyecto',
    description: 'Breve descripción',
    'example-description': 'Cuentanos un poco sobre tu proyecto',
    'explain-description': 'Explica a los usuarios sobre que va tu proyecto.',
    'danger-zone': 'Zona peligrosa',
    visibility: 'Visibilidad',
    'change-visibility': 'Cambiar visibilidad',
    'private-visibility': 'Este proyecto actualmente es privado.',
    'public-visibility': 'Este proyecto actualmente es público.',
    'close-project': 'Cerrar proyecto',
    'explain-close-project':
      'Cerrar un proyecto va a deshabilitar su flujo de trabajo y lo eliminará de la lista de proyectos abiertos.',
    'delete-project': 'Eliminar proyecto',
    'explain-delete-project':
      'Una vez elimines un proyecto, no hay vuelta atrás. Por favor, asegurate.'
  },
  en: {
    name: 'Project name',
    description: 'Short description',
    'example-description': 'Tell us a little bit about your project.',
    'explain-description': "Explain your user's what your project is about.",
    'danger-zone': 'Danger zone',
    visibility: 'Visibility',
    'change-visibility': 'Change visibility',
    'private-visibility': 'This project is currently private.',
    'public-visibility': 'This project is currently public.',
    'close-project': 'Close project',
    'explain-close-project':
      'Closing a project will disable its workflows and remove it from the list of open projects.',
    'delete-project': 'Delete project',
    'explain-delete-project':
      'Once you delete a project, there is no going back. Please be certain.'
  }
}
