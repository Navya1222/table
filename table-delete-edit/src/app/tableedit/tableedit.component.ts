import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { modalinfo, modalmessage, modaltitle } from '../modal/enummodal';
import { ModalService } from '../modal/modal.service';
import { ApiserviceService } from '../services/apiservice.service';
import { DatasharingService } from '../services/datasharing.service';
import { FormService } from './tableedit';

@Component({
  selector: 'app-tableedit',
  templateUrl: './tableedit.component.html',
  styleUrls: ['./tableedit.component.css']
})
export class TableeditComponent implements OnInit {
  loginForm!: FormGroup;
  ClearForm:any;
  subscribe!: Subscription;
  submitted: boolean = false
  constructor(public api: ApiserviceService, private modalservice: ModalService,private router:Router,private formgenerate: FormService, private formbuilder: FormBuilder, private service: DatasharingService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(this.formgenerate.loginForm())
    this.ClearForm=this.loginForm.value;
    this.loginForm.patchValue(this.service.Editdata);
  }
  onSave() {
    this.submitted = true;
    if(this.loginForm.valid){
    let apicall=null;
    apicall=this.loginForm.controls.id.value!=null?this.api.put(this.loginForm.value,this.loginForm.controls.id.value):this.api.post(this.loginForm.value)
    this.subscribe = apicall.subscribe(res => {
      this.modalservice.confirm(modaltitle.Save,modalmessage.Save, modalinfo.Info)
      this.service.Editdata=null;
      this.router.navigate(['table']);
    }, (err) => {
      alert("Failed to get data");
    });
  }
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}
