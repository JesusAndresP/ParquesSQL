export interface EspeciesI {
  $key?: string; //Angular necesita este campo.
    ID_Especie: string,
    Denom_Cientifica: string,
    Denom_Vulgar:string,
    Tipo_Especie: string,
    Sexo?: string,
    Periodo_Celo?: string,
    Tipo_Alimentacion?: string,
    Alimento_De?: string,
    Floracion?: string,
    Periodo_Floracion?: string,
    Tipo_Mineral?: string
  }
