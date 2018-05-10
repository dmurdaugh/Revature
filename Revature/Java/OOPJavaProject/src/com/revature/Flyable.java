package com.revature;

//interfaces are contracts that must be fulfilled
public interface Flyable {
			//cpould of been : public abstract infterface Flyable
		/*
		 * Concrete= Methods with a body/implementation
		 * abstract method = no body/implementation, it is not defined
		 */
	
		public void takeFlight();
		
		public void superHeroLanding(); // abstract keyword nor required in Interfaces
}
