classpath "../src"

uses props.*

var ex1 = new ExampleGosuClass()

var ex2 = new ExampleGosuClass()

ex1#Prop1.addListener( \ o -> { print( o ); return o + " Yay!" }  )

ex1.Prop1 = "Hello Listeners!"

print( ex1.Prop1 )

ex2.Prop1 = "Nope, no listener..."

print( ex2.Prop1 )
