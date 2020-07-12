import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servr-element',
  templateUrl: './servr-element.component.html',
  styleUrls: ['./servr-element.component.css']
})
export class ServrElementComponent implements OnInit {
  @Input('srvElement') element: {type: string,  name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
