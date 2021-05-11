import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
})

export class loadmoreComponent {
  @Input() objs: any[]
  @Input() objKey: string
  @Input() loadmore = false

  @Output() loadmoreEv = new EventEmitter<any>()
  @Output() objEv = new EventEmitter<any>()

  ddText: string
  displayBool = false
  ccCheck: boolean

  onDrop(){
    //this.ccCheck = true
    this.displayBool = !this.displayBool

    setTimeout(function(){
      console.log('cccheck before drop ' +this.ccCheck);
      this.ccCheck = false
      console.log('done setting cccheck ' +this.ccCheck);
    }, 3000);
  }

  onLoadmore(){
    this.ccCheck = true
    this.displayBool = true
    this.loadmore = !this.loadmore
    this.loadmoreEv.emit()

    setTimeout(function(){
      console.log('cccheck before drop ' +this.ccCheck);
      this.ccCheck = false
      console.log('done setting cccheck ' +this.ccCheck);

    }, 3000);
  }

  outsideClick(){
    console.log('ccCheck on parent click '+this.ccCheck)
    if (!this.ccCheck) {
    console.log('clicked outside row')
    this.displayBool = false
    }
  }

  // onParentClick(){
  //   console.log('ccCheck on parent click '+this.ccCheck);

  //   if (!this.ccCheck) {
  //     console.log(this.displayBool +' display bool');
  //     console.log('changing');
  //     this.displayBool = false
  //     console.log(this.displayBool);
  //   }
  // }

  onSelect(event, obj){
    this.ddText = event.target.innerText
    this.objEv.emit(obj)
    this.displayBool = false
  }
}
