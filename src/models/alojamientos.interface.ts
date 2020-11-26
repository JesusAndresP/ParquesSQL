export interface AlojamientoI{
    $key?: string; //Angular necesita este campo.
    ID_Alojamiento: string,
    Capacidad: number,
    Categoria: string,
    Parque: string
}