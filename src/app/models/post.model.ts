export class Post {
    public loveIts: number;
    public created_at: string;

    constructor(public title: string, public content: string) {
        this.loveIts = 0;
        const now = new Date();
        this.created_at = '' + now.getTime();
    }

}
