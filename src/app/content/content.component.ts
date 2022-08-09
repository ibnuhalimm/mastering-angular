import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    allowNewContent = false;
    createContentStatus = 'No content created';

    constructor() {
        setTimeout(() => {
            this.allowNewContent = true;
        }, 3000);
    }

    ngOnInit(): void {
    }

    onCreateContent() {
        this.createContentStatus = 'Content was created!';
    }

}
