import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  interpolation: ["[[","]]"]
})
export class AppComponent {
  title = 'ang_app';

  constructor(private modalService: NgbModal) {
    console.log("I am a constructor");
  }

  ngOnChanges() {
    console.log("I am ngOnChanges");
  }

  ngOnInit() {
    console.log("I am ngOnInit");
  }

  ngDoCheck() {
    console.log("I am ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("I am ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("I am ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("I am ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("I am ngAfterViewChecked");
  }

  ngDoDestroy() {
    console.log("I am ngDoCheck");
  }

  open(modal: any) {
    this.modalService.open(modal);
  }
}
