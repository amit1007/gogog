import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {
  resetUpload1: boolean;
  
  token: string = "lkdjlfjld";
  afuConfig1 = {
    multiple:true,
    uploadAPI: {
      url: "https://slack.com/api/files.upload"
    }
  };

  
  constructor() { }

  ngOnInit() {
  }
  DocUpload(env) {
    console.log(env);
  }
  resetfu(id) {
    //this.rfu.resetFileUpload(id);
    //id == 1 ? this.afuref1.resetFileUpload() : this.afuref2.resetFileUpload();
    this[`afuref${id}`].resetFileUpload();
    //this.resetUpload1 = true;
  }
}
