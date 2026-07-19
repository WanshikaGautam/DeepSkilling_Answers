import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {

        // Setup
        calculator = new Calculator();

        System.out.println("Setup completed");
    }

    @AfterEach
    public void tearDown() {

        // Teardown
        calculator = null;

        System.out.println("Teardown completed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int firstNumber = 10;
        int secondNumber = 5;

        // Act
        int result = calculator.add(firstNumber, secondNumber);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {

        // Arrange
        int firstNumber = 10;
        int secondNumber = 5;

        // Act
        int result = calculator.multiply(firstNumber, secondNumber);

        // Assert
        assertEquals(50, result);
    }
}