export interface EmpleadosI {
  $key?: string; //Angular necesita este campo.
    ID_Empleado: number;
    Nombre_Empleado: string;
    SeguridadSocial: number;
    Direccion: string;
    Telefono: number;
    Celular: number;
    Sueldo: number;
    Tipo_Empleado: string;
  }
