import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Create service using the mock
        MyService service = new MyService(mockApi);

        // Step 2: Call the method
        service.fetchData();

        // Step 3: Verify that getData() was called
        verify(mockApi).getData();
    }
}