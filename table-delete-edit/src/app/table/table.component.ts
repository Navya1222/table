import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { modalinfo, modalmessage, modaltitle } from '../modal/enummodal';
import { ModalService } from '../modal/modal.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  postdata: any = [];
  subscribe!: Subscription;
  constructor(public api: ApiserviceService, private modalservice: ModalService) {
  }
  ngOnInit(): void {
    this.subscribe = this.api.get().subscribe(res => {
      console.log('data', res);
      this.postdata = res;
    }, (err) => {
      alert("Failed to get data");
    });
  }
  onDelete(id: any,index:any) {
    this.modalservice.confirm(modaltitle.Delete,
      modalmessage.DeleteConf,
      modalinfo.Cofirm).then((confirmed) => {
        if(confirmed){
          this.subscribe = this.api.deletePost(id).subscribe(res => {
            this.postdata.splice(index, 1);
          })
        }
      }).
      catch(() => console.log('error'))
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}
