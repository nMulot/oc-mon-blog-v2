import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() index: number;
    @Input() post: Post;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
    }

    getColor() {
        if ( this.post.loveIts > 0 ) {
            return 'green';
        } else if ( this.post.loveIts < 0 ) {
            return 'red';
        }
    }

    addLoveIts() {
        this.postsService.addLoveIts(this.post);
    }

    decreaseLoveIts() {
        this.postsService.decreaseLoveIts(this.post);
    }

    onDeletePost() {
        this.postsService.removePost(this.index);
    }

}
