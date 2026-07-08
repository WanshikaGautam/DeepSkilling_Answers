public class TestSingleton {

    public static void main(String[] args) {

        // Get the singleton instance
        Logger logger1 = Logger.getInstance();
        logger1.log("Application Started");

        // Get the singleton instance again
        Logger logger2 = Logger.getInstance();
        logger2.log("User Logged In");

        // Get the singleton instance once more
        Logger logger3 = Logger.getInstance();
        logger3.log("Application Closed");

        // Print hash codes to verify all references point to the same object
        System.out.println("\nHash Codes:");
        System.out.println("logger1: " + logger1.hashCode());
        System.out.println("logger2: " + logger2.hashCode());
        System.out.println("logger3: " + logger3.hashCode());

        // Verify singleton behavior
        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("\nOnly one Logger instance exists.");
        } else {
            System.out.println("\nMultiple Logger instances exist.");
        }
    }
}