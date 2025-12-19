import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Autoservico } from './pages/autoservico/autoservico';
import { Solicitante } from './pages/solicitante/solicitante';
import { Criarsolicitacao } from './pages/solicitante/criarsolicitacao/criarsolicitacao';
import { Sucesso } from './pages/solicitante/criarsolicitacao/sucesso/sucesso';
import { Minhassolicitacoes } from './pages/solicitante/minhassolicitacoes/minhassolicitacoes';
import { Consultarcancelamento } from './pages/solicitante/minhassolicitacoes/consultarcancelamento/consultarcancelamento';
import { Consultarindeferimento } from './pages/solicitante/minhassolicitacoes/consultarindeferimento/consultarindeferimento';
import { Cancelamento } from './pages/solicitante/minhassolicitacoes/cancelamento/cancelamento';
import { Visualizarsolicitacao } from './pages/solicitante/minhassolicitacoes/visualizarsolicitacao/visualizarsolicitacao';
import { Detalharpendenciadocumental } from './pages/solicitante/minhassolicitacoes/detalharpendenciadocumental/detalharpendenciadocumental';
import { Detalharpendenciageorreferenciamento } from './pages/solicitante/minhassolicitacoes/detalharpendenciageorreferenciamento/detalharpendenciageorreferenciamento';
import { Tomarcienciatitulacao } from './pages/solicitante/minhassolicitacoes/tomarcienciatitulacao/tomarcienciatitulacao';
import { Visualizarminutatitulo } from './pages/solicitante/minhassolicitacoes/visualizarminutatitulo/visualizarminutatitulo';
import { Consultarinstrucoesretirada } from './pages/solicitante/minhassolicitacoes/consultarinstrucoesretirada/consultarinstrucoesretirada';
import { Consultarindeferimentoautorizacaoobra } from './pages/solicitante/minhassolicitacoes/consultarindeferimentoautorizacaoobra/consultarindeferimentoautorizacaoobra';
import { Corrigirpendenciadocumental } from './pages/solicitante/minhassolicitacoes/corrigirpendenciadocumental/corrigirpendenciadocumental';
import { Corrigirpendenciadocumentalgeo } from './pages/solicitante/minhassolicitacoes/corrigirpendenciadocumentalgeo/corrigirpendenciadocumentalgeo';
import { Visualizarautorizacaoobra } from './pages/solicitante/minhassolicitacoes/visualizarautorizacaoobra/visualizarautorizacaoobra';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'autoservico', component: Autoservico },
  { path: 'autoservico/criarsolicitacao', component: Criarsolicitacao },
  { path: 'solicitante', component: Solicitante },
  { path: 'solicitante/criarsolicitacao', component: Criarsolicitacao },
  { path: 'solicitante/criarsolicitacao/sucesso', component: Sucesso },
  { path: 'solicitante/minhassolicitacoes', component: Minhassolicitacoes },
  { path: 'solicitante/minhassolicitacoes/consultarcancelamento', component: Consultarcancelamento },
  { path: 'solicitante/minhassolicitacoes/consultarindeferimento', component: Consultarindeferimento },
  { path: 'solicitante/minhassolicitacoes/cancelamento', component: Cancelamento },
  { path: 'solicitante/minhassolicitacoes/visualizarsolicitacao', component: Visualizarsolicitacao },
  { path: 'solicitante/minhassolicitacoes/detalharpendenciadocumental', component: Detalharpendenciadocumental },
  { path: 'solicitante/minhassolicitacoes/detalharpendenciageorreferenciamento', component: Detalharpendenciageorreferenciamento },
  { path: 'solicitante/minhassolicitacoes/tomarcienciatitulacao', component: Tomarcienciatitulacao },
  { path: 'solicitante/minhassolicitacoes/visualizarminutatitulo', component: Visualizarminutatitulo },
  { path: 'solicitante/minhassolicitacoes/consultarinstrucoesretirada', component: Consultarinstrucoesretirada },
  { path: 'solicitante/minhassolicitacoes/consultarindeferimentoautorizacaoobra', component: Consultarindeferimentoautorizacaoobra },
  { path: 'solicitante/minhassolicitacoes/corrigirpendenciadocumental', component: Corrigirpendenciadocumental },
  { path: 'solicitante/minhassolicitacoes/corrigirpendenciadocumentalgeo', component: Corrigirpendenciadocumentalgeo },
  { path: 'solicitante/minhassolicitacoes/visualizarautorizacaoobra', component: Visualizarautorizacaoobra },  
  { path: '**', redirectTo: '' } // optional fallback
];

