public class App {
    public static void main(String[] args) {

        for (int i = 0; i < 5; i++) {
            // Create a new thread that extends from Thread
            MultithreadThing myThing = new MultithreadThing(i, i * 100);

            // MultiThreadThing.start() == Create and execute new concurrent thread
            myThing.run();
        }


        
    }
}
