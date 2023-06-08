export class cache {
    data: string | null;
    lifetime;
    constructor(lifetime_minutes?: number) {
        this.data = null;
        this.lifetime = new Promise(() => {
            setTimeout(() => {
                this.data = null;
            }, lifetime_minutes ? lifetime_minutes * 60 * 1000 : 1 * 60 * 1000)
        });
    }

    set(data: string) {
        this.data = data;
        this.lifetime;
    }

    get() {
        return this.data;
    }
}
