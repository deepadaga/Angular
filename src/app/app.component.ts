import { Component } from '@angular/core';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toaster-not';
  constructor(private notifyService : NotificationService) { }
  
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "deepWrite success msga.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "Write error msg")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "Write info msg")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "write warning msg")
  }
}
