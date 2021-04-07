import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }
  ngOnInit(): void {
  }
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "SUCCESS")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "ERROR")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "INFO")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "WARNING")
  }

  

}
