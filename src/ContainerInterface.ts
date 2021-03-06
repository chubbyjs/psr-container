interface ContainerInterface {
    get<T>(id: string): T;
    has(id: string): boolean;
}

export default ContainerInterface;
