export namespace DemoModule {
    interface User {
        id: number | string;
        name: string;
    }

    type State = {
        user: User | undefined;
    }
}