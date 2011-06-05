package props
uses java.util.HashMap
uses java.util.ArrayList

class PropHolder {
  var _props = new HashMap<String, Object>()
  var _callback = new HashMap<String, List<block(val:Object):Object>>().toAutoMap( \ s -> new ArrayList<block(val:Object):Object>() )
  
  function setProp( name : String, val : Object ) {
    for( cb in _callback[name] ) {
      val = cb( val )
    }
    _props[name] = val
  }
  
  function getProp( name : String ) : Object {
    return _props[name]
  }
  
  function addPropListener( name : String, blk : block(val:Object):Object ) {
    _callback[name].add( blk )
  }
}
