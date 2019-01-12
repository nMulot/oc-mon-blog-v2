import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar odio lorem, ut sodales diam elementum ac. Fusce vulputate laoreet quam, mollis interdum orci egestas sed. Proin eget posuere mauris, in tincidunt dolor. Donec justo felis, mollis sed turpis id, malesuada ultrices ipsum. Mauris vel pellentesque purus, eu interdum velit. Duis ligula nisi, fermentum quis euismod sed, molestie sed nunc. Pellentesque quis sodales dui. Phasellus vestibulum nisi dolor, vel imperdiet turpis eleifend elementum. Etiam porttitor convallis augue, vitae dapibus nibh dictum in. Phasellus non mattis turpis, ac imperdiet metus. Aliquam erat volutpat. Pellentesque id sem fermentum, fermentum tellus nec, vestibulum ante. Duis consequat, nibh id vulputate tincidunt, neque leo laoreet justo, in facilisis nunc ante eu elit.',
            loveIts: 3,
            created_at: new Date()
        },
        {
            title: 'Mon second post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar odio lorem, ut sodales diam elementum ac. Fusce vulputate laoreet quam, mollis interdum orci egestas sed. Proin eget posuere mauris, in tincidunt dolor. Donec justo felis, mollis sed turpis id, malesuada ultrices ipsum. Mauris vel pellentesque purus, eu interdum velit. Duis ligula nisi, fermentum quis euismod sed, molestie sed nunc. Pellentesque quis sodales dui. Phasellus vestibulum nisi dolor, vel imperdiet turpis eleifend elementum. Etiam porttitor convallis augue, vitae dapibus nibh dictum in. Phasellus non mattis turpis, ac imperdiet metus. Aliquam erat volutpat. Pellentesque id sem fermentum, fermentum tellus nec, vestibulum ante. Duis consequat, nibh id vulputate tincidunt, neque leo laoreet justo, in facilisis nunc ante eu elit.',
            loveIts: -2,
            created_at: new Date()
        },
        {
            title: 'Mon troisième poste',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar odio lorem, ut sodales diam elementum ac. Fusce vulputate laoreet quam, mollis interdum orci egestas sed. Proin eget posuere mauris, in tincidunt dolor. Donec justo felis, mollis sed turpis id, malesuada ultrices ipsum. Mauris vel pellentesque purus, eu interdum velit. Duis ligula nisi, fermentum quis euismod sed, molestie sed nunc. Pellentesque quis sodales dui. Phasellus vestibulum nisi dolor, vel imperdiet turpis eleifend elementum. Etiam porttitor convallis augue, vitae dapibus nibh dictum in. Phasellus non mattis turpis, ac imperdiet metus. Aliquam erat volutpat. Pellentesque id sem fermentum, fermentum tellus nec, vestibulum ante. Duis consequat, nibh id vulputate tincidunt, neque leo laoreet justo, in facilisis nunc ante eu elit.',
            loveIts: 0,
            created_at: new Date()
        }
    ];
}
