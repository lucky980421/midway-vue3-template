

export class Entity<T> {
    state: T
    constructor(state: T) {
        this.state = state;
    }
}