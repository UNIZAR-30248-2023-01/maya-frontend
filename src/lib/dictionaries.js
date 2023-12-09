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
    tickets: 'tickets',
    settings: 'ajustes',
    appearance: 'apariencia',
    password: 'contraseña'
  },
  en: {
    overview: 'overview',
    projects: 'projects',
    teams: 'teams',
    staff: 'staff',
    workSpaces: 'workspaces',
    'in-and-outs': 'in-and-outs',
    tickets: 'tickets',
    settings: 'settings',
    appearance: 'appearance',
    password: 'password'
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

// Tabla in and out
export const inandouts = {
  es: {
    language: 'es-ES',
    'in-column': 'Entrada',
    'out-column': 'Salida',
    'total-column': 'Total',
    filter: 'Filtrar horas',
    'new-date': 'Fichaje manual',
    'new-date-automatic-clock-in': 'Fichaje entrada automático',
    'new-date-automatic-clock-out': 'Fichaje salida automático',
    'new-check-in': 'Fichar entrada',
    'new-check-out': 'Fichar salida',
    edit: 'Editar',
    delete: 'Eliminar',
    'new-table-description': 'Selecciona la fecha de entrada y salida para registrar tus horas.',
    'new-table-description-in': 'Selecciona la fecha y la hora de entrada.',
    'new-table-description-out': 'Selecciona la fecha y la hora de salida.',
    'new-table-name': 'Nombre',
    'new-table-desc': 'Descripción',
    'new-table-in-placeholder': 'Fecha de entrada',
    'new-table-out-placeholder': 'Fecha de salida',
    'new-table-hour-placeholder': '00:00',
    'error-in-date': 'La fecha de entrada no puede ser mayor que la fecha de salida.',
    'error-out-date': 'La fecha de salida no puede ser menor que la fecha de entrada.',
    'error-out-hour': 'La hora de salida no puede ser menor que la hora de entrada.',
    'error-in-hour': 'La hora de entrada no puede ser mayor que la hora de salida.',
    'error-current-day': 'La fecha no puede ser posterior a la fecha actual.',
    'error-hour': 'Formato de hora no válido.',
    'new-table-create': 'Fichar',
    'toast-loading': 'Estamos chequeando tu fichaje. Por favor, espera un momento.',
    'toast-success': 'Tu fichaje se ha almacenado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-delete-loading': 'Estamos eliminando tu fichaje. Por favor, espera un momento.',
    'toast-delete-success': 'Tu fichaje se ha eliminado correctamente.'
  },
  en: {
    language: 'en-US',
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
    edit: 'Edit',
    delete: 'Delete',
    'new-table-description': 'Select your clock-in and clock-out date to register your hours.',
    'new-table-description-in': 'Select your clock-in date and hour.',
    'new-table-description-out': 'Select your clock-out date and hour',
    'new-table-name': 'Name',
    'new-table-desc': 'Short description',
    'new-table-in-placeholder': 'Clock-in date',
    'new-table-out-placeholder': 'Clock-out date',
    'new-table-hour-placeholder': '00:00',
    'error-in-date': 'Clock-in date cannot be greater than clock-out date.',
    'error-out-date': 'Clock-out date cannot be less than clock-in date.',
    'error-out-hour': 'Clock-out hour cannot be less than clock-in hour.',
    'error-in-hour': 'Clock-in hour cannot be greater than clock-out hour.',
    'error-current-day': 'Date cannot be after current date.',
    'error-hour': 'Invalid hour format.',
    'new-table-create': 'Clock in/clock out',
    'toast-loading': 'We are validating your clock-in/clock-out. Please wait a moment.',
    'toast-success': 'Your clock-in/clock-out has been registered successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-delete-loading': 'We are deleting your clock-in/clock-out. Please wait a moment.',
    'toast-delete-success': 'Your clock-in/clock-out has been deleted successfully.'
  }
}

export const settingsAccount = {
  es: {
    'account-tab': 'Cuenta',
    'appearance-tab': 'Apariencia',
    'password-tab': 'Contraseña',
    'logout-tab': 'Cerrar sesión',

    'account-headline': 'Mi cuenta',
    'account-under-headline': 'Actualiza la configuración de tu cuenta. Establece tu nombre, apellido, correo electrónico y avatar. También puedes cambiar tu contraseña',
    'appearance-headline': 'Personaliza la apariencia de la aplicación. Cambia automáticamente entre tema a claro o a oscuro.',
    'password-headline': 'Cambia tu contraseña. Ambas deben coincidir para poder actualizarse.',

    'pick-avatar': 'Selecciona un avatar',
    'update-avatar': 'Actualizar',

    language: 'es-ES',
    'user-firstname': 'Nombre',
    'user-lastname': 'Apellido',
    'user-username': 'Nombre de usuario',
    'user-avatar': 'Imagen de perfil',
    'user-email': 'Correo electrónico',
    'user-password': 'Contraseña',
    'user-password-confirm': 'Confirmar contraseña',
    'account-update': 'Actualizar',

    'submitted-values': 'Has actualizado los siguientes valores',
    'theme-submit': 'El color del tema se ha actualizado correctamente.',

    'message-username': '* El nombre de usuario no se puede modificar.',
    'message-email': '* El correo electrónico no se puede modificar.',

    'appearance-theme': 'Tema',
    'appearance-theme-light': 'Claro',
    'appearance-theme-dark': 'Oscuro',
    'appearance-subheadline': 'Selecciona el tema para el panel de control.',
    'appearance-update': 'Actualizar color del tema',

    'error-firstname': 'El nombre no puede estar vacío.',
    'error-lastname': 'El apellido no puede estar vacío',
    'error-empty-password': 'Ambas contraseñas deben no estar vacías',
    'error-same-password': 'Ambas contraseñas deben ser las mismas',

    'toast-loading': 'Estamos validando tu cuenta. Por favor, espera un momento.',
    'toast-success': 'Tu cuenta se ha actualizada correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    'account-tab': 'Account',
    'appearance-tab': 'Appearance',
    'password-tab': 'Password',
    'logout-tab': 'Logout',

    'account-headline': 'My account',
    'account-under-headline': 'Update your account settings. Set your firstname, lastname, email and avatar. You can also change your password.',
    'appearance-headline': 'Customize the appearance of the app. Automatically switch between day and night themes.',
    'password-headline': 'Change your password. Both must match the same in order to update.',

    'pick-avatar': 'Pick an avatar',
    'update-avatar': 'Update',

    language: 'en-US',
    'user-firstname': 'Name',
    'user-lastname': 'Lastname',
    'user-username': 'User name',
    'user-avatar': 'Profil photo',
    'user-email': 'E-mail',
    'user-password': 'Password',
    'user-password-confirm': 'Confirm password',
    'account-update': 'Update',

    'submitted-values': 'You submitted the following values.',
    'theme-submit': 'Theme color has been updated successfully.',

    'message-username': '* Username cannot be modified.',
    'message-email': '* E-mail cannot be modified.',

    'appearance-theme': 'Theme',
    'appearance-theme-light': 'Light',
    'appearance-theme-dark': 'Dark',
    'appearance-subheadline': 'Select the theme for the dashboard.',
    'appearance-update': 'Update theme color',

    'error-firstname': 'Name cannot be empty.',
    'error-lastname': 'Lastname cannot be empty',
    'error-empty-password': 'Both passwords must not be empty',
    'error-same-password': 'Both password must be the same',

    'toast-loading': 'We are validating your info account. Please wait a moment.',
    'toast-success': 'Your info account has been updated successfully.',
    'toast-error': 'Something went wrong. Please try again.'
  }
}

export const tasks = {
  es: {
    'tasks-tab': 'Tareas',
    'teams-tab': 'Equipos',
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
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-delete-loading': 'Estamos eliminando tu tarea. Por favor, espera un momento.',
    'toast-delete-success': 'Tu tarea se ha eliminado correctamente.',
    'toast-edit-loading': 'Estamos editando tu tarea. Por favor, espera un momento.',
    'toast-edit-success': 'Tu tarea se ha editado correctamente.'
  },
  en: {
    'tasks-tab': 'Tasks',
    'teams-tab': 'Teams',
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
    'toast-error': 'Something went wrong. Please try again.',
    'toast-delete-loading': 'We are deleting your task. Please wait a moment.',
    'toast-delete-success': 'Your tasks has been deleted successfully.',
    'toast-edit-loading': 'We are editing your tasks Please wait a moment.',
    'toast-edit-success': 'Your task has been edited successfully.'
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
    'teams-column': 'Equipos',
    'description-column': 'Descripción',
    'new-team-name-placeholder': 'Repartidores',
    'new-team-desc-placeholder': 'Ayuda a tu equipo a entender el propósito de este equipo',
    public: 'público',
    private: 'privado',
    filter: 'Filtrar por nombre de equipo',
    search: 'Buscar equipos',
    'new-team': 'nuevo equipo',
    'edit-team': 'editar equipo',
    'add-team': 'Añade equipos',
    invite: 'Añadir equipos',
    'add-team-description': 'Añade equipos a tu proyecto para crecer tu proyecto.',
    'add-team-send': 'añadir',
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
    'teams-column': 'Teams',
    'name-column': 'Name',
    'description-column': 'Description',
    'new-team-name-placeholder': 'Delivery',
    'new-team-desc-placeholder': 'Help your team understand the purpose of this team',
    public: 'public',
    private: 'private',
    filter: 'Filter by team name',
    search: 'Search teams',
    'new-team': 'new team',
    'edit-team': 'edit team',
    'add-team': 'Add teams',
    invite: 'Add teams',
    'add-team-description': 'Add teams to your project to grow your project.',
    'add-team-send': 'add',
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
    'confirmation-visibility': '¿Estás seguro de que quieres cambiar la visibilidad de este proyecto?. Esto puede generar que algunos usuarios puedan / no puedan ver el proyecto.',
    'confirmation-desc-close': '¿Estás seguro de que quieres cerrar este proyecto?. Al hacerlo se va a deshabilitar su flujo de trabajo y se eliminará de la lista de proyectos abiertos.',
    'confirmation-desc-open': '¿Estás seguro de que quieres abrir este proyecto?. Al hacerlo se va a habilitar su flujo de trabajo y se añadirá a la lista de proyectos abiertos.',
    'confirmation-delete': 'Si, eliminar',
    'confirmation-edit-task': 'Si, modificar tarea',
    'confirmation-delete-task': 'Si, eliminar tarea',
    'confirmation-visibility-public': 'Si, hacer público',
    'confirmation-visibility-private': 'Si, hacer privado',
    'confirmation-close': 'Si, cerrar proyecto',
    'confirmation-open': 'Si, abrir proyecto'
  },
  en: {
    'confirmation-title': 'Are you absolutely sure?',
    'confirmation-desc-edit': 'This will modify and change your data from our servers.',
    'confirmation-desc-delete': 'This action cannot be undone. This will permanently delete this from our servers.',
    'confirmation-visibility': 'Are you sure you want to change the visibility of this project?. This may cause that some users can / can\'t see this project.',
    'confirmation-desc-close': 'Are you sure you want to close this project?. By doing so will disable its workflows and remove it to the list of open projects.',
    'confirmation-desc-open': 'Are you sure you want to open this project?. By doing so will enable its workflows and add it to the list of open projects.',
    'confirmation-delete': 'Yes, delete',
    'confirmation-edit-task': 'Yes, edit task',
    'confirmation-delete-task': 'Yes, delete task',
    'confirmation-visibility-public': 'Yes, make public',
    'confirmation-visibility-private': 'Yes, make private',
    'confirmation-close': 'Yes, close project',
    'confirmation-open': 'Yes, open project'
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
    'open-project': 'Abrir proyecto',
    'explain-close-project':
      'Cerrar un proyecto va a deshabilitar su flujo de trabajo y lo eliminará de la lista de proyectos abiertos.',
    'explain-open-project': 'Abrir un proyecto va a habilitar su flujo de trabajo y lo añadirá a la lista de proyectos abiertos.',
    'delete-project': 'Eliminar proyecto',
    'explain-delete-project':
      'Una vez elimines un proyecto, no hay vuelta atrás. Por favor, asegurate.',
    'toast-data-loading': 'Estamos actualizando los datos de tu proyecto. Por favor, espera un momento.',
    'toast-data-success': 'Tu proyecto se ha actualizado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-visibility-loading': 'Estamos actualizando la visibilidad de tu proyecto. Por favor, espera un momento.',
    'toast-visibility-success': 'Se ha actualizado la visibilidad de tu proyecto correctamente.',
    'toast-close-loading': 'Estamos actualizando el estado de tu proyecto. Por favor, espera un momento.',
    'toast-close-success': 'Se ha actualizado el estado de tu proyecto correctamente.',
    'toast-delete-loading': 'Estamos eliminando tu proyecto. Por favor, espera un momento.',
    'toast-delete-success': 'Tu proyecto se ha eliminado correctamente.'
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
    'open-project': 'Open project',
    'explain-close-project':
      'Closing a project will disable its workflows and remove it from the list of open projects.',
    'explain-open-project': 'Opening a project will enable its workflows and add it to the list of open projects.',
    'delete-project': 'Delete project',
    'explain-delete-project':
      'Once you delete a project, there is no going back. Please be certain.',
    'toast-data-loading': 'We are updating your project data. Please wait a moment.',
    'toast-data-success': 'Your project has been updated successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-visibility-loading': 'We are updating your project visibility. Please wait a moment.',
    'toast-visibility-success': 'Your project visibility has been updated successfully.',
    'toast-close-loading': 'We are updating your project status. Please wait a moment.',
    'toast-close-success': 'Your project status has been updated successfully.',
    'toast-delete-loading': 'We are deleting your project. Please wait a moment.',
    'toast-delete-success': 'Your project has been deleted successfully.'
  }
}

export const comments = {
  es: {
    titulo: 'Comentarios',
    placeholder: 'Escribe aquí tu comentario ...',
    button: 'Enviar',
    'toast-loading': 'Estamos enviando tu comentario. Por favor, espera un momento.',
    'toast-success': 'Tu comentario se ha enviado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    titulo: 'Comments',
    placholder: 'Type here your comment ...',
    button: 'Send',
    'toast-loading': 'We are sending your comment. Please wait a moment.',
    'toast-success': 'Your comment has been sent successfully.',
    'toast-error': 'Something went wrong. Please try again.'
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

export const signin = {
  es: {
    'signin-register': 'Registrar',
    'signin-message': 'Gracias a MaYA he conseguido ahorrar 90 horas a mi equipo.',
    'signin-login': 'Inicia sesión',
    'signin-email': 'Introduce tu correo abajo para iniciar sesión',
    'signin-continue': 'Al hacer clic en continuar, aceptas nuestra',
    'signin-terms': 'Terminos De Servicio',
    'signin-privacy': 'Política de Privacidad',
    'signin-and': 'y',
    'signin-username': 'Usuario',
    'signin-password': 'Contraseña',
    'signin-sigin': 'Iniciar sesión con el correo',
    'signin-continuee': 'O continuar con'

  },
  en: {
    'signin-register': 'Register',
    'signin-message': 'Thanks to MaYA I have managed to save my team 90 hours.',
    'signin-login': 'Log in to your account',
    'signin-email': 'Enter your email below to log in to your account',
    'signin-continue': 'By clicking continue, you agree to our',
    'signin-terms': 'Terms of Service',
    'signin-privacy': 'Privacy Policy',
    'signin-and': 'and',
    'signin-username': 'Username',
    'signin-password': 'Password',
    'signin-sigin': 'Sign In with Email',
    'signin-continuee': 'Or continue with'

  }
}

export const signup = {
  es: {
    'signup-login': 'Iniciar Sesión',
    'signup-message': 'Gracias a MaYA he conseguido ahorrar 90 horas a mi equipo.',
    'signup-create': 'Crear cuenta',
    'signup-emails': 'Introduce tus datos personales para crear una cuenta',
    'signup-continue': 'Al hacer clic en continuar, aceptas nuestra',
    'signup-terms': 'Terminos De Servicio',
    'signup-privacy': 'Política de Privacidad',
    'signup-and': 'y',
    'signup-username': 'Nombre de usuario',
    'signup-password': 'Contraseña',
    'signup-email': 'Correo electrónico',
    'signup-firstname': 'Nombre',
    'signup-lastname': 'Apellido',
    'signup-sigin': 'Iniciar sesión con el correo',
    'signup-continuee': 'O continuar con'

  },
  en: {
    'signup-login': 'Sign In',
    'signup-message': 'Thanks to MaYA I have managed to save my team 90 hours.',
    'signup-create': 'Create an account',
    'signup-emails': 'Enter data to create an account',
    'signup-continue': 'By clicking continue, you agree to our',
    'signup-terms': 'Terms of Service',
    'signup-privacy': 'Privacy Policy',
    'signup-and': 'and',
    'signup-username': 'Username',
    'signup-password': 'Password',
    'signup-email': 'Email',
    'signup-firstname': 'First Name',
    'signup-lastname': 'Last Name',
    'signup-sigin': 'Sign In with Email',
    'signup-continuee': 'Or continue with'
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
