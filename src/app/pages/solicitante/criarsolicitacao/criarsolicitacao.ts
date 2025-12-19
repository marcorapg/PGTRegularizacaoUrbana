import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Breadcrumb } from "../../../layout/breadcrumb/breadcrumb";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Identificacao } from './identificacao/identificacao';
import { Selecao } from './selecao/selecao';
import { Dados } from './dados/dados';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criarsolicitacao',
  imports: [Breadcrumb, CommonModule, FormsModule, Identificacao, Selecao, Dados, RouterLink],
  templateUrl: './criarsolicitacao.html',
  styleUrl: './criarsolicitacao.css'
})
export class Criarsolicitacao implements AfterViewInit {
  pageBreadcrumbs = [
    { text: 'Home', address: '/solicitante/' },
    { text: 'Solicitação de Título de Regularização Fundiária Urbana', address: '/solicitante/criarsolicitacao/' }
  ];

  ngAfterViewInit(): void {
    const core = (window as any).core;

    document.querySelectorAll('.br-wizard').forEach((el: Element, index: number) => {
      new core.BRWizard(`wizard-${index}`, el);
    });

    const accordionList = []
    for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
      accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
    }

    const selectList = [];
    const notFoundElement = `
    <div class="br-item not-found">
      <div class="container">
      <div class="row">
        <div class="col">
        <p><strong>Ops!</strong> Não encontramos o que você está procurando!</p>
        </div>
      </div>
      </div>
    </div>
    `

    for (const brSelect of window.document.querySelectorAll('.br-select')) {
      const brselect = new core.BRSelect('br-select', brSelect, notFoundElement)
      selectList.push(brselect);
    };

    const datetimepickerList = [];
    for (const brDateTimePicker of window.document.querySelectorAll(
      '.br-datetimepicker'
    )) {
      datetimepickerList.push(
        new core.BRDateTimePicker('br-datetimepicker', brDateTimePicker, { minDate: '15/04/1900', maxDate: '20/04/2099' }
        ));
    };


    window.document.querySelectorAll('[data-toggle="collapse"]').forEach((trigger) => {
      const config = {
        iconToHide: 'fa-chevron-up',
        iconToShow: 'fa-chevron-down',
        trigger,
        useIcons: true,
      }
      const collapse = new core.Collapse(config)
      collapse.setBehavior()
    });

    const uploadList = [];
    function uploadTimeout() {
      return new Promise((resolve) => {
        // Colocar aqui um upload para o servidor e retirar o timeout
        return setTimeout(resolve, 3000)
      })
    }

    for (const brUpload of window.document.querySelectorAll('.br-upload')) {
      uploadList.push(new core.BRUpload('br-upload', brUpload, uploadTimeout))
    }
  }
}
