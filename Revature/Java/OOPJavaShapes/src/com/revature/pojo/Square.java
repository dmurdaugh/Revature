package com.revature.pojo;

import com.revature.abstracts.Shape;

public class Square extends Shape{

		@Override
		public void decreaseSideLength(){
			System.out.println("increasing sides on square");
		}
}