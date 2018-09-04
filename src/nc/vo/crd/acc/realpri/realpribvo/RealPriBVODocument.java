/*
 * An XML document type.
 * Localname: RealPriBVO
 * Namespace: http://realpri.acc.crd.vo.nc/RealPriBVO
 * Java type: nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument
 *
 * Automatically generated - do not modify.
 */
package nc.vo.crd.acc.realpri.realpribvo;


/**
 * A document containing one RealPriBVO(@http://realpri.acc.crd.vo.nc/RealPriBVO) element.
 *
 * This is a complex type.
 */
public interface RealPriBVODocument extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(RealPriBVODocument.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s6607560D1AA176E9637C63A88AD4B5EC").resolveHandle("realpribvo4a1fdoctype");
    
    /**
     * Gets the "RealPriBVO" element
     */
    nc.vo.crd.acc.realpri.realpribvo.RealPriBVO getRealPriBVO();
    
    /**
     * Sets the "RealPriBVO" element
     */
    void setRealPriBVO(nc.vo.crd.acc.realpri.realpribvo.RealPriBVO realPriBVO);
    
    /**
     * Appends and returns a new empty "RealPriBVO" element
     */
    nc.vo.crd.acc.realpri.realpribvo.RealPriBVO addNewRealPriBVO();
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument newInstance() {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (nc.vo.crd.acc.realpri.realpribvo.RealPriBVODocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
