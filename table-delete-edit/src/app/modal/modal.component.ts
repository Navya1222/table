import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { modalinfo } from './enummodal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string ='';
  @Input() message: string ='';
  @Input() btnType:number=modalinfo.Info;
  constructor(private activeModal: NgbActiveModal) {

   }
  ngOnInit(): void {
  }
  // dismiss(){
  //   this.activeModal.dismiss();
  // }
  decline(){
    this.activeModal.close(false)
  }
  accept() {
    this.activeModal.close(true);
  }
}
