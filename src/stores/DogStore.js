import {decorate, observable} from 'mobx';

class DogStore {

    dogs = ["Fido", "Popsi", "Krelle", "GDawg"];




}
decorate(DogStore, {dogs: observable});
export const dogStore = new DogStore();