import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string='https://tm.ibxk.com.br/2022/11/09/09181147165356.jpg'
  contentTitle:string='Noticia Patera Negra'
  contentDescription:string=' grr Wakanda'
  constructor(
    private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
this.route.paramMap.subscribe( value =>
  console.log(value.get('id'))
)
  }
}
