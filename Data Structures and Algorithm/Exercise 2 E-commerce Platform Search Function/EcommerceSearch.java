import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearch {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Camera", "Electronics")

        };

        // Linear Search

        System.out.println("===== Linear Search =====");

        Product linearResult = LinearSearch.search(products, "Watch");

        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product not found.");
        }

        // Sort the array before Binary Search

        Arrays.sort(products, new Comparator<Product>() {
         @Override
          public int compare(Product p1, Product p2) {
        return p1.productName.compareToIgnoreCase(p2.productName);
    }
});

        // Binary Search

        System.out.println("\n===== Binary Search =====");

        Product binaryResult = BinarySearch.search(products, "Watch");

        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product not found.");
        }
    }
}