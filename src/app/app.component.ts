import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    tiles = [
        {text: '생산', cols: 1, rows: 1, color: '#f4bb41'},
        {text: '외주', cols: 1, rows: 1, color: '#f4bb41'},
        {text: '납품', cols: 1, rows: 1, color: '#f4bb41'},
        {text: '창고', cols: 1, rows: 1, color: '#f4bb41'},
        {text: '구매', cols: 1, rows: 1, color: '#f4bb41'},
    ];
    moornmo = [
        '홈페이지',
        '게시판'
    ];
}
