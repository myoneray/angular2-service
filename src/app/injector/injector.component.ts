import {
  Component,
  OnInit,
  ReflectiveInjector
} from '@angular/core';

// 服务
class MyService {
  getValue(): string {
    return "hi maizi!";
  }
}

// 创建应用组件
@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.css']
})
export class InjectorComponent implements OnInit {

  myService: MyService;

  constructor() {
    //创建新的注入器，
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    //从创建的注入器中得到MyService实例，然后存储在myService字段中。
    this.myService = injector.get(MyService);
    //从注入器中再次得到一个实例，并与之前的实例做比对 打印结果：Same instance: true 即:两个实例指的是同一个对象
    console.log('Same instance:', this.myService === injector.get(MyService));
  }


  invokeService(): void {
    console.log('my service  returned', this.myService.getValue());
  }

  ngOnInit() {
  }

}
