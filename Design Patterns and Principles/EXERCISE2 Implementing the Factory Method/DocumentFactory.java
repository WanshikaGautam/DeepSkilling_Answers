public abstract class DocumentFactory {

    // Factory Method
    public abstract Document createDocument();

    public void openDocument() {
        Document document = createDocument();
        document.open();
    }
}