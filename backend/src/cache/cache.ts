export class Cache {
    data: string | null;
    lifetime: Promise<void>;
    constructor(lifetime_minutes?: number) {
        let lifetime = lifetime_minutes ? lifetime_minutes * 60 * 1000 : 1 * 60 * 1000

        this.data = null;

        this.lifetime = new Promise(() => {
            setTimeout(() => {
                this.data = null;
            }, lifetime)
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

export class PersistantCache {
    data: string | null;
    constructor() {
        this.data = null;
    }

    set(data: string) {
        this.data = data;
    }

    get() {
        return this.data;
    }
}

export class L2cache {
    data: Map<string, {
        lifetime: Promise<void>,
        data: any
    }>;

    lifetime: (arg0: string) => Promise<void>;

    constructor(lifetime_minutes?: number) {
        let lifetime = lifetime_minutes ? lifetime_minutes * 60 * 1000 : 1 * 60 * 1000;

        this.data = new Map();

        this.lifetime = (key: string) => new Promise(() => {
            setTimeout(() => {
                this.data.delete(key);
            }, lifetime);
        });
    }

    set(key: string, value: any) {
        let entry = {
            lifetime: this.lifetime(key),
            data: value
        };
        this.data.set(key, entry);
    }

    get(key: string) {
        return this.data.get(key)?.data;
    }
}