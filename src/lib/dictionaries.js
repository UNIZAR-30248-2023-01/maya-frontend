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
    password: 'contraseña',
    organizations: 'organizaciones'
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
    password: 'password',
    organizations: 'organizations'
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

export const staff = {
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
    'manage-member-description': 'Modifica la información de un usuario.',
    'manage-member-submit': 'Cambiar rol',
    'manage-member-delete-title': 'Eliminar usuario',
    'manage-member-delete-description': 'Retira el permiso de un usuario a la aplicación.',
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
    'new-table-description': 'Add people to your project to improve.',
    'new-person-create': 'invite',
    'invite-member': 'Recruit people',
    'invite-member-description': 'Add members to your project to improve your team.',
    invite: 'Add members',
    search: 'Search members',
    'invite-member-send': 'recruit',
    'manage-member-title': 'Manage %s',
    'manage-member-description': 'Modify the info of a user',
    'manage-member-submit': 'Change role',
    'manage-member-delete-title': 'Remove user',
    'manage-member-delete-description': 'Remove the access of a user to this website',
    'toast-loading': 'We are adding new members. Please wait a moment.',
    'toast-success': 'New members added successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-role-loading': 'We are modifying the info of this member. Please wait a moment.',
    'toast-role-success': 'Member info updated successfully.',
    'toast-remove-loading': 'We are removing this member from the project. Please wait a moment.',
    'toast-remove-success': 'Member removed successfully.'
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
    'manage-member-description-team': 'Modifica la información de un usuario en este equipo.',
    'manage-member-submit': 'Cambiar rol',
    'manage-member-delete-title': 'Eliminar del proyecto',
    'manage-member-delete-description': 'Retira el permiso de un usuario a este proyecto.',
    'manage-member-delete-title-team': 'Eliminar del equipo',
    'manage-member-delete-description-team': 'Retira el permiso de un usuario a este equipo.',
    'toast-loading': 'Estamos añadiendo a los nuevos miembros. Por favor, espera un momento.',
    'toast-success': 'Se han añadido los nuevos miembros correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-role-loading': 'Estamos modificando la información del miembro. Por favor, espera un momento.',
    'toast-role-success': 'Se ha modificado la información correctamente.',
    'toast-remove-loading': 'Estamos eliminando al miembro del proyecto. Por favor, espera un momento.',
    'toast-remove-success': 'Se ha eliminado el miembro correctamente.',
    copy: 'Copiar'
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
    'manage-member-description-team': 'Modify the info of a user in this team',
    'manage-member-submit': 'Change role',
    'manage-member-delete-title': 'Remove from this project',
    'manage-member-delete-description': 'Remove the access of a user to this project',
    'manage-member-delete-title-team': 'Remove from this team',
    'manage-member-delete-description-team': 'Remove the access of a user to this team',
    'toast-loading': 'We are adding new members. Please wait a moment.',
    'toast-success': 'New members added successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-role-loading': 'We are modifying the info of this member. Please wait a moment.',
    'toast-role-success': 'Member info updated successfully.',
    'toast-remove-loading': 'We are removing this member from the project. Please wait a moment.',
    'toast-remove-success': 'Member removed successfully.',
    copy: 'Copy'
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
    'scrum-master': 'Scrum Master',
    tester: 'QA',
    designer: 'Diseñador'
  },
  en: {
    owner: 'Owner',
    developer: 'Developer',
    member: 'Member',
    'scrum-master': 'Scrum Master',
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

export const hours = {
  es: {
    titulo: 'Registro de horas',
    placeholder: 'Escribe aquí tu tiempo invertido (en horas)...',
    button: 'Añadir horas',
    hours: 'Horas',
    date: 'Fecha',
    user: 'Usuario',
    'toast-loading': 'Estamos enviando tu comentario. Por favor, espera un momento.',
    'toast-success': 'Tu comentario se ha enviado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.'
  },
  en: {
    titulo: 'Time log',
    placeholder: 'Type here your time spent (in hours)...',
    button: 'Add hours',
    hours: 'Time spent',
    date: 'Date',
    user: 'Username',
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
    'signin-sigin': 'Iniciar sesión',
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
    'signin-sigin': 'Sign in',
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
    title: 'Managing your work has never been easier',
    description: 'Manage projects, tasks, reserve workspaces and record your inputs and outputs with complete confidence. Optimize your workflow and maximize efficiency.',
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

export const workspaces = {
  es: {
    'workspace-column': 'Lugares de trabajo',
    seats: 'Asientos',
    seat: 'Asiento',
    filter: 'Filtrar por nombre',
    reservedSeats: 'Asientos reservados',
    selectedSeats: 'Asientos seleccionados',
    number: 'Número',
    save: 'Guardar',
    cancel: 'Cancelar Reserva',
    'toast-loading': 'Estamos cancelando tu reserva. Por favor, espera un momento.',
    'toast-success': 'Tu reserva se ha cancelado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-res-loading': 'Estamos realizando tu reserva. Por favor, espera un momento.',
    'toast-res-success': 'Tu reserva se ha realizado correctamente.'
  },
  en: {
    'workspace-column': 'Workspaces',
    seats: 'Seats',
    seat: 'Seat',
    filter: 'Filter by name',
    reservedSeats: 'Reserved Seats ',
    selectedSeats: 'Selected Seats',
    number: 'Number',
    save: 'Save',
    cancel: 'Cancel Reservation',
    'toast-loading': 'We are canceling your reservation. Please wait a moment.',
    'toast-success': 'Your reservation has been successfully cancelled.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-res-loading': 'We are in the process of making your reservation. Please wait a moment.',
    'toast-res-success': 'Your reservation has been successfully completed.'
  }
}
export const privacy = {
  es: {
    title: 'Privacy',
    introduction: 'En MaYA, nos tomamos muy en serio la privacidad de nuestros usuarios y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal en relación con el uso de nuestro sitio web.',
    subsections: [
      {
        title: 'Recopilación de información',
        description: 'Podemos recopilar información personal de los usuarios cuando se registran en nuestro sitio, se suscriben a nuestro boletín informativo, participan en concursos o encuestas, o realizan una compra a través de nuestro sitio. Esta información puede incluir su nombre, dirección de correo electrónico, dirección postal, número de teléfono y fecha de nacimiento.También podemos recopilar información no personal, como la dirección IP del usuario, el tipo de navegador, la página de referencia y las páginas visitadas en nuestro sitio.'
      },
      {
        title: 'Uso de la información',
        description: 'La información personal que recopilamos se utiliza para procesar transacciones, enviar correos electrónicos informativos y promocionales, y mejorar la experiencia del usuario en nuestro sitio web. También podemos utilizar información no personal para analizar el tráfico del sitio y mejorar nuestro servicio.'
      },
      {
        title: 'Divulgación de información',
        description: 'No vendemos, intercambiamos ni transferimos información personal a terceros sin su consentimiento, excepto para cumplir con la ley, proteger nuestros derechos o propiedad, o hacer cumplir nuestras políticas del sitio.'
      },
      {
        title: 'Seguridad de la información',
        description: 'Nos esforzamos por proteger la información personal de nuestros usuarios mediante medidas de seguridad adecuadas, como la encriptación de datos y el acceso restringido a la información personal.Sin embargo, ninguna medida de seguridad puede garantizar la seguridad absoluta de la información. Por lo tanto, no podemos garantizar la seguridad de la información personal del usuario en todo momento.'
      },
      {
        title: 'Cambios en la política de privacidad',
        description: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Se recomienda a los usuarios que revisen periódicamente esta página para estar informados de cualquier cambio. Al continuar utilizando nuestro sitio web después de la publicación de cambios en esta política, los usuarios aceptan los cambios.'
      },
      {
        title: 'Contacto',
        description: <>
        Si tiene preguntas o inquietudes sobre esta Política de Privacidad, por favor contáctenos a través de <a href="mailto:help@gracehopper.xyz" target="_top" rel="noreferrer">help@gracehopper.xyz</a>.
        </>
      }
    ]
  },
  en: {
    title: 'Privacy',
    introduction: 'At MaYA, we take the privacy of our users very seriously and are committed to protecting their personal data. This Privacy Policy explains how we collect, use, and protect your personal information in connection with the use of our website.',
    subsections: [
      {
        title: 'Collection of Information',
        description: "We may collect personal information from users when they register on our site, subscribe to our newsletter, participate in contests or surveys, or make a purchase through our site. This information may include your name, email address, postal address, phone number, and date of birth. We may also collect non-personal information, such as the user's IP address, browser type, referral page, and pages visited on our site."
      },
      {
        title: 'Use of Information',
        description: 'The personal information we collect is used to process transactions, send informational and promotional emails, and improve the user experience on our website. We may also use non-personal information to analyze site traffic and enhance our service.'
      },
      {
        title: 'Disclosure of Information',
        description: 'We do not sell, trade, or transfer personal information to third parties without consent, except to comply with the law, protect our rights or property, or enforce our site policies.'
      },
      {
        title: 'Information Security',
        description: 'We strive to protect the personal information of our users through appropriate security measures, such as data encryption and restricted access to personal information. However, no security measure can guarantee absolute security of information. Therefore, we cannot guarantee the security of user personal information at all times.'
      },
      {
        title: 'Changes to Privacy Policy',
        description: 'We may update this Privacy Policy from time to time. Users are advised to periodically review this page to be informed of any changes. By continuing to use our website after the publication of changes to this policy, users accept the changes.'
      },
      {
        title: 'Contact',
        description: <>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:help@gracehopper.xyz" target="_top" rel="noreferrer">help@gracehopper.xyz</a>.
        </>
      }
    ]
  }
}

export const terms = {
  es: {
    title: 'Términos de uso de MaYA',
    introduction: 'Al utilizar nuestro sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso:',
    subsections: [
      {
        title: 'Contenido del sitio web',
        description: 'El contenido de este sitio web es solo para fines informativos y educativos. No garantizamos la exactitud, integridad o utilidad de la información proporcionada.'
      },
      {
        title: 'Uso permitido',
        description: 'Usted está autorizado a utilizar este sitio web para su uso personal y no comercial. No puede copiar, reproducir, distribuir, transmitir, modificar o crear obras derivadas de cualquier parte del sitio web sin nuestro permiso previo por escrito.'
      },
      {
        title: 'Registro de usuario',
        description: 'Para acceder a ciertas funciones de este sitio web, es posible que deba registrarse y crear una cuenta de usuario. Usted es responsable de proteger la confidencialidad de su información de registro y cualquier actividad que ocurra bajo su cuenta.'
      },
      {
        title: 'Uso prohibido',
        description: 'Usted no puede utilizar este sitio web para cualquier propósito ilegal o no autorizado. Usted acepta no interferir con el uso y disfrute de este sitio web por parte de otros usuarios.'
      },
      {
        title: 'Propiedad intelectual',
        description: 'Todos los derechos de propiedad intelectual en y para el sitio web son propiedad de MaYA y están protegidos por las leyes de derechos de autor y marcas registradas. No se le concede ninguna licencia o derecho a utilizar ninguna de estas marcas o logotipos sin nuestro permiso previo por escrito.'
      },
      {
        title: 'Descargo de responsabilidad',
        description: 'Este sitio web se proporciona "tal cual" sin garantías de ningún tipo, ya sean expresas o implícitas. No asumimos ninguna responsabilidad por cualquier daño que surja del uso de este sitio web.'
      }, {
        title: 'Enlaces a otros sitios web',
        description: 'Este sitio web puede contener enlaces a otros sitios web de terceros que no son propiedad ni están controlados por MaYA. No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de otros sitios web y no somos responsables de ellos.'
      }, {
        title: 'Modificaciones de los términos de uso',
        description: 'Nos reservamos el derecho de modificar estos términos de uso en cualquier momento y sin previo aviso. Le recomendamos que revise estos términos de uso periódicamente para estar al tanto de cualquier cambio.'
      }, {
        title: 'Ley aplicable',
        description: 'Estos términos de uso se regirán e interpretarán de acuerdo con las leyes del país o estado donde MaYA tiene su sede principal, sin referencia a los principios de conflicto de leyes.'
      }
    ]
  },
  en: {
    title: 'Términos de uso de MaYA',
    introduction: 'By using our website, you agree to comply with and be bound by the following terms and conditions of use:',
    subsections: [
      {
        title: 'Website Content',
        description: 'The content of this website is for informational and educational purposes only. We do not guarantee the accuracy, completeness, or usefulness of the provided information.'
      },
      {
        title: 'Permitted Use',
        description: 'You are authorized to use this website for personal and non-commercial use. You may not copy, reproduce, distribute, transmit, modify, or create derivative works from any part of the website without our prior written permission.'
      },
      {
        title: 'User Registration',
        description: 'To access certain features of this website, you may need to register and create a user account. You are responsible for protecting the confidentiality of your registration information and any activity that occurs under your account.'
      },
      {
        title: 'Prohibited Use',
        description: 'You may not use this website for any illegal or unauthorized purpose. You agree not to interfere with the use and enjoyment of this website by other users.'
      },
      {
        title: 'Intellectual Property',
        description: 'All intellectual property rights in and to the website are owned by MaYA and are protected by copyright and trademark laws. You are not granted any license or right to use any of these trademarks or logos without our prior written permission.'
      },
      {
        title: 'Disclaimer',
        description: "This website is provided 'as is' without warranties of any kind, whether express or implied. We assume no responsibility for any damages arising from the use of this website."
      },
      {
        title: 'Links to Other Websites',
        description: 'This website may contain links to third-party websites that are not owned or controlled by MaYA. We have no control over the content, privacy policies, or practices of other websites and are not responsible for them.'
      },
      {
        title: 'Modifications to Terms of Use',
        description: 'We reserve the right to modify these terms of use at any time and without prior notice. We recommend that you periodically review these terms of use to stay informed of any changes.'
      },
      {
        title: 'Applicable Law',
        description: 'These terms of use will be governed and interpreted in accordance with the laws of the country or state where MaYA has its principal place of business, without reference to the principles of conflict of laws.'
      }
    ]
  }
}

export const faq = {
  es: [
    {
      question: '¿Puedo personalizar mi perfil?',
      answer:
        'Sí, desde tu perfil puedes cambiar tu nombre, apellidos, foto de perfil y contraseña.'
    }, {
      question: '¿Cómo puedo crear un proyecto?',
      answer:
        'Una vez dentro de tu organización, puedes crear un proyecto desde el menú lateral siempre y cuando tengas permisos de propietario o administrador.'
    },
    {
      question: '¿Cómo puedo crear un equipo?',
      answer:
        'Una vez dentro de tu organización, puedes crear un equipo desde el menú lateral siempre y cuando tengas permisos de propietario o administrador.'
    },
    {
      question: '¿Cómo puedo añadir un equipo a mi proyecto?',
      answer:
        'Una vez dentro de tu proyecto, puedes añadir un equipo desde el menú superior siempre y cuando tengas permisos de propietario o administrador.'
    }
  ],
  en: [
    {
      question: '¿Can I customize my profile?',
      answer:
        'Yes, from your profile you can change your name, last name, profile picture and password.'
    }, {
      question: 'How can I create a project?',
      answer:
        'Once inside your organization, you can create a project from the side menu as long as you have owner or administrator permissions.'
    },
    {
      question: 'How can I create a team?',
      answer:
        'Once inside your organization, you can create a team from the side menu as long as you have owner or administrator permissions.'
    },
    {
      question: '¿How can I add a team to my project?',
      answer:
        'Once inside your project, you can add a team from the top menu as long as you have owner or administrator permissions.'
    }
  ]
}

export const footer = {
  es: {
    sitemap: 'Mapa del sitio',
    status: 'Estado',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    faq: 'FAQ'
  },
  en: {
    sitemap: 'Sitemap',
    status: 'Status',
    privacy: 'Privacy Policy',
    terms: 'Term of use',
    faq: 'FAQ'
  }
}

export const org = {
  es: {
    'create-org-or': 'o',
    'create-org-title': '¿Todavía no tienes una organización?',
    'create-org-button': 'Creala ahora mismo!',
    'name-column': 'Nombre',
    'description-column': 'Descripción',
    'new-table-name-placeholder': 'Tu organización',
    'new-table-desc-placeholder': 'Una breve descripción sobre tu organización.',
    'dialog-title': 'Nueva organización',
    'dialog-description': 'Una organizarción te permite tener agrupada toda la gestión de tu empresa.',
    'create-button': 'Crear organización',
    'toast-loading': 'Estamos creando tu organización. Por favor, espera un momento.',
    'toast-success': 'Tu organización se ha creado correctamente.',
    'toast-error': 'Algo ha ido mal. Por favor, inténtalo de nuevo.',
    'toast-loading-join': 'Estamos uniendote a tu nueva organización. Por favor, espera un momento.',
    'toast-success-join': 'Te has unido correctamente.',
    'join-org-title': 'Estas a punto de unirte a la organización %s',
    'join-org-button': 'Unirme ahora'

  },
  en: {
    'create-org-or': 'or',
    'create-org-title': 'Don\'t have an organization yet?',
    'create-org-button': 'Create it right now!',
    'name-column': 'Name',
    'description-column': 'Description',
    'new-table-name-placeholder': 'Your organization',
    'new-table-desc-placeholder': 'A short description about this organization.',
    'dialog-title': 'New organization',
    'dialog-description': 'An organization allows you to have all the management of your company grouped together.',
    'create-button': 'Create organization',
    'toast-loading': 'We are creating your organization. Please wait a moment.',
    'toast-success': 'Your organization has been created successfully.',
    'toast-error': 'Something went wrong. Please try again.',
    'toast-loading-join': 'We are joining you to your new organization. Pleae wait a moment.',
    'toast-success-join': 'You have been joined succesfully.',
    'join-org-title': 'You are going to join %s\'s organization',
    'join-org-button': 'Join now'
  }
}
export const home = {
  es: {
    title: 'Gestionar tu trabajo nunca fue tan fácil',
    'salary-value': 'Sueldo actual',
    'symbol-money': '€',
    'time-spent-vs': 'Tiempo invertido vs tiempo por invertir por semana',
    'time-spent': 'Tiempo invertido',
    'time-to-spend': 'Tiempo por invertir',
    'gross-net': 'Sueldo bruto vs sueldo neto',
    'task-new': 'Tareas Nuevas',
    'task-done': 'Tareas completadas',
    'task-in-progress': 'Tareas en progreso',
    'task-blocked': 'Tareas bloqueadas',
    'task-title': 'Análisis de Tareas',
    tasks: 'Tareas',
    'project-title': 'Análisis de Proyectos',
    'project-open': 'Proyectos abiertos',
    'project-closed': 'Proyectos cerrados',
    projects: 'Proyectos',
    number: 'Número',
    week: 'Vista semanal'
  },
  en: {
    title: 'Manage your work has never been so easy',
    'salary-value': 'Actual salary',
    'symbol-money': '$',
    'time-spent-vs': 'Time spent vs time to spend per week',
    'time-spent': 'Time spent',
    'time-to-spend': 'Time to spend',
    'gross-net': 'Gross salary vs net salary',
    'task-new': 'New tasks',
    'task-done': 'Tasks done',
    'task-in-progress': 'Tasks in progress',
    'task-blocked': 'Tasks blocked',
    'task-title': 'Tasks Analysis',
    tasks: 'Tasks',
    'project-title': 'Projects Analysis',
    'project-open': 'Open projects',
    'project-closed': 'Closed projects',
    projects: 'Projects',
    number: 'Number',
    week: 'Weekly view'
  }

}
