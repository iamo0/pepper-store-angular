```ts
interface Service {}

class ClassOne implements Service {}

interface LoaderService {
  load: () => Promise<[]>
};

class DefaultLoader implements LoaderService {
  async load() {
    const response = await fetch("/api");
    const data = await response.json() as [];
    return data;
  }
};

class TestLoader implements LoaderService {
  load() {
    return new Promise((res) => res([]));
  }
}

class ClassTwo {
  constructor(service: Service) {

  }

  async loadData(dataLoader: LoaderService) {
    await dataLoader.load();
  }
}

const myService = new ClassOne();
const myMainClass = new ClassTwo(myService);

myMainClass.loadData(new DefaultLoader());
myMainClass.loadData(new TestLoader());
```