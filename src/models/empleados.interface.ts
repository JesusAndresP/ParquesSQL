export interface EmpleadosI {
  $key?: string; //Angular necesita este campo.
    dni: number;
    nombre: string;
    n_ss: number;
    direccion: string;
    telefono: number;
    salario: number;
    tipo_empleado: string;
    
  }