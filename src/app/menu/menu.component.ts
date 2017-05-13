import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menus = [
        {text: '설비점검', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '설비비가동', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '설비급유', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '창고', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '구매', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '외주출고', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '외주입고', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '납품등록', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '안돈시스템', cols: 1, rows: 1, color: '#f4cd41'},
        {text: '안돈시스템2', cols: 1, rows: 1, color: '#f4cd41'},
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
