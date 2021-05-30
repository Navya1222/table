import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  constructor(private modalService: NgbModal) { }
  public confirm(
    title: string,
    message: string,
    btnType:number,
    dialogSize: 'sm'|'lg'|'md' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ModalComponent, { size:dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnType = btnType;
    return modalRef.result;
  }
}
