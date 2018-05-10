package com.Revature;

public class HelloWorld {
	//this is a comment: main method is the entry point of our application
	
	public static void main(String[] args) {
		
		
		String hello ="hello world";
		System.out.println(hello);
		
		new Person();
		
		//left Side is the object reference variable
					//Right side is the instantiation of the object using the "new" keyword
		Person john= new Person();
		Person steve = new Person(); 
		john.age=12;
		john.name="john";
		john.id=1;
		System.out.println(john.id +" "+ john.age +" "+ john.name);
		
	}
	
	
	public void primitives(){
		/*
		 * primitive data types
		 */
		
		byte g=0;		// 8 bits  -128 to 127
		short c=127; 	//16 bits  -32768 to 32767
		int a=5; 		//32 bits	-2147482648 to 2147482647
		long e=500_000;	//64 bits
		
		boolean f= true;//N/A, depends upon the machine
		char z= 'c';	// 16 bits
		
		//floating points
		float h = 1.2f; // 32bit
		double b=10.5; 	// Double is larger and the default 64 
		
		System.out.println(z);
	}

}
