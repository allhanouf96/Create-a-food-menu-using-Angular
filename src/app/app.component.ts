import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuAng';
  logo="/assets/images/logo.png"
  total=0;
  qty=0;

  foodmenu=[
    {id:1,name:"نوفل تشوكلت كروسان",price:43,description:"خبز الكروسان الفرنسي محشو بالشوكولاته البلجيكيه مع الويفر الهش تعلوه كمية الكاسترد الخاص والدولتشي",img:"/assets/images/1.png"},
    {id:2,name:" سويت مكس بيري كروسان",price:45,description:"خبز الكروسان الفرنسي محشو بالشوكولاته البلجيكيه مع الويفر الهش تعلوه كمية الكاسترد الخاص والدولتشي ",img:"/assets/images/2.png"},
    {id:3,name:"فرنش كيوبز بقلاوه",price:45,description:"قطع من البريوش الهشه والمحشوه بالبقلاوه العربيه بالفستق تقدم ساخنه مع كراميل الزعفران اللذيذ",img:"/assets/images/3.png"},
    {id:4,name:"تشنكي بف",price:44,description:"قطع من عجينة الشو المخبوزة تقدم مع الكاسترد الناعم ونوعين من الشوكولا البلجيكية الفاخره",img:"/assets/images/4.png"}
  ]
// sum Function
  sum(event:any, price:number){
    const ischecked:boolean=event.target.checked;
    console.log(ischecked)
     if(ischecked){
      this.total=this.total+price;
      this.qty+=1;
     }
     else{
      this.total=this.total-price;
      this.qty-=1;
     }


  }
  // Find Function
 searchItem="";
  find(foodmenu:any[]){
    return foodmenu.filter(item=>item.name.includes(this.searchItem))
  }

}
