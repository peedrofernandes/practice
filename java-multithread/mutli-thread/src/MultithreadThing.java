public class MultithreadThing extends Thread {
  private int threadNumber;
  private int milliSeconds;

  public MultithreadThing(int threadNumber, int milliSeconds) {
    this.threadNumber = threadNumber;
    this.milliSeconds = milliSeconds;
  }

  @Override
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println("From thread " + this.threadNumber + ": " + i + ";");
      try {
        Thread.sleep(this.milliSeconds);
      } catch (InterruptedException e) { }
    }

  }
}
