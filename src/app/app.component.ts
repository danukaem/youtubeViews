import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  playVideos(){
    alert("Hello world")
  }

  title = 'my-app';
  videoLink = "https://www.youtube.com/embed/fsl5Whrwt0Q?si=pLh2HifSaE_qukVk";

  listA = [
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name1", value: 1 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name1", value: 1 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name1", value: 1 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name1", value: 1 }, { name: "name1", value: 1 }, { name: "name2", value: 2 },
    { name: "name3", value: 3 }, { name: "name4", value: 4 }, { name: "name1", value: 1 }
  ]
}
