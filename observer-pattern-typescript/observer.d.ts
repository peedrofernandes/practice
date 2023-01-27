export interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObserver();
}

export interface Observer {
  update(temperature: number);  
}