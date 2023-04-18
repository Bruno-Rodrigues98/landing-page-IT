import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services-landing-page',
  templateUrl: './services-landing-page.component.html',
  styleUrls: ['./services-landing-page.component.scss'],
})
export class ServicesLandingPageComponent {
  services = [
    {
      title: 'RM Integral',
      description: 'Ferramenta para avaliação do risco de mercado das carteiras, medindo, simulando, monitorando e controlando essa exposição. Possui dois módulos complementares: Módulo V@R, para atender a Resolução 3.464; Módulo EVE, metodologia alternativa ao modelo V@R para mensuração do risco de taxa de juros de operação da carteira banking.'
    },
    {
      title: 'RL Integral',
      description: 'Incorpora grandes avanços ao processo de gestão da liquidez das instituições financeiras. Desenvolvido a partir da necessidade de controles estabelecidos pela Resolução 4.090 do Bacen.'
    },
    {
      title: 'RO Integral',
      description: 'Desenvolvido para controlar, registrar, avaliar, monitorar e mitigar riscos operacionais, atendendo às exigências da Resolução 3.380 do Banco Central.'
    }
  ];

}
