import { HighlightDirective } from './../highlight.directive';
import { UserService } from './../user.service';
import { FootComponent } from './foot.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        HighlightDirective,
        FootComponent,
    ],
    imports: [ CommonModule , NgZorroAntdModule],
    // 特性模块需要导出组件
    exports: [ FootComponent],
    providers: [],
})
export class FootModule {}