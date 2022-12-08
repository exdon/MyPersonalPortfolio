export interface Titles {
    nav: NavTitles
}

export interface NavTitles {

}

export enum Teste {
  STARTER = 'HOME'


}

export const mapTitlesLanguage = new Map<Teste, string>([
  [Teste.STARTER, 'A expirar'],
  // [Teste.AUTHORISED, 'Ativo'],
  // [Teste.EXPIRED, 'Expirado'],
  // [Teste.AWAITING_AUTHORISATION, 'Pedido Iniciado'],
  // [Teste.REVOKED, 'Encerrado'],
  // [Teste.REJECTED, 'Encerrado'],
]);
