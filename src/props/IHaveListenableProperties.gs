package props

interface IHaveListenableProperties {
  function addListener( propName : String, listener : block(Object):Object );
}