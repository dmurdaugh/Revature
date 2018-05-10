package com.revature;

public class MainClass {
	
	/*
	 *  Exceptions: A disrupt in the normal flow of the application that is recoverable;
	 *  	-Checked	-compiler forces developer to handle with try/catch or "duck it"
	 *  	-unchecked (runtime)	-compiler is unaware of the exception being thrown and will not force developer to handle at all.
	 *  
	 *  Error: A non-recoverable disrupt in the flow of an application
	 *  	-StackOverflowError (stack)
	 *  	-OutOfMemoryError	(heap)
	 *  
	 */

	public static void main(String[] args) {
		System.out.println("Working");

		//new MainClass().divideByZero();//because main method is static and divideByZero is not
		double b=32.33D;
		try{
		checkedExceptionThrown(9);
		addAllExcept10(10);
		}catch(MyCustomException e){
			e.printStackTrace();
			
		}catch(IllegalArgumentException e){
			e.printStackTrace();
		}finally{
			//finally block: This block executes no matter if an exception was thrown or not
				//Used to close resources
			System.out.println("Finally block");
		}
		//Runtime are made to avoid bad coding, not to handle normal disrupts
		//closer to errors
		//addAllExcept10(10);
		
		System.out.println("All Done");
	}
	
	public void divideByZero(){

		int i=0;
		//input from user
		
		// assign to i;
		
		//divide 10 by i;
		
		//unchecked because it is a child of RuntimeException
		System.out.println(10/i);
			
		System.out.println("After the divide");
	
	}
	
	public static void checkedExceptionThrown(int i) throws MyCustomException{
		//checked-Exception because it is a direct child of Exception
		if(i==10){
		throw new MyCustomException();
		}
	}

	public static void addAllExcept10(int i){
		if(i==10){
			throw new IllegalArgumentException();
		}
		System.out.println("Adding i to the sum");
	}
}
