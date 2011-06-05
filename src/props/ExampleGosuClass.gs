package props

class ExampleGosuClass implements IHaveListenableProperties {
  var _props = new PropHolder() 
  
  property get Prop1() : String {
    return _props.getProp( "Prop1" ) as String
  }

  property set Prop1( s : String ) {
    _props.setProp( "Prop1", s )
  }
  
  override function addListener( propName : String, listener : block(Object):Object ) {
    _props.addPropListener( propName, listener )
  }
  
  property get ThisAsProp() : ExampleGosuClass {
    return this
  }

}