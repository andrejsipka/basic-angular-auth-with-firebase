import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
    @Input() public label: string = '';
    @Input() public control: any;
    @Input() public id: string = '';
    @Input() public type: string = ''; // Used for "for" as well

    public ngOnInit(): void {

    }
}
