package com.edubridge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.model.Product;
import com.edubridge.service.ProductServiceImp1;

@RestController
@CrossOrigin("*")
public class ProductController {
	
	@Autowired
	public ProductServiceImp1 productService;
	
	@GetMapping("/getProduct/{id}")
	public ResponseEntity<?> getPdoduct(@PathVariable Integer id){
		Product product = productService.getProduct(id);
		if(product == null) {
			return new ResponseEntity<>("Product not found with this id",HttpStatus.BAD_REQUEST);
		}else {
			return new ResponseEntity<>(product, HttpStatus.OK);
		}
	}
	@GetMapping("/getAllProduct")
	public ResponseEntity<?> getAllProduct(){
		return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
	}
	
	
		@GetMapping("/getProductByName/{name}")
		public ResponseEntity<?> getPdoductByName(@PathVariable String name){
			Product product = productService.getProductByName(name);
			if(product == null) {
				return new ResponseEntity<>("Product not found with this id",HttpStatus.BAD_REQUEST);
			}else {
				return new ResponseEntity<>(product, HttpStatus.OK);
			}
		
		}
		@PostMapping("/addProduct")
		public ResponseEntity<?> addProduct(@RequestBody Product product){
			productService.addProduct(product);
			return new ResponseEntity<>("Product added",HttpStatus.OK);
		}


	@PutMapping("/updateProduct/{id}/{newprice}")
	public ResponseEntity<?> updateProduct(@PathVariable Integer id,@PathVariable double newprice){
		productService.UpdateProductPrice(id, newprice);
		return new ResponseEntity<>("Product has been updated",HttpStatus.OK);
		
	}
	@DeleteMapping("/deleteProduct/{id}")
	
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id){
		productService.deleteProduct(id);
		return new ResponseEntity<>("Product has been deleted",HttpStatus.OK);
		
	}
	
	
	
}
