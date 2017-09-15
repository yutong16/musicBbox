import { HighlightDirective } from './../highlight.directive';
import { UserService } from './../user.service';
import { FootComponent } from './foot.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HighlightDirective,
        FootComponent,
    ],
    imports: [ CommonModule ],
    // 特性模块需要导出组件
    exports: [ FootComponent],
    providers: [],
})
export class FootModule {}